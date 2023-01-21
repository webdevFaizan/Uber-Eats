import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems , {localRestaurants} from '../components/RestaurantItems'

const YELP_API_KEY =  "zeB0Ha-IuKHERItBz_PmW9VJoQWnUpUeTgeaNiwDIs8oQS6-bgf3rELGkKFfecSw5Oh-AaNWN18IU41k_JDQMVCVC8-6cpk03ReXTpwOGZZ1HCGX094WAPycbWHMY3Yx";

export default function Home(){
  const [restaurantData, setRestaurantData] = useState([]);
  const restaurantFromYelp=()=>{
    const yelpURI = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=london&limit=20";
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpURI, apiOptions).then(response=>response.json()).then(json=> {
      console.log(json.businesses)
      return (
        setRestaurantData(json.businesses)
      )}
    );
  }

  useEffect(()=>{
    restaurantFromYelp();
  },[])
  return (
    <>
      <View style={{
            backgroundColor: 'white',
            padding : 5,
            paddingHorizontal : 12
          }
        }
      >
        <HeaderTabs/>
        <SearchBar/>
      </View>
        <Categories/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
    </>
  )
}