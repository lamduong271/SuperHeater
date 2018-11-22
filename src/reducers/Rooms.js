import * as types from '../constants/ActionType';
const Rooms = [
    {
        id:1,
        name:'Bedroom',
        source:require('../image/menu/double-bed.png'),
        devices:[
            {
                name:'TV',
                source:require('../image/Furniture/TV.png')
            },
            {
                name:'Fridge',
                source:require('../image/Furniture/fridge.png')
            },
            {
                name:'Computer',
                source:require('../image/Furniture/computer.png')
            },
        ]
    },
    {
        id:2,
        name:'Livingroom',
        source:require('../image/menu/armchair.png'),
        devices:[
            
        ]
    },
    {
        id:3,
        name:'Kitchen',
        source:require('../image/menu/kitchen.png'),
        devices:[
            
        ]
    },
    {
        id:4,
        name:'Bathroom',
        source:require('../image/menu/bathtub.png'),
        devices:[
            
        ]
    }
]
const CurrentHeaterValue = 5;
var initialState ={
    Rooms,
    currentRoom:{},
    heaterStatus:true,
    heaterLevel:CurrentHeaterValue
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_ROOMS:
            return {...state};
        case types.GET_CURRENT_ROOM:
            const findRoomById = state.Rooms.find(room=>room.id === action.roomId)
            if(findRoomById){
                state.currentRoom=findRoomById
            }
            console.log("current room ",state)
            return {...state}
        case types.TOGGLE_HEATER:
            state.heaterStatus = action.value
            return {...state}
        case types.GET_HEATER_LEVEL:
            if(action.value===0){
                state.heaterLevel = 0
            }
            else {
                state.heaterLevel = CurrentHeaterValue
            }
            return {...state}
        case types.INCREASE_HEATER:
            if(state.heaterLevel<10) {
                state.heaterLevel +=1;
                console.log(state.heaterLevel)
            }
            else {
                state.heaterLevel =10;
            }
            return {...state}
        case types.DECREASE_HEATER:
            if(state.heaterLevel>1) {
                state.heaterLevel -=1;
                console.log(state.heaterLevel)
            }
            else {
                state.heaterLevel =0;
            }
            return {...state}
        default:
            return {...state};
    }
}
export default reducer;