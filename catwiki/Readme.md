# Catwiki Challenge

The repository contains the code for the Catwiki challenge. Application is deployed in heroku and a working demo is available at: https://catwiki-2020.herokuapp.com/

## Catwiki API Features:

- API docs with swagger-ui and swagger-jsdoc
- Docker for local development
- API logging support

### Setup Local environment

For ease of use, docker is used for running API locally. Once docker is installed in the system simply follow the following step.

- Place two environment variables files named **.env** and **.env.development** at the root of the project directory. Place the docker compose stage env vars in .env file and remaining application env vars in .env.development file. Examples for these env var file structure can be found in the project repo.
- Simply run the following command to start up the server in docker container.

```sh
$ docker-compose up
```

- You can stop the running container with command

```sh
$ docker-compose down
```

### Run Integration Tests

- Use the following command to run the intergration tests

```sh
$ docker-compose -f docker-compose.test.yml up --abort-on-container-exit
```

OR

```sh
$ yarn run docker-test
```

**NOTE**: Sometimes due to caching, running API tests and server with docker-compose can result in unexpected behaviour. In such case, append --build flag with docker-compose.

For example:

```sh
$ docker-compose up --build
```

OR

```sh
$ docker-compose -f docker-compose.test.yml up --abort-on-container-exit --build

```

### Deployment

For deployment, you have to configure the production environment variables. An example of such variables can be found in **env.production.example** placed at the root of this repository.

To deploy in heroku, you can follow the following steps:

- Install the heroku cli and login to your heroku account

```sh
$ heroku login
```

- Create a new heroku application either from command line or from Heroku GUI

- Configure your production environment variables from the heroku GUI

- Associate your local repository with heroku remote

```sh
$ heroku git:remote -a YOUR_APPLICATION_NAME
```

- Push your repository to the heroku remote

```sh
$ git add .
$ git commit -am "Heroku Deployment"
$ git push heroku master
```

**NOTE**: If you cloned the entire repository (dev-challenges), you should only push the contents of catwiki folder to the heroku. You can do that by entering the following command from the root directory

```sh
$  git subtree push --prefix catwiki heroku master
```

Or force push using

```sh
$  git push heroku `git subtree split --prefix catwiki master`:master --force
```
