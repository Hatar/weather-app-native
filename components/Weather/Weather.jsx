import React from 'react'
import {StyleSheet, Text, View } from 'react-native'

function Weather({title,data}) {
  return (
    <View>
        <Text style={styles.headerTitle}>Weather of {title} :</Text>
        <View style={styles.content}>
            <View>
                <Text style={styles.info__box}>Location : { `${title} - ${data.sys.country}` }</Text>
            </View>
            <View>
                <Text style={styles.info__box}>Temperature : {data.main.temp}</Text>
            </View>
            <View>
                <Text style={styles.info__box}>Humidity : {data.main.humidity}</Text>
            </View>
            <View>
                <Text style={styles.info__box}>Conditions : {data.weather[0].description}</Text>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    headerTitle:{
        fontSize:18,
        letterSpacing:0.5,
        fontWeight:"600",
        marginLeft:50,
        marginBottom:10,
        fontSize:15,
        fontWeight:"500",
        letterSpacing:1,
        color:"#333"
    },
    content:{
        backgroundColor:"#2E4E49",
        width:"80%",
        height:"auto",
        marginLeft:50,
        padding:30,
        borderColor: "#f2f2f2",
        border:"solid",
        borderRadius:10,
    },
    info__box:{
        marginBottom:15,
        fontSize:18,
        fontWeight:"300",
        letterSpacing:1,
        color:"#fff"
    }
})

export default Weather