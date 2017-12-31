import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.signInHandler = this.signInHandler.bind(this);
  }

  renderSingInBtn() {
    if(this.props.authenticated) {
      return <button onClick={this.signInHandler}>Sign Out</button>;
    }
    return <button onClick={this.signInHandler}>Sign In</button>;
  }

  signInHandler() {
    this.props.changeAuthStatus(!this.props.authenticated);
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link className="navbar-brand" to="/home">Home</Link>
        <Link className="navbar-brand" to="/resources">Resources</Link>
        {this.renderSingInBtn()}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.authenticated
  };
}
export default connect(mapStateToProps, actions)(Header);

