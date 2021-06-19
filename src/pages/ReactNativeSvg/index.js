import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Gambar from '../../assets/images/gambar.svg'

const ReactNativeSvg = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.textTitle}>Materi React Native Menggunakan Image SVG</Text>
            <Gambar width={300} height={300} />
        </View>
    )
}

export default ReactNativeSvg

const styles = StyleSheet.create({
    container: {
        padding: 20,        
    },
    textTitle: {
        textAlign:'center',
    }
})
