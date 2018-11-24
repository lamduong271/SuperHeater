import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import wittoken from '../../key_secret/wit';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {

// make a request
fetch(
    'https://api.wit.ai/message?v=20181124&q=hello',
    {
      method: 'GET',
      headers: {Authorization: `Bearer ${wittoken}`}
    }
    )
    .then(response => response.json())
    .then(json => console.log(json));
      }
    

  render() {
    return (
      <div>
         div
      </div>
     
    );
  }
}

const styles = {
}

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
