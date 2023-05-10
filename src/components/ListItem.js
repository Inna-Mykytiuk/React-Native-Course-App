import React from 'react';
import { StyleSheet, Text, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
// import { Card } from 'react-native-shadow-cards';
import { Shadow } from 'react-native-shadow-2';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment';

const ListItem = props => {
  const { dt_txt, min, max, condition } = props;
  const { item, temp, data, textShadow, dayTextWrapper } = styles;
  return (
    <Shadow
      offset={[0, 5]}
      distance={10}
      // startColor={'#00000020'}
      startColor={'#00466e30'}
      containerViewStyle={{ alignSelf: 'stretch' }}
      radius={8}
      viewStyle={{ alignSelf: 'stretch' }}
    >
      <View style={item}>
        <Feather
          name={weatherType[condition].icon}
          size={50}
          color={'khaki'}
          style={{ marginRight: 20 }}
        />
        <View style={dayTextWrapper}>
          <Text style={[data, textShadow]}>
            {moment(dt_txt).format('dddd')}
          </Text>
          <Text style={[data, textShadow]}>
            {moment(dt_txt).format('h:mm:ss a')}
          </Text>
        </View>

        <Text style={[temp, textShadow]}>{`${Math.round(min)}° / ${Math.round(
          max
        )}°`}</Text>
        {/* <Text style={[temp, textShadow]}>{`${Math.round(max)}`}</Text> */}
      </View>
    </Shadow>
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
    backgroundColor: '#00466e30',

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
    flexDirection: 'column',
    fontSize: 20,
    color: 'khaki',
    marginRight: 10,
  },
  data: {
    fontSize: 15,
    color: '#fff',
    marginRight: 20,
  },
  dayTextWrapper: {
    flexDirection: 'column',
  },
});

export default ListItem;

//<Card style={{ borderRadius: 10, elevation: 8, margin: 15 }}>
