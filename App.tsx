import axios from 'axios';
import { use, useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon, Searchbar } from 'react-native-paper'

interface WeatherData {
  city: string;
  temperature: number;
  windSpeed: number;
  country: string;
}

const apiKey = "tähän api avain"

export default function App() {
  const [search, setSearch] = useState('Oulu');
  const [weather, setWeather] = useState<WeatherData | null>(null); // Use null for initial state


  useEffect(() => {
    fetchWeather();
  }, [search])
  async function fetchWeather() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`)
      .then((res) => {
        console.log(res)
        setWeather({
          city: res.data.name,
          temperature: res.data.main.temp,
          windSpeed: res.data.wind.speed,
          country: res.data.sys.country
        })
      }).catch((error) => {
        console.log(error)
      })
  }



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' />
      <View>
        <View style={styles.topBar}>

        <Text style={styles.title}>Weather</Text>
        <Searchbar
          placeholder="Enter city"
          onChangeText={setSearch}
          value={search} />
          </View>
        <View style={{ alignItems: "center" }}>

          <Image style={styles.image}
            source={require("./assets/weather-icon.png")} />
          {weather && (
            <>
              <Text style={{ fontSize: 30 }}>{weather.city}, {weather.country}</Text>
              <Text style={{ fontSize: 20 }}>
                {weather.temperature.toFixed(0)} °C
              </Text>
              <Text style={{ fontSize: 20 }}>
                {weather.windSpeed.toFixed(1)} m/s
              </Text>
            </>
          )}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: 'lightblue'
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    padding:20

  },
  topBar: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    padding: 40,
    paddingTop:70
  },
  image: {
    width: 200,
    height: 200
  }
});
