import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MyButton from './MyButton';
import MyButton2 from './MyButton2';
import MyButton3 from './MyButton3';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton3 />
      <MyButton3 title ="MyButton 2" onPress={()=> alert('2')}>"Mybutton3"</MyButton3>
      <MyButton3>children</MyButton3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
