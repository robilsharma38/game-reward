# Book Management RESTful API

## API Endpoints and Usage

- GET /userInfo - Get User info
- POST /createUser - Add a new User

- GET /saveReward - Save User Reward
- POST /getUserReward - Get User Reward
- GET /getUserGameReward - Get User Specific Game Reward

## Set Up and Run Locally

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up a MongoDB instance either locally or on MongoDB Atlas
4. Update the connection string in `index.js` or `.env`
5. Run `src/node index.js`  or `src/nodemon index.js` || `npm start` to start the server

## Decisions and Assumptions

- This project assumes a basic understanding of Node.js, Express, and MongoDB.
- It assumes that the MongoDB server is already set up and running.
- Proper error handling and validation are not fully implemented in this version.

