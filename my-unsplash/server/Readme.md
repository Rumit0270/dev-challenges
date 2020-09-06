# Backend for My Unsplash Challenge

The repo contains the backend code for My Unsplash Challenge. Apis are deployed using firebase cloud functions.

### Deployment

To deploy the firebase functions simply run the follwing commands from the server directory

```sh
$ firebase login
$ firebase deploy --only functions
```

### Note

Firebase Cloud Functions is deployed with node version 8. To deploy in the recommended version(10), we need to enroll in Blaze Plan. Deploying with node version 8 is soon to be deprecated.
