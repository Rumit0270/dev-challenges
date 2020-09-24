# Catwiki API

## Features:

- API docs with swagger-ui and swagger-jsdoc
- Docker for local development
- API logging support

## Setup Local environment

For ease of use, docker is used for running API locally. Once docker is installed in the system simply follow the following step.

- Place two environment variables files named .env and .env.development at the root of the project directory. Place the docker compose stage env vars in .env file and remaining application env vars in .env.development file. Examples for these env var file structure can be found in the project repo with .example suffix
- Simply run the following command to start up the server in docker container.

```sh
$ docker-compose up
```
