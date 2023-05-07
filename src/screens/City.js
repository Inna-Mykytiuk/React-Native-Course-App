import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import IconText from '../components/IconText';
import { Card } from 'react-native-shadow-cards';
import { Shadow } from 'react-native-shadow-2';

const City = () => {
  const {
    imageLayout,
    container,
    cityName,
    countryName,
    cityWrap,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    textShadow,
    wrapper,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
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
            <View style={cityWrap}>
              <Text style={[cityName, cityText, textShadow]}>London</Text>
              <Text style={[countryName, cityText, textShadow]}>UK</Text>
              <View style={[populationWrapper, rowLayout]}>
                <IconText
                  iconName={'user'}
                  iconColor={'white'}
                  bodyText={'8000'}
                  bodyTextStyles={[populationText, textShadow]}
                />
              </View>
              <View style={[riseSetWrapper, rowLayout]}>
                <IconText
                  iconName={'sunrise'}
                  iconColor={'khaki'}
                  bodyText={'10:46:58am'}
                  bodyTextStyles={[riseSetText, textShadow]}
                  size={30}
                />
                <IconText
                  iconName={'sunset'}
                  iconColor={'khaki'}
                  bodyText={'17:28:15pm'}
                  bodyTextStyles={[riseSetText, textShadow]}
                  size={30}
                />
              </View>
            </View>
          </Shadow>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: StatusBar.currentHeight || 0,

    borderRadius: 10,
  },
  imageLayout: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cityWrap: {
    backdropFilter: 'blur(10px)',
    backgroundColor: '#4f3c4240',
    padding: 20,

    borderRadius: 10,
    // overflow: 'hidden',
    // opacity: 0.6,

    shadowColor: '#000',
    // elevation: 1,
    // shadowOffset: { width: 0, height: 3 },
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
  },

  cityName: {
    fontSize: 40,
    color: 'khaki',
  },
  countryName: {
    fontSize: 30,
    color: '#fff',
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    // color: '#fff',
    fontWeight: 'bold',
  },
  textShadow: {
    textShadowColor: '#00000090',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 24,
    color: '#fff',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
    gap: 58,
  },
  riseSetText: {
    fontSize: 14,
    color: '#fff',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
