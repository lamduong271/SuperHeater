import React from "react";
import moment from "moment";
import DayChart from "./Chart/DayChart";
import WeekChart from "./Chart/WeekChart";

export const getTimeMark = period => {
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

export const onDisplayChart = (data, period) => {
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
				totalhumidity = 0,
				totalCO2 = 0,
				watt = 0,
				cost = 0;
			dayValues.forEach(dayVal => {
				if (dayVal) {
					totalTempt += dayVal.tempt;
					totalhumidity += dayVal.humidity;
					totalCO2 += dayVal.CO2;
					watt += dayVal.watt;
					cost += dayVal.cost;
				}
			});
			return {
				date,
				tempt: (totalTempt / 6).toFixed(4),
				humidity: (totalhumidity / 6).toFixed(4),
				CO2: (totalCO2 / 6).toFixed(4),
				watt: watt.toFixed(4),
				cost: cost.toFixed(4)
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
