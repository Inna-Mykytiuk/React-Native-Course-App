import React from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = props => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, data } = styles;
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color="white" />
      <Text style={data}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
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
    boxShadow: 'rgba(0, 0, 0, 0.5) 0px 3px 10px;',
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
