import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
import BedroomChart from './BedroomChart';
var LineChart = require("react-chartjs").Line;

class AllRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="Analyst-Main-Page">
        <h2 className="ui header">
        {/* <img className="ui image" src={require("../../../image/menu/heaterHeader.png")}/> */}
        <div className="content headerText">
          Analyst
        </div>
        </h2>
        <hr/>
          <BedroomChart></BedroomChart>
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
export default connect(mapStateToProps, mapDispatchToProps)(AllRoom);
