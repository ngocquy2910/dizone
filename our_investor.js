import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Button,Picker,Alert,TouchableHighlight  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    const [number, onChangeNumber] = React.useState(null);
    const [selectedValue, setSelectedValue] = ("");
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hi Randi, Our Investor
      </Text>
     <View style={styles.middle} 
     />
      <Text style={styles.title}> About Me</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <Text style={styles.title}> My Work</Text>
      <TextInput
        style={styles.inputwork}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      <Text style={styles.title}> What type of investors are you?</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 320 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Communiti" value="Communiti" />
        <Picker.Item label="HeathCare" value="HeathCare" />
        <Picker.Item label="Organic" value="Organic" />
        <Picker.Item label="Wellness" value="Wellness" />
        <Picker.Item label="F&B" value="F&B" />

      </Picker>
      <Text style={styles.title}> </Text>
      <View style={styles.fixToText}>
      <TouchableHighlight >
      <View style={styles.button}>
      <Text>EDIT</Text>
      </View>
      </TouchableHighlight>
      <TouchableHighlight >
      <View style={styles.button}>
      <Text>PREVIEW</Text>
      </View>
      </TouchableHighlight>
        <Text style={styles.title}> </Text>
      </View>
      <TouchableHighlight >
      <View style={styles.buttonsave}>
      <Text>SAVE</Text>
      </View>
      </TouchableHighlight>
      <Card>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'while',
    padding: 8,
  },
  title: {
    color : '#ecf0f1',
    textAlign:'left'

  },
  paragraph: {
    margin: 13,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 60,
    margin: 1,
    borderWidth: 0.1,
    padding: -10,

  },
  inputwork: {
    height: 25,
    margin: 1,
    borderWidth: 0.1,
    padding: -120,
  },
  fixToText: {
    padding: 0,
    height:35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color:'blue',
  },
  button: {
    alignItems: "center",
    backgroundColor: "WHILE",
    padding: 8,
    width:160,
  },
  buttonsave: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 8,
    width:160*2,
  },
  middle: {
    flex: 1,
    backgroundColor: "#eeeeee",
    borderWidth: 1,
    textAlign:"aaaaa·"
  },
});
