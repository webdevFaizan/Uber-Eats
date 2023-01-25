let defaultState = {
    selectedItems :{
        items : [],
        restaurantName : ''
    }
}

let cartReducer = (state= defaultState, actions) =>{
    switch(actions.type){
        case 'ADD_TO_CART' : {
            let newState= {...state};
            // console.log(actions.payload);
            newState.selectedItems = {
                items : [...newState.selectedItems.items, actions.payload.food],
                restaurantName : actions.payload.restaurantName
            };
            console.log(newState.selectedItems);
            return newState;
        }

        default : {
            return state;
        }
    }
}

export default cartReducer;