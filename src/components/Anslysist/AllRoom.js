import React, { Component } from "react";
import { connect } from "react-redux";
import BedroomChart from "./BedroomChart";
import LivingroomChart from "./LivingroomChart";
import KitchenChart from "./KitchenChart";
import BathroomChart from "./BathroomChart";
import { Form, Tab } from "semantic-ui-react";
import UnitInfo from "./UnitInfo";

class AllRoom extends Component {
	state = { value: "day" };

	handleChange = (e, { value }) => this.setState({ value });

	render() {
		const { value } = this.state;
		const panes = [
			{
				menuItem: "Bedroom",
				render: () => (
					<Tab.Pane>
						<BedroomChart period={value} />
					</Tab.Pane>
				)
			},
			{
				menuItem: "Livingroom",
				render: () => (
					<Tab.Pane>
						<LivingroomChart period={value} />
					</Tab.Pane>
				)
			},
			{
				menuItem: "Kitchen",
				render: () => (
					<Tab.Pane>
						<KitchenChart period={value} />
					</Tab.Pane>
				)
			},
			{
				menuItem: "Bathroom",
				render: () => (
					<Tab.Pane>
						<BathroomChart period={value} />
					</Tab.Pane>
				)
			}
		];
		return (
			<div className="Analyst-Main-Page">
				<h2 className="ui header">
					{/* <img className="ui image" src={require("../../../image/menu/heaterHeader.png")}/> */}
					<div className="content headerText">Analyst</div>
				</h2>
				<hr />

				<Tab style={{ margin: "20px 0" }} panes={panes} />
				<Form>
					<Form.Group inline style={{ justifyContent: "center" }}>
						<label>Time</label>
						<Form.Radio
							label="Day"
							value="day"
							checked={value === "day"}
							onChange={this.handleChange}
						/>
						<Form.Radio
							label="Week"
							value="week"
							checked={value === "week"}
							onChange={this.handleChange}
						/>
						<Form.Radio
							label="Month"
							value="month"
							checked={value === "month"}
							onChange={this.handleChange}
						/>
					</Form.Group>
				</Form>
				<UnitInfo />
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
