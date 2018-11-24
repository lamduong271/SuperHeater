import * as types from "../constants/ActionType";
const Rooms = [
	{
		id: 1,
		name: "Bedroom",
		source: require("../image/menu/double-bed.png"),
		heaterLevel: 5,
		heaterStatus: true,
		currentHeaterValue: 5,
		devices: [
			{
				id: 1,
				name: "TV",
				source: require("../image/Furniture/TV.png"),
				kwh: 20
			},
			{
				id: 2,
				name: "Fridge",
				source: require("../image/Furniture/fridge.png"),
				kwh: 30
			},
			{
				id: 3,
				name: "Computer",
				source: require("../image/Furniture/computer.png"),
				kwh: 10
			}
		]
	},
	{
		id: 2,
		name: "Livingroom",
		source: require("../image/menu/armchair.png"),
		devices: [
			{
				id: 4,
				name: "TV",
				source: require("../image/Furniture/TV.png"),
				kwh: 20
			},
			{
				id: 5,
				name: "Lamp",
				source: require("../image/Furniture/lamp2.png"),
				kwh: 30
			}
		],
		heaterLevel: 7,
		heaterStatus: true,
		currentHeaterValue: 7
	},
	{
		id: 3,
		name: "Kitchen",
		source: require("../image/menu/kitchen.png"),
		devices: [
			{
				id: 6,
				name: "Microwave",
				source: require("../image/Furniture/microwave.png"),
				kwh: 20
			},
			{
				id: 7,
				name: "Fridge",
				source: require("../image/Furniture/fridge.png"),
				kwh: 30
			},
			{
				id: 8,
				name: "Oven",
				source: require("../image/Furniture/oven.png"),
				kwh: 10
			}
		],
		heaterLevel: 6,
		heaterStatus: true,
		currentHeaterValue: 6
	},
	{
		id: 4,
		name: "Bathroom",
		source: require("../image/menu/bathtub.png"),
		devices: [
			{
				name: "Washing machine",
				source: require("../image/Furniture/washing-machine.png"),
				watt: 500
			},
			{
				name: "Led",
				source: require("../image/Furniture/led.png"),
				watt: 50
			}
		],
		heaterLevel: 2,
		heaterStatus: true,
		currentHeaterValue: 2
	}
];
const CurrentHeaterValue = 5;
var initialState = {
	Rooms,
	currentRoom: {},
	heaterStatus: true,
	heaterLevel: CurrentHeaterValue
};

const findIndex = state => {
	const found = state.Rooms.findIndex(room => room.id === state.currentRoom.id);
	if (found !== -1) {
		return found;
	} else {
		return -1;
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_ALL_ROOMS:
			return { ...state };
		case types.GET_CURRENT_ROOM:
			const findRoomById = state.Rooms.find(room => room.id === action.roomId);
			if (findRoomById) {
				state.currentRoom = findRoomById;
			}
			console.log("current room ", state.currentRoom);
			return { ...state };
		case types.TURN_ON_HEATER:
			if (findIndex(state) !== -1) {
				state.Rooms[findIndex(state)].heaterStatus = true;
				state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);
			}
			return { ...state };

		case types.TURN_OFF_HEATER:
			if (findIndex(state) !== -1) {
				state.Rooms[findIndex(state)].heaterStatus = false;
				state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);
			}
			return { ...state };

		case types.GET_HEATER_LEVEL:
			if (findIndex(state) !== -1) {
				if (action.value === 0) {
					state.Rooms[findIndex(state)].heaterLevel = 0;
					state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);
				} else {
					state.Rooms[findIndex(state)].heaterLevel =
						state.Rooms[findIndex(state)].currentHeaterValue;
					state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);
				}
			}
			return { ...state };
		case types.INCREASE_HEATER:
			if (findIndex(state) !== -1) {
				if (state.Rooms[findIndex(state)].heaterLevel < 10) {
					state.Rooms[findIndex(state)].heaterLevel += 1;
					state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);
					console.log(state.heaterLevel);
				} else {
					state.Rooms[findIndex(state)].heaterLevel = 10;
					state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);
				}
			}
			return { ...state };
		case types.DECREASE_HEATER:
			if (findIndex(state) !== -1) {
				if (state.Rooms[findIndex(state)].heaterLevel > 1) {
					state.Rooms[findIndex(state)].heaterLevel -= 1;
					state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);

					console.log(state.Rooms[findIndex(state)].heaterLevel);
				} else {
					state.Rooms[findIndex(state)].heaterLevel = 0;
					state.currentRoom = Object.assign({}, state.Rooms[findIndex(state)]);
				}
			}
			return { ...state };

		default:
			return { ...state };
	}
};
export default reducer;
