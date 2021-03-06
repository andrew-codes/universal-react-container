# Universal React App

## Development
 
### Prerequisites

- [node@^6.10.0](https://nodejs.org/en/)
- [yarn@^0.21.3](https://yarnpkg.com/en/)

### Running Locally

1. Run `yarn` to install dependencies.
2. Then run `yarn start` to start the app.
3. Load `http://localhost:3001` in your browser.

## Deployments

### Docker

1. Ensure the `/.build.sh` file is executable via `chmod +x ./build.sh`.
2. Build the docker image by executing `./build.sh`.
3. Run `SECURITY_TOKEN_SECRET='security secret' docker run -d -p 80:3001 -e SECURITY_TOKEN_SECRET universal-react-app` to run the container. Run the container while connected to a remote docker-machine such as digital ocean to deploy.
  - `SECURITY_TOKEN_SECRET` is used to create JSON web tokens for authenticating users. **DO NOT** forget to set this for production deployments.

## Manual
Optionally, you can run `yarn run build` and deploy the output `dist` directory; running the command `node server/server.js` within the `dist` directory.

