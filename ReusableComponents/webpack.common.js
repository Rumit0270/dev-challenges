const path = require('path');

// automatically place generated bundles in html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// extract css separately
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  // Define the entrypoint for app
  entry: {
    bundle: './src/index.tsx',
  },
  // Define the output for the bundle
  output: {
    // define the output dir path
    path: path.resolve(__dirname, 'dist'),
    // define the output filename
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    // configure webpack to identify the generated bundles by hash
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      name: true,
      automaticNameDelimiter: '~',
      cacheGroups: {
        // place all node_modules code into a separate chunk
        commons: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // specify webpack to use our html document as
      // a reference when generating the final html document
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
