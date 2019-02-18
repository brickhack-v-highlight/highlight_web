# highlight

## Installing dependencies

In the project directory, run the following command: 

### `npm install`

Installs all of the necessary dependencies.

## Setting up configuration

You will need to set up the [streaming app client](https://github.com/brickhack-v-highlight/highlight_app) and [backend microservice](https://github.com/brickhack-v-highlight/highlight_microservice). 

You will also need to create your own config.js in the root of the project's src directory to match your settings in the aforementioned app & backend:

`twitchToId`: an object mapping twitch url strings to their ids (also as strings)

`urls`: a list of the urls (as strings) you wish to broadcast on the dashboard and jumbotron

`herokuString`: the string form of the api call to the backend microservice for setting a phone as active

[config.js]
---
```
const twitchToId = {
  "https://twitch.tv/example": 1234567891,
  ...
};

const urls = [
  https://twitch.tv/example,
  https://www.youtube.com/watch?v=oHg5SJYRHA0,
  ...
];

const herokuString = "https://myhighlightmicroservice.herokuapp.com/set_active";

module.exports = {
  twitchToId: twitchToId,
  urls: urls,
  herokuString: herokuString
};
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the dashboard in the browser.

Open [http://localhost:3000/jumbo](http://localhost:3000/jumbo) to view the highlight in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `node server`

Runs the server for the app in development mode.<br>
By default this is listening at [http://localhost:8000](http://localhost:8000)

This server controls the frequency for which the app polls for new urls.
-Not fully implemented-

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
