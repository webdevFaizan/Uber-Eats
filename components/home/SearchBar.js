import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SearchBar({cityHandler}) {
  return (
    <View style={{ marginTop: 5, flexDirection: "row" }}>
      <GooglePlacesAutocomplete 
      query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}    // IMPORTANT : I am not able to use this key since it is not a paid one, and google updated its policy so that only paid key would work, this is why I could not use this Places API search functionality, but just adding the api key as prop to the GooglePlacesAutocomplete component will acutally let us search the location.
      //The onPress button will let you select the city that is available in the list of cities that you have searched.
      onPress={(data, details = null) => {
        console.log(data.description);  //This data.description will give us the full address of the location, for example you search Hollywood, it will reutrn Hollywood, CA, USA.
        const city = data.description.split(",")[0];
        cityHandler(city);    //IMPORTANT : This method cityHandler was actually refrencing the setCity in the Home.js component, and this here will be called using the city value which will ultimately update the state variable 'city' and thus api call will be made in such a way that it will be return us result in the place holder.
      }}
      placeholder='Craving for Delicious Meal?'
      
      styles={{
        textInput: {
          backgroundColor: "#eee",
          borderRadius: 0,
          fontWeight: "700",
          marginTop: 6,
        },
        textInputContainer: {
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
        },
      }}
      
      renderLeftButton={ ()=>(
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} color="#000" />
          {/* <Text style={{color: 'black'}}>sedf</Text> */}
        </View>
      )}

      renderRightButton ={()=>(
        <View style={{ marginRight: 15 }}>
          <Text >Search</Text>
        </View>
      )}
      />
    </View>
  )
}