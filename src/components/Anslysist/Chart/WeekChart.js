import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import CustomTooltip from "../Tooltip/CustomTooltip";

const WeekChart = ({ data, maxLeftY = 100, maxRightY = 1000 }) => (
	<BarChart width={700} height={500} data={data}>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="date" />
		<YAxis allowDataOverflow={true} type="number" domain={[0, maxLeftY]} yAxisId="left" />
		<YAxis orientation="right" allowDataOverflow={true} type="number" domain={[0, maxRightY]} yAxisId="right" />
		<Tooltip content={<CustomTooltip />} />
		<Legend />
		<Bar type="monotone" dataKey="tempt" stroke="#f70909" fill="#f70909" yAxisId="left" stackId="a" />
		<Bar type="monotone" dataKey="moist" stroke="#4c00ff" fill="#4c00ff" yAxisId="left" stackId="a" />
		<Bar dataKey="CO2" barSize={20} fill="#A0A09F" yAxisId="right" />
	</BarChart>
);

export default WeekChart;
