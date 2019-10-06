// import Data from './constants/Element';
var redux = require('redux');
const allInitialState = {
    isDrop: [
        {id: "0", type: "Water", image_url: "https://littlealchemy2.com/static/icons/1.svg"},
        {id: "1", type: "Earth", image_url: "https://littlealchemy2.com/static/icons/3.svg"},
        {id: "2",  type: "Air", image_url: "https://littlealchemy2.com/static/icons/4.svg"},
        {id: "3",  type: "Fire", image_url: "https://littlealchemy2.com/static/icons/2.svg"},
      ],
}
const allReduce = (state = allInitialState, action) => {
    switch (action.type) {
        case "CHANGE_DRAP_DROP":
            if(action.idDrag === 0 && action.idDrop === 0){
                return { 
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "10",
                        type: 'Puddle',
                        image_url: "https://littlealchemy2.com/static/icons/511.svg",
                      },
                    ]
                }
            }
            if(action.idDrag === 0 && action.idDrop === 1){
                return { 
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "8",
                        type: 'Mud',
                        image_url: "https://littlealchemy2.com/static/icons/12.svg",
                      },
                    ]
                }
            }
            if(action.idDrag === 1 && action.idDrop === 1){
                return { 
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "4",
                        type: 'Pressure',
                        image_url: "https://littlealchemy2.com/static/icons/7.svg",
                      },
                    ]
                }
            }
            if(action.idDrag === 1 && action.idDrop === 2){
                return { 
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "5",
                        type: 'Dust',
                        image_url: "https://littlealchemy2.com/static/icons/14.svg",
                      },
                    ]
                }
            }
            if(action.idDrag === 3 && action.idDrop === 2){
                return { 
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "6",
                        type: 'Lava',
                        image_url: "https://littlealchemy2.com/static/icons/6.svg",
                      },
                    ]
                }
            }
            if(action.idDrag === 1 && action.idDrop === 2){
                return { 
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "7",
                        type: 'Rain',
                        image_url: "https://littlealchemy2.com/static/icons/632.svg",
                      },
                    ]
                }
            }
            if(action.idDrag === 0 && action.idDrop === 3){
                return { 
                    isDrop : [
                      ...state.isDrop,
                      {
                        id: "9",
                        type: 'Steam',
                        image_url: "https://littlealchemy2.com/static/icons/5.svg",
                      },
                    ]
                }
            }
            return state
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