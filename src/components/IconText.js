import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = props => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  const { container, textTheme } = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={46} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textTheme: {
    fontWeight: 'bold',
  },
});

export default IconText;
