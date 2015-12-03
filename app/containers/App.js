import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';

import '../styles/main.scss';

class App extends Component {

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render () {
    let stuff = [];
    for (var x in this.props) {
      stuff.push(<div key={x}> {x}, {
        x === 'state' && JSON.stringify(this.props.state, null, 2) ||
        x === 'actions' && Object.keys(this.props.actions).join(`\n`) || ''
      }</div>);
    }

    // stack overflow technique -- http://goo.gl/TcCsbv
    let childrenWithProps = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {...this.props});
    });


    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        {childrenWithProps}

        <pre>
        {stuff}
        </pre>
      </div>
    );

  }

}

export default connect(
  state => ({ state: state }),
  dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) })
)(App)
