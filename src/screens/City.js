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
          <View style={populationWrapper}>
            <Feather name={'user'} size={46} color="white" />
            <Text style={populationText}>8000</Text>
          </View>
          <View style={riseSetWrapper}>
            <Feather name={'sunrise'} size={30} color="white" />
            <Text style={riseSetText}>10:46:58am</Text>
            <Feather name={'sunset'} size={30} color="white" />
            <Text style={riseSetText}>17:28:15pm</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 24,
    marginLeft: 7.5,
    color: '#fff',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    gap: 20,
  },
  riseSetText: {
    fontSize: 18,
    color: '#fff',
    // fontWeight: 'bold',
  },
});

export default City;
