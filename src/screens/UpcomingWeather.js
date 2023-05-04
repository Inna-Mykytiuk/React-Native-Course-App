import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const DATA = [
  {
    dt_txt: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

const Item = props => {
  const { dt_txt, min, max, condition } = props;
  return (
    <View style={styles.item}>
      <FontAwesome name="sun-o" size={50} color="white" />
      <Text style={styles.data}>{dt_txt}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text>UpcomingWeather</Text>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/upcoming-background1.jpg')}
      >
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
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
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '2px solid white',
    borderRadius: 10,
    backdropFilter: 'blur(10px)',
    backgroundColor: '#00466e1a',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 10,
    //   height: 20,
    // },
    // shadowOpacity: 0.7,

    // shadowRadius: 3.84,
    // elevation: 5,
  },
  temp: {
    fontSize: 20,
    color: '#fff',
  },
  data: {
    fontSize: 15,
    color: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default UpcomingWeather;