import React from "react";
import {
	ComposedChart,
	CartesianGrid,
	Area,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend
} from "recharts";
import CustomTooltip from "../Tooltip/CustomTooltip";

const DayChart = ({ data }) => (
	<div style={{ display: "flex" }}>
		<div>
			<h5>Quality</h5>
			<ComposedChart width={500} height={300} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="time" />
				<YAxis />
				<Tooltip content={<CustomTooltip />} />
				<Legend />
				<Area dataKey="CO2" barSize={20} fill="#A0A09F" />
				<Area type="monotone" dataKey="tempt" stroke="#f70909" fill="#f70909" />
				<Area
					type="monotone"
					dataKey="humidity"
					stroke="#4c00ff"
					fill="#4c00ff"
				/>
			</ComposedChart>
		</div>
		<div>
			<h5>Energy Consumption & Price</h5>
			<ComposedChart width={500} height={300} data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="time" />
				<YAxis allowDataOverflow={true} type="number" yAxisId="left" />
				<YAxis
					orientation="right"
					allowDataOverflow={true}
					type="number"
					yAxisId="right"
				/>
				<Tooltip content={<CustomTooltip />} />
				<Legend />
				<Area dataKey="watt" stroke="#d9e29c" fill="#d9e29c" yAxisId="right" />
				<Area dataKey="cost" stroke="#7280a3" fill="#7280a3" yAxisId="left" />
			</ComposedChart>
		</div>
	</div>
);

export default DayChart;
