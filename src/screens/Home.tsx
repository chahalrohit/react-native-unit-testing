import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Home: React.FC = () => {
  const [result, setResult] = useState<string | number>('');

  const onChangeText = (value: any) => {
    setResult(parseInt(value));
  };

  return (
    <View style={styles.container}>
      <TextInput
        testID="username"
        style={{marginHorizontal: 20}}
        placeholder="Enter your name"
        value={String(result)}
        onChangeText={val => onChangeText(val)}
      />
      <Text testID="resultText">{result}</Text>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
