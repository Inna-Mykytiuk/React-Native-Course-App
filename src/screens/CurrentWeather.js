import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FontAwesome name="sun-o" size={56} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.wrapHightLow}>
          <Text style={styles.hightLow}>Hight: 8 </Text>
          <Text style={styles.hightLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#f7e1d7',
  },
  temp: {
    fontSize: 48,
    color: '#000',
  },
  feels: {
    fontSize: 30,
    color: '#000',
  },
  hightLow: {
    fontSize: 20,
    color: '#000',
  },
  wrapHightLow: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // width: '50%',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
