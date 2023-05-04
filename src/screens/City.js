import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

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
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}
      >
        <View style={cityWrap}>
          <Text style={[cityName, cityText]}>London</Text>
          <Text style={[countryName, cityText]}>UK</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={'user'}
              iconColor={'white'}
              bodyText={'8000'}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={'sunrise'}
              iconColor={'white'}
              bodyText={'10:46:58am'}
              bodyTextStyles={riseSetText}
              size={30}
            />
            <IconText
              iconName={'sunset'}
              iconColor={'white'}
              bodyText={'17:28:15pm'}
              bodyTextStyles={riseSetText}
              size={30}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00466e1a',
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  cityWrap: {
    backdropFilter: 'blur(10px)',
    backgroundColor: '#00466e1a',
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 10px;',
    padding: 20,
    marginTop: 30,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 24,
    // marginLeft: 7.5,
    color: '#fff',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
    gap: 20,
  },
  riseSetText: {
    fontSize: 18,
    color: '#fff',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
