import * as types from '../constants/ActionType';
var initialState ={
    isAuthenticated:false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            state.isAuthenticated=true;
            return {...state};
        default:
            return {...state};
    }
}
export default reducer;