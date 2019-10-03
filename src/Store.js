import Data from './constants/Element';
var redux = require('redux');
const allInitialState = {
        isDrag: Data.elements,
        isDrop: Data.drag
}
const allReduce = (state = allInitialState, action) => {
    switch (action.type) {
        case "CHANGE_DRAP_DROP":
            if(action.idDrag === 0 && action.idDrop === 0){
                return { 
                    isDrag: state.isDrag,
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "8",
                        type: 'Puddle',
                        image_url: "https://littlealchemy2.com/static/icons/511.svg",
                      },
                    ]
                }
            }
            return state;
        case "CHANGE_UPDATE":
            return action.idDrop;
        default:
            return state
    }
}
var store = redux.createStore(allReduce);
// store.subscribe(function(){
//     console.log((store.getState()));
// })
export default store;