import React, { Component } from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "./actions/actionCreators";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
