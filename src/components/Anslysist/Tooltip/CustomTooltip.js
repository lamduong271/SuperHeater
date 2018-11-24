import React from "react";
import { idealConstants } from "../api/idealConstants";
import "./style.css";

const onHealthAssessment = (name, value) => {
	const roomValue = Number(value);
	const idealMinVal = idealConstants[name][0],
		idealMaxVal = idealConstants[name][1];
	let tempt, humidity, CO2, watt, cost;
	if (name === "tempt") {
		if (roomValue >= idealMinVal && roomValue <= idealMaxVal) {
			tempt = "Room temperature is ideal";
		} else if (roomValue < idealMinVal) {
			tempt = "Room temperature is too cold";
		} else if (roomValue > idealMaxVal) {
			tempt = "Room temperature is too hot";
		} else {
			tempt = "Invalid room temperature";
		}
	}
	if (name === "humidity") {
		if (roomValue >= idealMinVal && roomValue <= idealMaxVal) {
			humidity = "Room humidity is ideal";
		} else if (roomValue < idealMinVal) {
			humidity = "Room humidity is too low";
		} else if (roomValue > idealMaxVal) {
			humidity = "Room humidity is too high";
		} else {
			humidity = "Invalid room humidity";
		}
	}
	if (name === "CO2") {
		if (roomValue >= idealMinVal && roomValue <= idealMaxVal) {
			CO2 = "Room CO2 is ideal";
		} else if (roomValue < idealMinVal) {
			CO2 = "Room CO2 is too low";
		} else if (roomValue > idealMaxVal) {
			CO2 = "Room CO2 is too high";
		} else {
			CO2 = "Invalid room CO2";
		}
	}
	if (name === "watt") {
		if (roomValue >= idealMinVal && roomValue <= idealMaxVal) {
			watt = "Room energy consumption is ideal";
		} else if (roomValue > idealMaxVal) {
			watt = "Room energy consumption is too large";
		} else {
			watt = "Invalid room energy consumption";
		}
	}
	return { tempt, humidity, CO2, watt, cost: null };
};

const CustomTooltip = props => {
	const { active, label, name, payload } = props;
	if (active) {
		return (
			<div className="custom-tooltip">
				<h5>{label}</h5>
				<div className="indicator">
					{payload.map(val => (
						<div key={val.dataKey}>
							<div>
								{val.name}: {val.value}
							</div>
							<div>{onHealthAssessment(val.name, val.value)[val.name]}</div>
						</div>
					))}
				</div>
			</div>
		);
	}
	return null;
};

export default CustomTooltip;
