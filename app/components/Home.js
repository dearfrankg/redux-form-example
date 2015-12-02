import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

  // disabled because they give warnings
  // static propTypes = {
  //   counter: PropTypes.number.isRequired,
  //   increment: PropTypes.func.isRequired,
  //   decrement: PropTypes.func.isRequired
  // };

  render () {
    let { counter, increment, decrement } = this.props;

    return (
      <div>
        <h1>Home...</h1>

        <p>
          Counter: {counter}
          {' '}
          <button onClick={decrement}>decrement</button>
          {' '}
          <button onClick={increment}>increment</button>
        </p>
      </div>
    );
  }

}
