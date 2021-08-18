# Median Web Client

A **react.js** based blogging web app front end for [Median](https://github.com/deprov447/median-server) API. This front end tries to be as closely similar to [Medium](https://medium.com) as possible. But currently it does not leverage many of the features implemented in Medium. 

## Development 

To create your development environment, follow these steps: 

- Clone this repo: `git clone https://github.com/deprov447/median-web-client.git`
- move into the local copy `cd median-web-client`
- Install dependencies: `npm install`
- Setup the environment variables:
	- At this point you might want to setup your own Median API using [https://github.com/deprov447/median-server](https://github.com/deprov447/median-server) 
	- In root directory of the median-web-client run: `echo REACT_APP_GQL_SERVER_URL = <your Median server url> > .env`
- Start the development environment: `npm start`

## Tech Stack Used

- React.js
- Apollo
- Tailwind CSS
- Heroku

>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
