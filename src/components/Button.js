import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: '#000',
    // shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.8,
    // shadowRadius: 20,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
