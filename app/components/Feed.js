import React, { Component, PropTypes } from 'react';

export default class Feed extends Component {

  // disabled because they give warnings
  // static propTypes = {
  //   counter: PropTypes.number.isRequired
  // };

  render () {
    let { counter } = this.props;
    return (
      <div>
        <h1>Feed...</h1>

        <p>
          Counter: {counter}
        </p>
      </div>
    );
  }

}
