import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComponsedComponent) => {
  class Authetication extends Component {

/*     componentWillMount(){
      if(!this.props.authenticated) {
        this.props.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated){
        this.props.history.push("/");
      }
    } */
    render() {
      if(!this.props.authenticated){
        return <div>Please sign in to see the resources page</div>;
      }
      return <ComponsedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.authenticated
    };
  }
  return connect(mapStateToProps)(Authetication);
}