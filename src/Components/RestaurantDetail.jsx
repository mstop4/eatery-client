import React from 'react'

const restaurants = [
  {
   "geometry" : {
      "location" : {
         "lat" : 43.64645,
         "lng" : -79.39375200000001
      },
      "viewport" : {
         "northeast" : {
            "lat" : 43.6477867302915,
            "lng" : -79.39246391970849
         },
         "southwest" : {
            "lat" : 43.6450887697085,
            "lng" : -79.39516188029151
         }
      }
   },
   "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
   "id" : "c527074dac11fb6e3c45ba5f7cb06d848d77b875",
   "name" : "Khao San Road",
   "opening_hours" : {
      "open_now" : true,
      "weekday_text" : []
   },
   "photos" : [
      {
         "height" : 1365,
         "html_attributions" : [
            "\u003ca href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\"\u003eZAGAT\u003c/a\u003e"
         ],
         "photo_reference" : "CmRaAAAANbDmRZMLqm-cNaAjzS3SYiFeElBSgt2j5TfW_FA0N1IFDfQywr85Cu7JKUV311r5DMsAM9tdcM0-_2p_Ug0qNh4-pmaMOR95D_x-SD50RNPFMrJYWiBjB0rutGgnJ4hKEhBFYrYNjrvduFpDiKDL9AvaGhTcZ1VfAJnB47UOeJjWmbYSunzAjQ",
         "width" : 2048
      }
   ],
   "place_id" : "ChIJsYytfdo0K4gRyuS_nZmdpIQ",
   "price_level" : 1,
   "rating" : 4.2,
   "reference" : "CmRSAAAAHNaNJVDcHtUuOUyoXj1O9zlJWKdM3vUQbf2bhernyOqp1cpV57aqfZoq-qcDEXrLY770Aq18d7RybasdJlbFRBsRUByL74eNmNj1ECylia_DHr3_sfVHnE91DmkHhqwuEhDEb7N0xy0XcP_9aLexQ0reGhS-ga_1M4Ms4-fsIQK6edCMMUMiIQ",
   "scope" : "GOOGLE",
   "types" : [
      "meal_delivery",
      "restaurant",
      "food",
      "point_of_interest",
      "establishment"
   ],
   "vicinity" : "11 Charlotte Street, Toronto"
  }
]

class RestaurantDetail extends React.Component{
  render(){
    return(
      <p> RESTAURANTDETAILED </p>
    )
  }
}
export default RestaurantDetail;