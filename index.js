import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableHighlight,TextInput,Button,Picker,Alert, } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Preview your profile
      </Text> 
      <Card>
       <Image
          style={styles.stretch}
          source={require('z2812009686518_be7116e2922087ae40e8add5567e0312.jpg')}
        />
      </Card><Text style={styles.title1}> </Text>

      <TouchableHighlight >
      <View style={styles.button}>
      <Text>F&B</Text>
      </View>
      </TouchableHighlight>
      <Text style={styles.title}>Radio host, investor, author, speaker and theater producer. Investor in 50+ startup and sits on the broad of XXX </Text>
    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'while',
    padding: 0,
  },
  paragraph: {
    margin: 13,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stretch:{
    height:300,
    width:330,
  },
  title:{
    color:'Black',
    padding:5,

  },
  title1:{
    color:'Black',
    padding:0.1,
    fontSize:5,

  },
  button: {
    alignItems: "center",
    backgroundColor: "pink",
    padding:8,
    width:100,
    borderRadius:20,
  },
});
