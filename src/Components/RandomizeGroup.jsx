import React from 'react';
import ReactDOM from 'react-dom';

// Placeholder text
const text = "React is alright, yeah"
// Hardcoded mock-GoogleMaps API Restaurant object
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
  },
 {
         "geometry" : {
            "location" : {
               "lat" : 43.64518819999999,
               "lng" : -79.39392040000001
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 43.64676558029149,
                  "lng" : -79.3926663197085
               },
               "southwest" : {
                  "lat" : 43.64406761970849,
                  "lng" : -79.3953642802915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "04ff0c1b960dbb1fdba33d7bf118af0c915e30a3",
         "name" : "Bloke",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 498,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/106605218667518407663/photos\"\u003eBloke\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAA3XWokL_s58qPPV5KNgx9Z1YeBjPvG1ocGRThLrcQ-vsmchF2j8XV0CQMbKbutBcmodQotOKVmEBHf53DEm_0Vg59BsXoIjhwm79D-5ZhWlGHncaM8NQdgrZ3d80Xro_MEhASf-Y2QjcMNapIuaswjBhHGhQBhJgTk0XLnTLRxHTQRrT8g8mY2A",
               "width" : 748
            }
         ],
         "place_id" : "ChIJUaoFKto0K4gR8AM42x-HeHw",
         "rating" : 3,
         "reference" : "CmRRAAAAvOGtsxdmL8iOMJuWv6cXOpBPXzVTfbvKHQKPug798wCSbwLFBDrnZHI0-P9uQ_lHAxkOdIR1MG8FCVROJtoW4M_vtHb8e9X6R-Xn0EK7mJJbXziglhMwVudhpceuOPFsEhBPSNWjUnXCyL-VlF_TnxhmGhRfzuwgrcKsftpsoik_byau5hllBA",
         "scope" : "GOOGLE",
         "types" : [
            "night_club",
            "bar",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
         ],
         "vicinity" : "401 King Street West, Toronto"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 43.645495,
               "lng" : -79.3933203
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 43.64696738029149,
                  "lng" : -79.3921262697085
               },
               "southwest" : {
                  "lat" : 43.64426941970849,
                  "lng" : -79.3948242302915
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "7e39e4fe1810149400d226f0af52059e30e23309",
         "name" : "Bar Hop",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2268,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/115182991824978109754/photos\"\u003eIain Hardcastle\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAgaiFWw8i07Cd-g2Q8_tBEtq1LZY5CxFnzTSwB_tMnfnoxYbRbC9ImgQ8uvOGppVwJPfpdhy6HNXXOJRqtYhK_kuDFiikH52JQnYTyEfv5B8hs-JQFHPoIUhJ6Tde1yXmEhBl9DmTseXhBNMXAGbJojPgGhTNuMghF8lj3MVB2tzln0uO19_bLw",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJn8kJgNk0K4gRx4Q1BYptTxM",
         "rating" : 4.5,
         "reference" : "CmRRAAAA1Ezz9v7ATod_msE3WcUeOXWkf0whya-klDJKdPXx6O3RoHwZal1hoyVHGKLno1ubNhzpQOlQZKAHrmtWZ2Dp2S_sHmSC6qYXkyXD9CAaJHrYclXmP8XFbqiRZcEoZMnXEhDS8rVbguH2ZS62LHXd55giGhS7c75iRPwKjPsclX16o67i6Idh2Q",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "391 King Street West, Toronto"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 43.6449949,
               "lng" : -79.39643579999999
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 43.6464236302915,
                  "lng" : -79.39517191970849
               },
               "southwest" : {
                  "lat" : 43.6437256697085,
                  "lng" : -79.39786988029149
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         "id" : "39c087cf65d0d5d30bc70e512f8296089f1f675f",
         "name" : "SPiN Toronto",
         "opening_hours" : {
            "open_now" : true,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 2448,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/102488807091678828854/photos\"\u003eJayakanth G\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAKvdtfHNMtvQCT-_a4fOi7sp1qj3XerozGu9c_nCOsK-UdaKyRWXjwDraedit-87FvSIbaGvy0hnVN0Eh-o0qQDuaxA9dxKsF_N_I17fuCMPCdGyNJi1ER8100iaVc3FlEhAMAZOauLDT5g3uGudJTasgGhQWoP87KJBrlgJIcua4VEuqour8EQ",
               "width" : 3264
            }
         ],
         "place_id" : "ChIJ__QVOdk0K4gRM_dEhAgM-G4",
         "price_level" : 3,
         "rating" : 4.2,
         "reference" : "CmRRAAAAGbS0x68apTC_YUYLmkjx24Fc2fPRcoizW7gVls0stJB_RbHxkBd8cIAe2KFfpjgtfOTVhVV2L3g4pEsLhVs8r0Ov7q5HICJo_flNdjf0q4yGgo2hcd7BMjYc33IYWE1FEhCzUOqJmmg-V9YXe0YPAnBfGhQnEnwjSW73stE9FTWJsT-uuGfdVg",
         "scope" : "GOOGLE",
         "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "461 King Street West, Toronto"
      },
      {
         "geometry" : {
            "location" : {
               "lat" : 43.64503679999999,
               "lng" : -79.3964696
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 43.6464499302915,
                  "lng" : -79.39514551970849
               },
               "southwest" : {
                  "lat" : 43.6437519697085,
                  "lng" : -79.39784348029151
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
         "id" : "ccb52b29caf0c113aa53073d5777daa02e88d163",
         "name" : "Brassaii",
         "opening_hours" : {
            "open_now" : false,
            "weekday_text" : []
         },
         "photos" : [
            {
               "height" : 3024,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/112145749560325280479/photos\"\u003eJohn V\u003c/a\u003e"
               ],
               "photo_reference" : "CmRaAAAAwvRNj58whgEA524y0rRUtaFLjAqTNI2Mgx4R2ror4u7vLOSPJU2kPpaCXpzIvZTldoz0sFa7IMNC0sUZULqtcEY4wdlEyOnOm-Kj8jHx5G32jC0r9pfUDGYt1imfKFKfEhD8pXHplJPhfgXvTRTZ2hd3GhT7BfWPyVgccmQp6SqA9ItlLg8_jg",
               "width" : 4032
            }
         ],
         "place_id" : "ChIJ41zSWtk0K4gRk69A5l7hL5g",
         "price_level" : 3,
         "rating" : 3.5,
         "reference" : "CmRSAAAAXoRZfNu0iEl0EVMtPdIjmkTMuDQuTbf2S7F4dVLkFp7_9XVTQpdImGFmDFPzM3gsp3fsMDOcQMlgIMvUqt--W9c5Q_17272fOA_zCotYYVrpQuQ0SglHTnT7hBGEPhmbEhD79GK34Br0SSfZASGKGM5kGhQ6nPWHCoMrnfoKXZ-7HLwaAoJmpA",
         "scope" : "GOOGLE",
         "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
         "vicinity" : "461 King Street West, Toronto"
      }
]
//Iterates through restaurants into a list
const restaurantList = restaurants.map((restaurant, i) =>
  <li key={'restaurant_' + i}>
    <p>{restaurant.name}</p>
    <p>{restaurant.rating}</p>
    <p>Price: {restaurant.price_level }</p>
    <p>Type: {restaurant.types}</p>

  </li>)

class RandomizeGroup extends React.Component{
  render(){
    return (
      <div>
        <h2>{text}</h2>
        <p> Total Restaurants: {restaurants.length}</p>
        <ul>{restaurantList}</ul>
      </div>
    )
  }
}


export default RandomizeGroup;