
# meteor-client v1.1.7 [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This package is stripped from [meteor/meteor](https://atmospherejs.com/meteor/meteor) and made compatible with [React Native](https://github.com/facebook/react-native).

**Note:** This package is only for client-side usage.

&nbsp;

## usage

```js
var Meteor = require('meteor-client');
```

Make sure to call `Meteor.connect` before anything else Meteor-related.

Replace `localhost` with your local IP address.

```js
Meteor.connect('ws://localhost:3000/websocket');
```

Learn more about Meteor [here](http://docs.meteor.com/).

See all packages that are compatible with React Native and NodeJS [here](https://github.com/aleclarson/meteor-client/wiki/Available-Packages).

&nbsp;

## install

```sh
npm install aleclarson/meteor-client#1.1.7
```

&nbsp;

## changelog

- Removed `__meteor_runtime_config__` support.

- `Meteor.connect()` was added. It must be called before anything else Meteor-related.

- `Meteor.startup()` isn't necessary in React Native
