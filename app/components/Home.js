import React, { Component, PropTypes } from 'react';

export default class Home extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    console.log('HOME', this.props)

    let { state, actions } = this.props;

    return (
      <div>
        <h1>Home...</h1>

        <p>
          Counter: {state.counter}
          {' '}
          <button onClick={actions.decrement}>decrement</button>
          {' '}
          <button onClick={actions.increment}>increment</button>
        </p>
      </div>
    );
  }

}
