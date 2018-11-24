import React, { Component } from "react";
import API from "./api/API";
import RoomLineChart from "./Chart/RoomLineChart";

class KitchenChart extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		this.fetchAPI();
	}

	fetchAPI = async () => {
		const data = await API.GETToilet();
		this.setState({ data });
	};

	render() {
		const { data } = this.state;
		let displayChart = "Loading...";
		if (data.length) {
			const todayDate = Object.keys(data[0]);
			const todayData = data[0][todayDate];
			displayChart = <RoomLineChart data={todayData} />;
		}
		return (
			<div>
				<h3>KitchenChart</h3>
				{displayChart}
			</div>
		);
	}
}

export default KitchenChart;
