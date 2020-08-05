const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');

const imgSrc = 'assets/images/**/*';
const imgDest = 'public/images/';

const sassSrc = 'sass/**/*.scss';
const cssDest = 'public/css/';
const postCSSConfig = [
  require('postcss-assets')({
    loadPaths: [imgDest],
  }),
  require('autoprefixer')(),
  require('cssnano'),
];

// css minification and auto prefix
gulp.task('styles', () => {
  return gulp
    .src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postCSSConfig))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.reload({ stream: true }));
});

// images optimization
gulp.task('images', () => {
  return gulp
    .src(imgSrc)
    .pipe(newer(imgDest))
    .pipe(imagemin())
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(imgDest));
});

gulp.task('clean', () => {
  return del(['css/main.css']);
});

// run in watch mode for dev environment
gulp.task('server', () => {
  gulp.watch(imgSrc, (done) => {
    gulp.series(['images'])(done);
  });

  gulp.watch(sassSrc, (done) => {
    gulp.series(['clean', 'styles'])(done);
  });
});

gulp.task('default', gulp.series(['images', 'clean', 'styles']));
