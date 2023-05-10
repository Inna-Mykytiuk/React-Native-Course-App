import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
  const { container, errorMessage } = styles;

  return (
    <View style={container}>
      <Feather name={'frown'} size={54} color={'white'} />
      <Text style={errorMessage}>Sorry something went wrong</Text>
    </View>
  );
};

export default ErrorItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 28,
    color: 'white',
    marginHorizontal: 10,
  },
});
