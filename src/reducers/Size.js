// import * as types from '../constants/ActionType';
// var initialState ={
//     Sizes:[32,33,34,35,36,37,38,39,40,41,43,44,45,46],
//     selectedSize:[]
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case types.TOGGLE_SELECT:
//         const tempArr = Array.from(state.selectedSize);
//             const found = tempArr.find(sizeInarr => sizeInarr === action.size);
//             if(!found){
//               tempArr.push(action.size);
//             }
//             else {
//                 tempArr.splice(tempArr.indexOf(action.size),1);
//             }
//             state.selectedSize=[...tempArr]
//             return state;
//         default:
//             return {...state};
//     }
// }
// export default reducer;