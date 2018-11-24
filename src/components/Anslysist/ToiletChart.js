import React, { Component } from "react";
import API from "./api/API";
import DayChart from "./Chart/DayChart";
import WeekChart from "./Chart/WeekChart";
import moment from "moment";
import { Header } from "semantic-ui-react";

class ToiletChart extends Component {
	state = {
		data: []
	};

	componentDidMount() {
		this.fetchAPI();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.period !== this.props.period) {
			this.fetchAPI();
		}
	}

	fetchAPI = async () => {
		const data = await API.GETToilet();
		const timeMark = this.getTimeMark();
		const flterData = data.filter(day => Object.keys(day)[0] >= timeMark);
		this.setState({ data: [...flterData] });
	};

	getTimeMark = () => {
		const { period } = this.props;
		let day;
		if (period === "day") {
			day = moment().format("YYYY-MM-DD");
		}
		if (period === "week") {
			day = moment()
				.days(-7)
				.format("YYYY-MM-DD");
		}
		return day;
	};

	onDisplayChart = (data, period) => {
		let displayChart;
		if (period === "day") {
			const today = data[0];
			const todayDate = Object.keys(today)[0];
			const todayData = today[todayDate];
			displayChart = <DayChart data={todayData} />;
		}
		if (period === "week") {
			const thisWeek = data;
			const weekData = thisWeek.map(day => {
				const date = Object.keys(day)[0];
				const dayValues = day[date];
				let totalTempt = 0,
					totalMoist = 0,
					totalCO2 = 0;
				dayValues.forEach(dayVal => {
					if (dayVal) {
						totalTempt += dayVal.tempt;
						totalMoist += dayVal.moist;
						totalCO2 += dayVal.CO2;
					}
				});
				return {
					date,
					tempt: (totalTempt / 6).toFixed(2),
					moist: (totalMoist / 6).toFixed(2),
					CO2: (totalCO2 / 6).toFixed(2)
				};
			});
			let joinWeekData = [];
			for (let i = 0; i < weekData.length; i++) {
				joinWeekData = joinWeekData.concat(weekData[i]);
			}
			displayChart = <WeekChart data={joinWeekData} />;
		}
		return displayChart;
	};

	render() {
		const { data } = this.state;
		const { period } = this.props;
		let displayChart = "Loading...";
		if (data.length) {
			displayChart = this.onDisplayChart(data, period);
		}
		return (
			<div>
				<Header as="h3" block>
					Toilet Quality
				</Header>
				{displayChart}
			</div>
		);
	}
}

export default ToiletChart;
