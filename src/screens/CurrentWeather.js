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
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/city-background3.jpg')}
      >
        <View style={item}>
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
        <RowText
          messageOne={'Its sunny'}
          messageTwo={'Its perfect t-shirt weather'}
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
    // marginTop: StatusBar.currentHeight || 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  // wrapper: {
  //   flex: 1,
  //   backgroundColor: '#f7e1d7',
  // },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

    borderRadius: 10,

    backdropFilter: 'blur(10px)',
    backgroundColor: '#00466e40',

    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    // elevation: 5,
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
  },
});
