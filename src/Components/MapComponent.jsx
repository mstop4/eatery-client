import React from 'react';
//import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

const coords = {
  lat: 43.6451095,
  lng: -79.3947592
};

const data = {
  "html_attributions": [],
  "results": [
    {
      "geometry": {
        "location": {
          "lat": 43.64518819999999,
          "lng": -79.39392040000001
        },
        "viewport": {
          "northeast": {
            "lat": 43.64676558029149,
            "lng": -79.3926663197085
          },
          "southwest": {
            "lat": 43.64406761970849,
            "lng": -79.3953642802915
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
      "id": "04ff0c1b960dbb1fdba33d7bf118af0c915e30a3",
      "name": "Bloke",
      "opening_hours": {
        "open_now": false,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 498,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/106605218667518407663/photos\">Bloke</a>"
          ],
          "photo_reference": "CmRaAAAAcsIe02XC55sFvFrhD_2ix5fXg83430J6DhnUCdfYD9HAeWblrhSI3ixBgJKh0zZ_pu4p8W3Cj81Y1Qu3EhqFQFaxHtPE6U8m6SZgPlxj_CqSvx94lbLXDQbIMWS3jOsuEhB8_p23k1EoVMvNLSroJ2kbGhRFcbTbhXcxNGE0SGfyfGZX4AzR8g",
          "width": 748
        }
      ],
      "place_id": "ChIJUaoFKto0K4gR8AM42x-HeHw",
      "rating": 3,
      "reference": "CmRRAAAA_TNwyvYx0jbcn_zsMEtK16Yqcv1Z_e3MqFHiV7OipA87YtVCaKFYR_HwdqtRJcYGBY59qjMIO0BxBwRXRSsjAH92kj-SORPkPYxbgs7Mnms26DLLKnBEuAo-8otb6OXcEhBClKQt4o9Jh7lESkuVHaTCGhTpdFQ_4veMTd2ekk7xqADmpgwrig",
      "scope": "GOOGLE",
      "types": [
        "night_club",
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "401 King Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.645495,
          "lng": -79.3933203
        },
        "viewport": {
          "northeast": {
            "lat": 43.64696738029149,
            "lng": -79.3921262697085
          },
          "southwest": {
            "lat": 43.64426941970849,
            "lng": -79.3948242302915
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
      "id": "7e39e4fe1810149400d226f0af52059e30e23309",
      "name": "Bar Hop",
      "opening_hours": {
        "open_now": false,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 2268,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/115182991824978109754/photos\">Iain Hardcastle</a>"
          ],
          "photo_reference": "CmRaAAAACFK5KA8TAyo63uoH_kKPWTvQNDyHxK3P03uDlqHbkCYa66rQ6TA8PXILEaBX01GiTp3Wl3_q9cHGTV-Rwq8W1G6hwDcmKGyz-DfVZSydYdbV7-sZAV0bOnInVIVWjfh8EhBebZcXnHK42Oq6i8UXYGbtGhRiLUThZFIQrXAekh5eHkOB5jXwOg",
          "width": 4032
        }
      ],
      "place_id": "ChIJn8kJgNk0K4gRx4Q1BYptTxM",
      "rating": 4.5,
      "reference": "CmRRAAAAAu7-5Eo10qezY5A2KD-QRY0j3la5hidoTTxjzTRDqh78aNjPOGEeakSwQxQZwoEexVvQxWdlLoUXERj0GniD3P7AhuaXQRHEr7BEX2ri33GOY_OKlfSfSG_0OZ9LL4FaEhDSEa4tn412DTXQKtxnM5qMGhQplRQi9r7Mf7Jh-Ud6l0ugp_6l2w",
      "scope": "GOOGLE",
      "types": [
        "bar",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "391 King Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.645606,
          "lng": -79.393512
        },
        "viewport": {
          "northeast": {
            "lat": 43.6470326302915,
            "lng": -79.3921945197085
          },
          "southwest": {
            "lat": 43.6443346697085,
            "lng": -79.3948924802915
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "f6a59236ce318ab2e66d45f822bb96279dcbf130",
      "name": "Thai Princess Restaurant",
      "opening_hours": {
        "open_now": false,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 3120,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/100150710453632714413/photos\">Arthur Chow</a>"
          ],
          "photo_reference": "CmRaAAAAgFbtCdYpL4ticBwIX_xIZ36foeJsCjwruafIDxDWf3JsCCzreixaRu68wseRspQtpgMTEVMfjAbF3UOuytlKa30vECv1UHYXzlNChG0XYWPnqCJ0l5MOKxQbAGpnGTCUEhAAtyPg3G-bfFgTVGsNkXuuGhQhqjMnZufTYpm-v82LSup1-10QxQ",
          "width": 4160
        }
      ],
      "place_id": "ChIJHz3FJto0K4gRv9m8KY39cks",
      "rating": 4,
      "reference": "CmRRAAAALV36apLPZ-0XjxkcMTRRU4oqZTIdAzOlCjwSrkG9Fy4cT-CsyDppyMW9eUVPYZv0bgq0eoaznigGbyLf0RgsXZ_fTST2DnCi-L6GngiIfP9rGLmbAlv7_TJKhxM1x86fEhBIY3uVLv6uI0UtZM99LYFkGhSwVuNV45dKZwGssYJdCAaSm31q5Q",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "387 King Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.64499790000001,
          "lng": -79.3960247
        },
        "viewport": {
          "northeast": {
            "lat": 43.6464710302915,
            "lng": -79.3947239197085
          },
          "southwest": {
            "lat": 43.6437730697085,
            "lng": -79.39742188029152
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "29f940edfda0a365521514ba2c3937fcc76088de",
      "name": "Fring's",
      "opening_hours": {
        "open_now": false,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 2268,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/101110282007769794565/photos\">Darcy K</a>"
          ],
          "photo_reference": "CmRaAAAAeXxcH-1zucnatbxWLl99b0BRijlGOaLoBTB5GJ7wcvN0nB_3Mx06OPNR4jkJrVDb2nsk4zNN8ys6Mds6IR12sgaUfB6S8BNKDv612hPpnzqXCjRJTKutulzzUwpiAsA1EhAVxqT6Qqsm_Jo5sBGIR2mnGhTbh3w6o1aHiClNoGDIiFmsBUHwJA",
          "width": 4032
        }
      ],
      "place_id": "ChIJEWcDQ9k0K4gRrz6YxZSJJDw",
      "price_level": 2,
      "rating": 4,
      "reference": "CmRRAAAA7YgTvjpurHWUS6NCWBli-aS0ofLcjKdQ6n3asbjwjQPuQzHtrwDPIc3DbN431BK1KQFSXqv3pAxKMqjjAVmKdS0XhHGlvjZOqvvbnOxaenrBXj-O7aWQwBQ76fNK4oIpEhBRLNAA1axabAwS4aWOl1UtGhTaM4AVWbQy7pNiwsWQqveRT75m0w",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "455 King Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.6458843,
          "lng": -79.3938672
        },
        "viewport": {
          "northeast": {
            "lat": 43.6472569302915,
            "lng": -79.39242011970849
          },
          "southwest": {
            "lat": 43.6445589697085,
            "lng": -79.39511808029151
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
      "id": "67146aaec4ef1e825700f77937378d678d70fd71",
      "name": "Aroma Espresso Bar",
      "opening_hours": {
        "open_now": true,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 1152,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/107855410581670938978/photos\">Hezi Choo</a>"
          ],
          "photo_reference": "CmRaAAAAeGAl8_Vdo-_AAU2LeTOvAFIH0swTFB38r0Gd3ikp2zH0ZPKYp4Yu6bP8XICoXKYrkeV83RH_UwHoH_iccGg0Z8z-TqYLcjhinGds4cIIrSsZ3JeWSv5tNcwHPb50zfUpEhBdLPDv7LRchoMfTKvYlG0uGhRSpZFh1NfH-V03t1tX1yO0jleNSw",
          "width": 2048
        }
      ],
      "place_id": "ChIJ7cQRJto0K4gRD9SfGfKZGxY",
      "rating": 3.9,
      "reference": "CmRRAAAAM1vjgisi-dxGTzAC1QDlW2RtlhLyFFsy5x43lZFwhFTwHODlp1pD8oG1NiRPVLHxrH13f-G4NSXS5SPPqBgB8fQkDLpThMgSq-KBFbwnTYX_uV36m0nbqBj1Z2iuWTgREhAHjsQWvJuVCPQJddWYzegfGhQYhpsV0Ggr9z70hZ1BlSo2dVPRyw",
      "scope": "GOOGLE",
      "types": [
        "cafe",
        "bakery",
        "restaurant",
        "food",
        "store",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "430 King Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.6456244,
          "lng": -79.3935286
        },
        "viewport": {
          "northeast": {
            "lat": 43.6470409802915,
            "lng": -79.39220701970849
          },
          "southwest": {
            "lat": 43.6443430197085,
            "lng": -79.3949049802915
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "b87ceaa0708c0530e8e5df4d23898eea03e01a90",
      "name": "The Belly Buster Submarines",
      "opening_hours": {
        "open_now": false,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 1944,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/106975239332033600582/photos\">Kevin Kan</a>"
          ],
          "photo_reference": "CmRaAAAAJkSZbaQYj3Dl5alwSrK6mfenC7bI2yw_jp9XK-e-Z4KeAbpgkWkUmFbg-_F8qHX7-meyiUULxZqXuuKSS039zKZHndMnyyN5BeyUN6QJlUOTGu8QswjmQ3gytXU_765XEhB1QpiGs9YBTnglsVIeiI1yGhTqrSvpelSs81KjAbimoPnf4NJ4KQ",
          "width": 2592
        }
      ],
      "place_id": "ChIJcWP8Jto0K4gRaxMqHxH1tTU",
      "rating": 3.5,
      "reference": "CmRRAAAA5pOFSsMJcVcsRQvClW7s4E8Igu98qdQ0IKUlx7QuJpsnrYW9oi87B8Q9JdQeHAhJDoS60kfSyaGKRV9RXy9XANo2Cx5XISChA96r-fOwqlM7WlYhC79dzxux3AF1cS6MEhAj4XkYDwZ_Wklm4pM1Khm2GhTLB4rUdbdyZwbAx0Bzo61c3RN0wg",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "389 King Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.6454139,
          "lng": -79.3962042
        },
        "viewport": {
          "northeast": {
            "lat": 43.6466474302915,
            "lng": -79.39496476970849
          },
          "southwest": {
            "lat": 43.6439494697085,
            "lng": -79.3976627302915
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "bddc7d2a2b1f09749fb3485c1037726944de1569",
      "name": "Weslodge",
      "opening_hours": {
        "open_now": false,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 958,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/105447288195882656665/photos\">Weslodge</a>"
          ],
          "photo_reference": "CmRaAAAAKgieQuz1x97bHo_aAJoABUiv6bld1FLoDrJvbN7kO8TPfEGbOvXOEbpQgViVhzmu_tbWC_YdYuMnbwmXW3yVgELzxRriatmWLXwgYc_WE2sbDfr5GiM1fO186cfItNS0EhBQ1b9GxVN6PS5Qn3g1Y8aaGhT4YolLviAPLNpnr-0o5tAusqwVZw",
          "width": 958
        }
      ],
      "place_id": "ChIJ1xhsWtk0K4gRAqwxkKezBzg",
      "price_level": 1,
      "rating": 4.1,
      "reference": "CmRRAAAAbaTuaChmcFfAz_JZE7pWLnHbeowgtmNWN_UpsYVCWwn-4foNRvwpcY0iB5QE6zAV_JnaMjsvJ2lOV5FogaGcfwKhrzKTEqdntrCjW4TrcwCWO2tmsN9QcCQ_QaNdAHEaEhASO1GNqsHhqjGXD2V0IPkPGhQU63U760YC3adfxZclh8ORS1A1xg",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "480 King Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.64622569999999,
          "lng": -79.39470919999999
        },
        "viewport": {
          "northeast": {
            "lat": 43.6475237302915,
            "lng": -79.39358721970851
          },
          "southwest": {
            "lat": 43.6448257697085,
            "lng": -79.39628518029151
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "6fa5bbd94eda198da6212466c7aeaaee91333dab",
      "name": "Chocolateplanet.com",
      "place_id": "ChIJs19ph5c0K4gRHdxQ25ArSek",
      "reference": "CmRSAAAAOL9oHDWqee6F-BrGIJzYiSMLoTdKyxwHL2xbJzSnJEyCtYZ8_kwDPL1paGsSSQjnz2C2DpiZ_fuVjcNOggnAiafZ06OsRzBs7EX5Gex04bDTpp9DeINSNNgwp6pp3Op1EhAdH0V66R53NRwn-f9AaxtYGhRgR6sFld9beOR0M7dGbF2luQPtKg",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "99 Spadina Avenue, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.6447463,
          "lng": -79.39375509999999
        },
        "viewport": {
          "northeast": {
            "lat": 43.6460952802915,
            "lng": -79.3924061197085
          },
          "southwest": {
            "lat": 43.64339731970851,
            "lng": -79.3951040802915
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
      "id": "7a79e07c4cf8c61376f4a57435a71161a9240f41",
      "name": "Corvo Bar",
      "opening_hours": {
        "open_now": false,
        "weekday_text": []
      },
      "photos": [
        {
          "height": 3036,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/118035691067413523581/photos\">Tom Sommerville</a>"
          ],
          "photo_reference": "CmRaAAAATNgMbJjQKaE1mKF9yHsUre9pDR1LVWfHKNy_gcjdSQBOmV-GC9cL5F4UNsbbiygymG3KHiZg725uGqOeaauozhiAlSEDQE5rnBsUhT1sSUb5ZOkISqn2xQJJyFvG375QEhAeRT-61mOUlCseJpHsSQ10GhRreUtfIwqvmzGH1EsssLki8VMMhw",
          "width": 4048
        }
      ],
      "place_id": "ChIJud18mtk0K4gRhaoU0w1Fx6o",
      "rating": 4.5,
      "reference": "CmRSAAAAssBRTR53YFIBguhY-wEcKTjU6cKBS81i9I34L6jn8rzQPRMndoGeahIlLKZGEd8UGoriHNKP6dertVKQagc4E9RmOiwXieoDarNLuTjU5G6DZhto2ZmjoqIZDPIOTIlYEhBmkZUbPu7-PFPtI339AC_8GhQ1o1nD-gTHS3HXo1kI2znnxq4SqQ",
      "scope": "GOOGLE",
      "types": [
        "bar",
        "night_club",
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "9 Clarence Square, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.64420339999999,
          "lng": -79.3951902
        },
        "viewport": {
          "northeast": {
            "lat": 43.64540128029149,
            "lng": -79.3937857197085
          },
          "southwest": {
            "lat": 43.6427033197085,
            "lng": -79.39648368029151
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "6644970d48540562ac3bedca5b022c749b5aecb0",
      "name": "Lucy's Open Kitchen",
      "place_id": "ChIJZb6nCdk0K4gREfJS-rdzt2I",
      "reference": "CmRRAAAA7SxJ-gOkXlrqif0H4GiIjubCg6YLtSC1spQ5IhscF1XFCI5bY0cFpYIVolWy9XMEZnk4vD68_wi9I_iLbGRNaho39fOEyTmFOl4drugguwW3wOzo3N2XHMAFwNd-zMNFEhBBfAKum67JBkJJDPtYVTtWGhSl2S_HiOVz3Uryb8EKcrLVj23T7A",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "374 Wellington Street West, Toronto"
    },
    {
      "geometry": {
        "location": {
          "lat": 43.6456396,
          "lng": -79.3935084
        },
        "viewport": {
          "northeast": {
            "lat": 43.6470511302915,
            "lng": -79.39218476970849
          },
          "southwest": {
            "lat": 43.6443531697085,
            "lng": -79.3948827302915
          }
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
      "id": "3c168b3754aac500bc39646d273e0bee744151ac",
      "name": "Asakusa Momohara Food Service",
      "photos": [
        {
          "height": 1365,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/102775325764780851496/photos\">Morris C</a>"
          ],
          "photo_reference": "CmRaAAAAgO6OH-ceDRy4Mh_6YUUfQbxFDPl1rgz-ajrqb2gWG6VvEbt_nWly8BPIf-yRwD0gqRJN7nRKcKotOKmtOJmhQE_k4iGmYIBhZDg4K9l9hrL_syYpf_w-OrxkALdTVZsuEhDLnQtopOEmiFiyy9ajs5pcGhRNDe3ybuQk6jj-QY_k6OszlqmJ1w",
          "width": 2048
        }
      ],
      "place_id": "ChIJcWP8Jto0K4gR3HluqJ6G49w",
      "rating": 3,
      "reference": "CmRSAAAA_mFtu-hgDxj9jIm6RCvHTgGfb_DlpunlSxaEtywVHwM0x0zOOphsQ_bbc0TIOTwImGNCnHxYWHlaAhZzQ-Fo58RxAH5a7RYJefa1t1ZQBxmPLS7LDtZ-IO0Rx_tvMSzuEhDaBW_wQLWrKdbbiKEpZHfBGhTB9q96r_ZDkrtyYH12jeg2-bvMlA",
      "scope": "GOOGLE",
      "types": [
        "restaurant",
        "food",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "389 King Street West, Toronto"
    }
  ],
  "status": "OK"
}

const params = {v: '3.exp', key: process.env.REACT_APP_GOOGLEMAPS_APIKEY};

class MapComponent extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {

    const markers = []
    const infos = []

    const places = data.results

    for (let place in places) {
      markers.push(<Marker
          key={place}
          lat={places[place]["geometry"]["location"].lat}
          lng={places[place]["geometry"]["location"].lng}
          //draggable={true}
          //onDragEnd={this.onDragEnd}
          />
      )

      infos.push(<InfoWindow
          key={place}
          lat={places[place]["geometry"]["location"].lat}
          lng={places[place]["geometry"]["location"].lng}
          content={places[place]["name"]}
          onCloseClick={this.onCloseClick} />
        )
    }

    // for (var i = 0; i <= 360; i+=36) {
    //   markers.push(<Marker
    //       key={i}
    //       lat={coords.lat + Math.cos(i) * 0.001}
    //       lng={coords.lng + Math.sin(i) * 0.001}
    //       draggable={true}
    //       onDragEnd={this.onDragEnd} />
    //   )
    // }

    return (
      <Gmaps
        width={'50%'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={17}
        zoomControl={true}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>

        {//markers
        }

        {infos}

      </Gmaps>
    );
  }
};

export default MapComponent;