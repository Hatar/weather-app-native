import React, { useState } from 'react'
import { StyleSheet,View,Text,TextInput,Button } from 'react-native'
import axios from 'axios'

const API_KEY = "da23d857c36fb790bde9bab69c815acc"
function Form({setData,setTitle}) {
    const [city,setCity]= useState("")
    const [country,setCountry]= useState("")

    const getInfoWeather = async () => {
        if(city && country){
            setTitle(city)
            await axios.post(`http://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&${country.trim()}&appid=${API_KEY}`)
            .then((res) => {
                setData(res.data)
                setCity('')
                setCountry('')
            })
        }
    }
    return (
        <View style={styles.content}>
            <Text style={styles.headerTitle}>Weather App</Text>
            <View style={styles.box}>
                <Text style={styles.label}>City :</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your City"
                    onChangeText={(text) => setCity(text)}
                    value={city}
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.label}>Country :</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Country"
                    onChangeText={(text) => setCountry(text)}
                    value={country}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Get Weather"
                    color={"#333"}
                    onPress={() => getInfoWeather()}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        margin:50
    },  
    headerTitle:{
        textAlign:"center",
        fontSize:18,
        letterSpacing:0.5,
        fontWeight:"600",
    },
    box:{
        marginBottom:10, 
    },
    label:{
        marginBottom:10,
        fontSize:15,
        fontWeight:"300",
        letterSpacing:1,
        color:"#333"
    },
    input:{
        height: 40,
        borderWidth: 1,
        padding: 10,
        height:40,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        border:"solid",
    },
    button:{
       width:"50%",
       marginTop: 10,
       borderColor: "black",
       borderRadius: 20,
    }
})

export default Form