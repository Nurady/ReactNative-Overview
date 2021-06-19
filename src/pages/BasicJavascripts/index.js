import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavascripts = () => {
    // Complex
    const hewanPeliharaan = {
        nama : "miau",
        jenis : "kucing",
        usis : 3,
        apakahHewanLokal : true,
        warna : 'kuning',
        orangTua : {
            jantan : "jantan",
            betina : "betina",
        },
    };

    const sapaOrang = (name, age) => {
        return console.log(`Hello ${ name } usia anda ${ age }`);
    };

    sapaOrang("yadi", 30);

    return (
        <View style = {styles.container}>
            <Text style = {styles.textTitle}>Materi Basic Javascripts di React Native</Text>
        </View>
    )
}

export default BasicJavascripts
const styles = StyleSheet.create({
    container: {
        padding: 20,        
    },
    textTitle: {
        textAlign:'center',
    }
})
