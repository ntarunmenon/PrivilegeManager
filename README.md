Sample Write

# Privelege

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Details about the project

1. This project used json-server to mock the back end.
2. json-server has been customised using node and typescript. The integration is ugly and needs to be improved

## Running the project

1. Run `tsc src/server/server.ts` once to generate server.js
2. ` nodemon src/server/server.js` to run the node mock server.
3. `npm start` to run the application.
4.  Any user name and password will get you in.


## Future list of things to do.

1. Remove mock-server completely and replace with express and postgres.
2. Dockerise the application.
3. Deploy to AWS manually.
4. Automate Deploy to AWS.
5. Set up build pipeline so that every commit is automatically deployed to an  AWS environment.
