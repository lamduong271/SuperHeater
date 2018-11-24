import React from "react";
import { Message } from "semantic-ui-react";

const MessageExampleInfo = () => (
	<Message info>
		<Message.Header>Did you know our standard unit measurement?</Message.Header>
		<p>CO2 emission: ppb</p>
		<p>Temperature: Celcius degree</p>
		<p>Humidity: %</p>
		<p>Cost: EUR</p>
	</Message>
);

export default MessageExampleInfo;
