# French Press Calculator

This project is a React web application to calculate french press ratios. The project
utilizes [Material UI](https://github.com/react-community/create-react-native-app)  for the front-end, and is written primarily in Typescript.


![Image](screen_shots/shot1.png)

![Image](screen_shots/shot2.png)

## Run via NodeJS

First, ensure the node modules are install by running

```
npm install
```

To run the application in development mode, execute the command

```
npm start
```

To create a production build, execute the command

```
npm run build
```

This will create the build artifacts in a `build` folder. To serve the build assests, install the 
`serve` global node module and run the command

```
serve -s build
```


## Run as a Docker Container

A docker image can be built using the command

```
make docker_build
```

To run the Docker image, execute the command

```
docker run french-press-calculator
```

## Running Tests

Component unit tests are written in [Enzyme](https://airbnb.io/enzyme/). The tests can be executed by running

```
npm test
```
