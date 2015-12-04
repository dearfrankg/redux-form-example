import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reactMixin from 'react-mixin';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import {Link} from 'react-router';
import { reduxForm } from 'redux-form';
import * as actionCreators from '../actions';

let fields = ['username', 'password'];
let validate = function () { return {};};

@reduxForm({ form: 'login-form', fields, validate })
export default class Login extends Component {

  static propTypes = {
    submitting: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    resetForm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  // componentWillMount () {
  //   this.props.actions.loginUserInit();
  // }

  submit(values) {
    console.log('SUBMIT')
    let redirect = this.props.location.query.next || '/feed';
    this.props.actions.loginUser(values.username, values.password, redirect);
  }

  render() {
    console.log('LOGIN', this.props)

    const {
      fields: {username, password},
      handleSubmit,
      submitting
    } = this.props;

    return (
      <div className="g-row login">
        <div className="g-col">
          <h1 className="login__heading">Sign In</h1>

          {(this.props.statusText) ? <div className='alert alert-info'>{this.props.statusText}</div> : null}
          <form className="pure-form pure-form-stacked" onSubmit={handleSubmit( this.submit.bind(this) )}>

            <legend>Login Form</legend>

              <div className="pure-control-group">
                <label>* Username, or Email</label>
                <input type="text" placeholder="Username, or Email" {...username}/>
                {username.touched && username.error && <div className="errors">{username.error}</div>}
              </div>

              <div className="pure-control-group">
                <label>* Password</label>
                <input type="password" placeholder="Password" {...password}/>
                {password.touched && password.error && <div className="errors">{password.error}</div>}
                <Link to='/reset-request' className="forgot-password">forgot password?</Link>
              </div>

              <button className="submit__button" onClick={handleSubmit( this.submit.bind(this) )}>Submit</button>

          </form>

        </div>
      </div>
    );

  }
}

reactMixin(Login.prototype, LinkedStateMixin);
