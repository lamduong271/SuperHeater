import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actions from "../../actions/index";
// import { Button } from "semantic-ui-react";
// import { Route, Link } from "react-router-dom";
// import BedroomChart from "./BedroomChart";
import ToiletChart from "./ToiletChart";
import { Form } from "semantic-ui-react";
// var LineChart = require("react-chartjs").Line;

class AllRoom extends Component {
	state = { value: "day" };

	handleChange = (e, { value }) => this.setState({ value });

	render() {
		const { value } = this.state;
		return (
			<div className="Analyst-Main-Page">
				<h2 className="ui header">
					{/* <img className="ui image" src={require("../../../image/menu/heaterHeader.png")}/> */}
					<div className="content headerText">Analyst</div>
				</h2>
				<hr />
				{/* <BedroomChart></BedroomChart> */}
				<ToiletChart period={value} />
				<Form>
					<Form.Group inline>
						<label>Time</label>
						<Form.Radio label="Day" value="day" checked={value === "day"} onChange={this.handleChange} />
						<Form.Radio label="Week" value="week" checked={value === "week"} onChange={this.handleChange} />
						<Form.Radio label="Month" value="month" checked={value === "month"} onChange={this.handleChange} />
					</Form.Group>
				</Form>
			</div>
		);
	}
}

const styles = {};

const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = (dispatch, props) => {
	return {};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AllRoom);
