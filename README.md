# Sample-Source
This is a test demo on nestjs framework using the monorepo project structure
## NB
WIP on api gateway to support graphql so don't bother running api project
The protoc ts files are added to the repo so no need to install protobuf-complier deps.

# Requirement
In order to generate protoc ts files install these library or related
```console 
$ sudo apt-get install libprotobuf-dev protobuf-compiler 
```

Nest-Cli
```console 
$ yarn global add @nestjs/cli
```
Docker 
> You need docker to run this app
# Installation
```console
yarn install
docker-compose up --build -d
yarn start:user
```

## Documentation
[Kelvin's Architecture Sample](docs/KelvinBirikorang-Architecture-Pattern.md)
