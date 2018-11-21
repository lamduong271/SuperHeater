import * as types from '../constants/ActionType';

//AUTHENTICATE
export const authenticate = () =>{
    return {
        type:types.AUTHENTICATE,
    }
}

//DEVICES-ROOMS
export const getAllRooms = () =>{
    return {
        type:types.GET_ALL_ROOMS,
    }
}

export const getCurrentRoom = (roomId) => {
    return {
        type: types.GET_CURRENT_ROOM,
        roomId
    }
}

export const toogleHeater = (value) => {
    return {
        type: types.TOGGLE_HEATER,
        value
    }
}

export const getHeaterLever = (value) => {
    return {
        type: types.GET_HEATER_LEVEL,
        value
    }
}
