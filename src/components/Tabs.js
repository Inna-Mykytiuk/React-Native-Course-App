import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'khaki',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#00466e80',
          elevation: 0,
        },

        headerStyle: {
          backgroundColor: '#00466e80',
          borderBottomWidth: 0,
        },
        // headerTitleContainerStyle: {
        //   marginBottom: 30,
        // },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
          color: 'white',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={24}
              color={focused ? 'khaki' : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={24}
              color={focused ? 'khaki' : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={24}
              color={focused ? 'khaki' : 'white'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
