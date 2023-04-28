import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Button, RefreshControl, ScrollView } from 'react-native'
import { useState } from 'react';
import { FlatList } from 'react-native';
import { SectionList } from 'react-native';

export default function App() {


  return (
  <View style={styles.body}>
    <Text style>

      </Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
 body: {
    flex: 1,
flexDirection:'column',
    backgroundColor: 'blue',
   
    borderWidth:10,
    borderRadius:5,
    borderColor:'black',

  },
  text:{
color: 'black',
fontSize: 30,
margin:10
  },

});
