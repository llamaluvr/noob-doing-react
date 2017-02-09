import React from 'react';
import ReactDOM from 'react-dom';

import math from './scripts/math';

import './styles/main.css'

/*const sayHi = () => {
    console.log('hello world! Two plus Three is ' + math.add(2,3));
};

sayHi();*/

class HelloWorld extends React.Component {
    render() {
      var answer = math.add(40,2);
      return <h1>Hello world! The answer is {answer}.</h1>;
    }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('main')
);