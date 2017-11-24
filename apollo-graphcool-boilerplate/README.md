# Fusion Boilerplate /w Apollo & Graph.cool

An example app written using Fusion, Apollo, and Graph.cool.

## Setup

Sign up for [Graph.cool](http://graph.cool).

Copy and rename config/config.js.tpl to config/config.js and include your graph.cool simple API endpoint.

Deploy the database backend:

```
cd backend && yarn && ./node_modules/.bin/graphcool deploy
```

Run the app frontend:
```
yarn && yarn dev
```

This boilerplate was originally taken from the [graphcool-examples](https://github.com/graphcool-examples/react-graphql/tree/master/authentication-with-email-and-apollo).