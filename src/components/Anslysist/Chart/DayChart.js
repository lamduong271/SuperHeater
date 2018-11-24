import React from "react";
import { ComposedChart, CartesianGrid, Area, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import CustomTooltip from "../Tooltip/CustomTooltip";

const DayChart = ({ data }) => (
	<ComposedChart width={700} height={500} data={data}>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="time" />
		<YAxis />
		<Tooltip content={<CustomTooltip />} />
		<Legend />
		<Area dataKey="CO2" barSize={20} fill="#A0A09F" />
		<Area type="monotone" dataKey="tempt" stroke="#f70909" fill="#f70909" />
		<Area type="monotone" dataKey="moist" stroke="#4c00ff" fill="#4c00ff" />
	</ComposedChart>
);

export default DayChart;
