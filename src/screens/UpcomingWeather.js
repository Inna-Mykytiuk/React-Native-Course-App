import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import ListItem from '../components/ListItem';
import { View } from 'react-native';

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { container, image, wrapper, separator } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background1.jpg')}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
          style={wrapper}
          ItemSeparatorComponent={() => <View style={separator} />}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00466e1a',
  },
  wrapper: {
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 20, // висота вертикального проміжку
    backgroundColor: 'transparent',
  },
});

export default UpcomingWeather;

// ItemSeparatorComponent = {() => <View style={separator} />}
//separator: {
//   height: 20, // висота вертикального проміжку
//   backgroundColor: 'transparent',
// },
