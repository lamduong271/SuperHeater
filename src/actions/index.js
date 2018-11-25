import * as types from "../constants/ActionType";

//AUTHENTICATE
export const authenticate = () => {
  return {
    type: types.AUTHENTICATE
  };
};

//DEVICES-ROOMS
export const getAllRooms = () => {
  return {
    type: types.GET_ALL_ROOMS
  };
};

export const getCurrentRoom = roomId => {
  return {
    type: types.GET_CURRENT_ROOM,
    roomId
  };
};

export const turnOnHeater = () => {
  return {
    type: types.TURN_ON_HEATER
  };
};
export const turnOffHeater = () => {
  return {
    type: types.TURN_OFF_HEATER
  };
};

export const getHeaterLever = value => {
  return {
    type: types.GET_HEATER_LEVEL,
    value
  };
};

export const increaseHeater = () => {
  return {
    type: types.INCREASE_HEATER
  };
};

export const decreaseHeater = () => {
  return {
    type: types.DECREASE_HEATER
  };
};

export const addDevice = (device, room) => {
  return {
    type: types.ADD_DEVICE,
    device,
    room
  };
};
