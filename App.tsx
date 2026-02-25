import { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon, Searchbar } from 'react-native-paper'

export default function App() {
  
  const [searchQuery, setSearch] = useState('');


  return (
    <View style={{
      flex: 1,
      backgroundColor: 'lightblue'
    }}>
      <StatusBar backgroundColor='black' />
      <View style={styles.topBar}>
        
        <Text style={styles.title}> Weather</Text>
        <Searchbar
      placeholder="Enter city"
      onChangeText={setSearch}
      value={searchQuery}/>
      <View style={{alignItems:"center"}}>

      <Image style={styles.image}
        source={require("./assets/weather_icon.png")}/>
        <Text style={{fontSize:40}}>40 C</Text>
        <Text style={{fontSize:20}}> City</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight:"500"

  },
  topBar:{
    flexDirection: "column",
    justifyContent:"center",
    padding: 30
  },
  image:{
    width:200, 
    height:200
  }
});
