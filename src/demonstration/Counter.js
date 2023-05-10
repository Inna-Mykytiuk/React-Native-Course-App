import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed`);
    return () => {
      console.log(`Count cleanup`);
    };
  }, [count]);

  const { container, counter, buttonWrapper } = styles;
  return (
    <View style={container}>
      <Text style={counter}>{`count: ${count}`}</Text>
      <View style={buttonWrapper}>
        <Button
          color={'red'}
          title={' + '}
          onPress={() => {
            setCount(count + 1);
          }}
        />
        <Button
          color={'blue'}
          title={' - '}
          onPress={() => {
            setCount(count - 1);
          }}
        />
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: 25,
  },
  counter: {
    fontSize: 25,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
