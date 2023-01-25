import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
// import {  } from 'react-native-gesture-handler'

// export default function ViewCart() {
//   return (
//     <View style={{
//         flex: '1',
//         alignItems : 'center',
//         flexDirection : 'row',
//         position : 'absolute',
//         bottom : 130,
//         zIndex : 999,        
//     }}>
//         <View style={{
//             flexDirection: 'row',
//             justifyContent : 'center',
//             width : '100%'
//         }}>
//             <TouchableOpacity style={{
//                 marginTop : 20,
//                 backgroundColor : 'black',
//                 alignItems : 'center',
//                 padding : 13,
//                 borderRadius : 30,
//                 width : 300,
//                 position : 'relative'
//             }}
//             >
//                 <Text style={{color : 'white', fontSize : 20}}>VIEWCART</Text>
//             </TouchableOpacity>
//         </View>
//     </View>
//   )
// }

export default function ViewCart() {
    const items = useSelector((state)=>state.cartReducer.selectedItems.items);
    // console.log(items);
    const priceArray = items.map((item)=>Number(item.price.replace('$','')));
    let totalPrice = priceArray.reduce((prev, curr)=>prev+curr,0);
    console.log(totalPrice);

    // let totalPrice = items.reduce()

    return (    
        <View style={{
            // IMPORTANT : This view cart component had to be kept on the top of all the other elements, and the position had to be defined in respect to the whole screen, this is why flex =1 had to be kept, and the position of this component had to be absolute, so that no matter the scrolling component, the view cart remained at its designated place.
            flex : 1,
            alignItems : 'center',            
            flexDirection : 'row',
            position : 'absolute',
            bottom : 30,
            zIndex : 897            
        }}>
            <View style={{
                width : '100%',     //This will make the width of the container occupy the 100% of the width from the parent container, but at the same time justifyContent will make it arranged to center.
                flexDirection : 'row',
                justifyContent : 'center',
            }}

            >
                {/* IMPORTANT : Do not think of TouchableOpacity as a separate component, it is like a customised button, this is why styling could help it in giving the required shape and sizes. */}
                <TouchableOpacity style={{
                    // marginTop : 20,
                    backgroundColor : 'black',
                    alignItems : 'center',
                    padding : 13,
                    borderRadius : 30,
                    width : 250,
                    position : 'relative'
                }}
                >
                    <Text style={{color : 'white', fontSize : 20}}>VIEWCART {'$'+totalPrice}</Text>
                </TouchableOpacity>      
            </View>  
        </View>
    )
  }