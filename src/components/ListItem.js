import React from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = props => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, data, textShadow } = styles;
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color="white" />
      <Text style={[data, textShadow]}>{dt_txt}</Text>
      <Text style={[temp, textShadow]}>{min}</Text>
      <Text style={[temp, textShadow]}>{max}</Text>
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

    // borderColor: 'white',
    // borderWidth: 2,
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
