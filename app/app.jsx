var React = require('react');
var ReactDOM = require('react-dom');

var ObjOne = {
  name: 'Sagar',
  location: 'Pune'
};

var ObjTwo = {
  age: 25,
  ...ObjOne
};

console.log(ObjTwo);

ReactDOM.render(
  <h1>Boilerplate App</h1>,
  document.getElementById('app')
);
