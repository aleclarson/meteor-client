
# meteor-client v1.1.7 [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

This is the core of Meteor. It needs other Meteor packages to do anything useful,
but you will always need this package as a dependency.

This package is stripped from [meteor/meteor](https://atmospherejs.com/meteor/meteor) and made compatible with [React Native](https://github.com/facebook/react-native).

**Note:** This package is only for client-side usage.

&nbsp;

## usage

```js
var Meteor = require('meteor-client');

// This implements `Meteor.connect`
require('ddp');

// Replace 'localhost' with your local ip address
Meteor.connect('ws://localhost:3000/websocket');
```

**Note:** `Meteor.startup` is not necessary in React Native.

See all packages that are compatible with React Native and NodeJS [here](https://github.com/aleclarson/meteor-client/wiki/Available-Packages).

Learn more about Meteor [here](http://docs.meteor.com/).

&nbsp;

## install

Install both `meteor-client` and `ddp` to get started with Meteor.

```sh
npm install aleclarson/meteor-client#1.1.7 aleclarson/ddp#1.2.0
```
