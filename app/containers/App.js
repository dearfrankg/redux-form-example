import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';

import '../styles/main.scss';

class App extends Component {

  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render () {

    // stack overflow technique -- http://goo.gl/TcCsbv
    let childrenWithProps = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {...this.props});
    });

    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/feed">Feed</Link></li>
        </ul>

        {childrenWithProps}
      </div>
    );
  }

}

export default connect(
  state => ({
    counter: state.counter
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App)
