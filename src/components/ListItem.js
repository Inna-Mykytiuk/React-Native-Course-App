import React from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ListItem = props => {
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
  },
  temp: {
    fontSize: 20,
    color: '#fff',
  },
  data: {
    fontSize: 15,
    color: '#fff',
  },
});

export default ListItem;
