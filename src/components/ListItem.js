import React from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-shadow-cards';

const ListItem = props => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, data, textShadow } = styles;
  return (
    <Card style={{ borderRadius: 10, elevation: 8, margin: 15 }}>
      <View style={item}>
        <Feather name={'sun'} size={50} color="white" />
        <Text style={[data, textShadow]}>{dt_txt}</Text>
        <Text style={[temp, textShadow]}>{min}</Text>
        <Text style={[temp, textShadow]}>{max}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00466e1a',
  },

  item: {
    padding: 20,
    flexDirection: 'row',
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
  textShadow: {
    textShadowColor: '#00000090',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
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
