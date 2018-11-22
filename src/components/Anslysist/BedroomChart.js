import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { Button } from 'semantic-ui-react';
import { Route, Link } from 'react-router-dom';
var LineChart = require("react-chartjs").Line;

class BedroomChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.4)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.4)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 33, 27, 33]
        }
      ]
    };

    const renderLabel = data.datasets.map(label => {
        return (
            <div key={label.label}>
                <div className="label-detail">
                <div className="label-color" style={{backgroundColor: label.pointHighlightStroke}}></div>
                <div className="label-name">{label.label}</div>
                </div>
                
            </div>
        )
    })
    return (
      <div className="chart-container ui grid">
      
          <div className="chart eleven wide column">
                <LineChart data={data}  width="700" height="250"/>
          </div>
          <div className="chart-label five wide column">
                {renderLabel}

          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(BedroomChart);
