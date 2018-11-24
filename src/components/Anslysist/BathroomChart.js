import React, { Component } from "react";
import API from "./api/API";
import { Header } from "semantic-ui-react";
import { getTimeMark, onDisplayChart } from "./helper";

class BathroomChart extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		this.fetchAPI();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.period !== this.props.period) {
			this.fetchAPI();
		}
	}

	fetchAPI = async () => {
		const { period } = this.props;
		const data = await API.GETBathroom();
		const timeMark = getTimeMark(period);
		const flterData = data.filter(day => Object.keys(day)[0] >= timeMark);
		this.setState({ data: [...flterData] });
	};

	render() {
		const { data } = this.state;
		const { period } = this.props;
		let displayChart = "Loading...";
		if (data.length) {
			displayChart = onDisplayChart(data, period);
		}
		return (
			<div>
				<Header as="h3" block>
					Bathroom
				</Header>
				{displayChart}
			</div>
		);
	}
}

export default BathroomChart;
