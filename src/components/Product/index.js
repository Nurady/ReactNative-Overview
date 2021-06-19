import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import laravel from '../../assets/images/laravel.png'

const Product = (props) => {
    return (
        <View style={{ padding: 12, backgroundColor: '#F2F2F2', marginTop: 10, width:200, borderRadius: 8 }}>
          <Image source={ laravel } style={{ width:188, height:107, justifyContent: 'center', alignItems: 'center',  borderRadius: 8 }}/>
          <Text style={{ fontSize:14, fontWeight:'bold', marginTop: 16 }}>Government Digital Service</Text>
          <Text style={{ fontSize:30, fontWeight:'bold', color:'#F2994A', marginTop: 12 }}>Making 4.0</Text>
          <Text style={{ fontSize:20, fontWeight:'bold', marginTop: 12 }}>KSB Smart Region</Text>
          <TouchableOpacity onPress = {props.onButtonPress }>
                <View style={{ backgroundColor: '#6FCF97', paddingVertical:6, borderRadius: 20, marginTop: 20 }}>
                    <Text style={{ fontSize:20, fontWeight:'600', color: 'white', textAlign:'center' }}>Kunjungi</Text>
                </View>
          </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({})
