import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';
import { Shadow } from 'react-native-shadow-2';
import Button from '../components/Button';

const CurrentWeather = () => {
  const {
    container,
    // wrapper,
    temp,
    feels,
    wrapHightLow,
    hightLow,
    bodyWrapper,
    description,
    message,
    image,
    item,
    textShadow,
    shadow,
    wrapper,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/city-background3.jpg')}
      >
        <View style={wrapper}>
          <Shadow
            offset={[0, 5]}
            distance={10}
            // startColor={'#00000020'}
            startColor={'#00466e30'}
            containerViewStyle={{ alignSelf: 'stretch' }}
            radius={8}
            viewStyle={{ alignSelf: 'stretch' }}
          >
            <View style={[item, shadow]}>
              <Feather name={'sun'} size={56} color="white" />
              <Text style={[temp, textShadow]}>6</Text>
              <Text style={[feels, textShadow]}>Feels like 5</Text>
              <RowText
                messageOne={'Hight: 8 '}
                messageTwo={'Low: 6'}
                containerStyles={wrapHightLow}
                messageOneStyles={[hightLow, textShadow]}
                messageTwoStyles={[hightLow, textShadow]}
              />
            </View>
          </Shadow>
        </View>
        <Button />

        <RowText
          messageOne={'Its sunny'}
          messageTwo={weatherType['Thunderstorm'].message}
          containerStyles={bodyWrapper}
          messageOneStyles={[description, textShadow]}
          messageTwoStyles={[message, textShadow]}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00466e1a',

    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  wrapper: {
    // flex: 1,
    // backgroundColor: '#f7e1d7',
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    padding: 20,
    // marginTop: StatusBar.currentHeight || 0,
    // marginVertical: 8,
    // marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderRadius: 10,

    backdropFilter: 'blur(10px)',
    backgroundColor: '#00466e30',
  },
  temp: {
    fontSize: 48,
    color: '#fff',
  },
  feels: {
    fontSize: 30,
    color: '#fff',
  },
  hightLow: {
    fontSize: 20,
    color: '#fff',
  },
  textShadow: {
    textShadowColor: '#00000090',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  wrapHightLow: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    color: '#fff',
  },
  message: {
    fontSize: 30,
    color: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

// import { Card } from 'react-native-shadow-cards';
// import React from 'react';
// import {
//   Text,
//   View,
//   SafeAreaView,
//   StyleSheet,
//   ImageBackground,
//   StatusBar,
// } from 'react-native';
// import { Feather } from '@expo/vector-icons';
// import RowText from '../components/RowText';
// import { weatherType } from '../utilities/weatherType';

// const CurrentWeather = () => {
//   const {
//     container,
//     temp,
//     feels,
//     wrapHightLow,
//     hightLow,
//     bodyWrapper,
//     description,
//     message,
//     image,
//     item,
//     textShadow,
//     wrapper,
//   } = styles;

//   return (
//     <SafeAreaView style={container}>
//       <ImageBackground
//         style={image}
//         // source={require('../../assets/city-background3.jpg')}
//       >
//         <View style={wrapper}>
//           <Card
//             style={{
//               borderRadius: 10,
//               elevation: 10,
//               backgroundColor: '#00466e4',
//               opacity: 0.8,
//             }}
//           >
//             <View style={item}>
//               <Feather name={'sun'} size={56} color="white" />
//               <Text style={[temp, textShadow]}>6</Text>
//               <Text style={[feels, textShadow]}>Feels like 5</Text>
//               <RowText
//                 messageOne={'Hight: 8 '}
//                 messageTwo={'Low: 6'}
//                 containerStyles={wrapHightLow}
//                 messageOneStyles={[hightLow, textShadow]}
//                 messageTwoStyles={[hightLow, textShadow]}
//               />
//             </View>
//           </Card>
//         </View>

//         <RowText
//           messageOne={'Its sunny'}
//           messageTwo={weatherType['Thunderstorm'].message}
//           containerStyles={bodyWrapper}
//           messageOneStyles={[description, textShadow]}
//           messageTwoStyles={[message, textShadow]}
//         />
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// export default CurrentWeather;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#00466e1a',

//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignContent: 'center',
//   },

//   wrapper: {
//     marginTop: StatusBar.currentHeight || 0,
//   },

//   item: {
//     padding: 20,
//     // marginTop: StatusBar.currentHeight || 0,
//     // marginVertical: 8,
//     // marginHorizontal: 16,
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     alignItems: 'center',

//     borderRadius: 10,

//     backdropFilter: 'blur(10px)',
//     backgroundColor: '#00466e40',
//   },
//   temp: {
//     fontSize: 48,
//     color: '#fff',
//   },
//   feels: {
//     fontSize: 30,
//     color: '#fff',
//   },
//   hightLow: {
//     fontSize: 20,
//     color: '#fff',
//   },
//   textShadow: {
//     textShadowColor: '#00000090',
//     textShadowOffset: { width: 0, height: 1 },
//     textShadowRadius: 1,
//   },
//   wrapHightLow: {
//     flexDirection: 'row',
//   },
//   bodyWrapper: {
//     justifyContent: 'flex-end',
//     alignItems: 'flex-start',
//     paddingLeft: 25,
//     marginBottom: 40,
//   },
//   description: {
//     fontSize: 48,
//     color: '#fff',
//   },
//   message: {
//     fontSize: 30,
//     color: '#fff',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
// });
