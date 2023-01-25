let defaultState = {
    selectedItems :{
        items : [],
        restaurantName : ''
    }
}

let cartReducer = (state= defaultState, actions) =>{
    switch(actions.type){
        case 'ADD_T0_CART' : {
            let newState= {...state};
            newState.selectedItems = {
                items : [...newState.selectedItems.items, actions.payload],
                restaurantName : actions.payload.restaurantName
            };
            console.log(newState);
            return newState;
        }

        default : {
            return state;
        }
    }
}

export default cartReducer;