// Register the main component with AppRegistry

var React = require('react-native');
var { AppRegistry } = React;

var Main = require('./src/main');

AppRegistry.registerComponent('postmates', () => Main);
