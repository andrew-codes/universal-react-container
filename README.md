# Universal React App

## Development
 
### Perquisites

- [node@^6.10.0](https://nodejs.org/en/)
- [yarn@^0.21.3](https://yarnpkg.com/en/)

### Running Locally

1. Run `yarn` to install dependencies.
2. Then run `yarn start` to start the app.
3. Load `http://localhost:3001` in your browser.

## Deployment via Docker

1. Ensure the `/.build.sh` file is executable via `chmod +x ./build.sh`.
2. Build the docker image by executing `./build.sh`.
3. Run `docker run -d -p 80:3001 universal-react-app` to run the container. Run the container while connected to a remote docker-machine such as digital ocean to deploy.

