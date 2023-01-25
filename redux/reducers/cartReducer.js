let defaultState = {
    selectedItems :{
        items : []
    }
}

let cartReducer = (state= defaultState, actions) =>{
    switch(actions.type){
        case 'ADD_TO_CART' : {
            let newState= {...state};
            if(actions.payload.checkBoxValue===true)
            {
                console.log("ADD_TO_CART")
                newState.selectedItems = {
                    items : [...newState.selectedItems.items, {
                        ...actions.payload.food,                    
                        restaurantName : actions.payload.restaurantName,
                        checkBoxValue : actions.payload.checkBoxValue
                    }],
                };
                // console.log(newState.selectedItems.items);
            }
            else{
                console.log("REMOVE_FROM_CART"); 
                
                newState.selectedItems = {
                    items : [...newState.selectedItems.items.filter((item)=>{                        
                            return item.title!==actions.payload.food.title
                        }
                    )],
                };
                // console.log(newState.selectedItems.items);     
            }
            return newState;
        }

        default : {
            return state;
        }
    }
}

export default cartReducer;