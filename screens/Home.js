import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems , {localRestaurants} from '../components/RestaurantItems'

const YELP_API_KEY =  "zeB0Ha-IuKHERItBz_PmW9VJoQWnUpUeTgeaNiwDIs8oQS6-bgf3rELGkKFfecSw5Oh-AaNWN18IU41k_JDQMVCVC8-6cpk03ReXTpwOGZZ1HCGX094WAPycbWHMY3Yx";

export default function Home(){
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity]= useState('london');
  const [activeTab, setActiveTab] = useState("Delivery");

  const restaurantFromYelp=()=>{
    const yelpURI = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&limit=20`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpURI, apiOptions).then(response=>response.json()).then(json=> {
      console.log(json.businesses);      
      //IMPORTANT : The following use case is the best example of using the filter function, which will filter all the data that consists of activeTab that has either Delivery or Pickup related information, it will give the complete data of all the restaurants that it picks, but it will only select filtered list of restaurant.
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase()))
        )
      }
    ).catch(err=>console.log(err));
  }

  useEffect(()=>{
    // restaurantFromYelp();    //When the API key limit is reached, this means that we cannot call the API using this key anymore.
  },[city,activeTab]);    //IMPORTANT : This city variable needs to be tracked, since we are looking for the change in the state of city and as soon as it is done, this useEffect will fire the inner function, so that the new results could be shown.
  // This activeTab will decide whether the data is going to be related to the Delivery Restaurant or related to the pickup restaurant.
  return (
    <>
      <View style={{
            backgroundColor: 'white',
            padding : 5,
            paddingHorizontal : 12
          }
        }
      >
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity}/>    
        {/* This prop will bind the setCity method that is going to be used to change the city state, which will be passed to the API key. */}
      </View>
        <Categories/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
    </>
  )
}