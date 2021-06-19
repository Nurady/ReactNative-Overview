import React, {Component} from 'react';
import {
    Image,
    Text,   
    View,
    StyleSheet,
  } from 'react-native';
  import laravel from '../../assets/images/laravel.png';
  
  const StylingComponent = () => {
    return (
      <View>
          <Text style={styles.text}>Sistem Pemerintahan {"\n"} Berbasis Elektronik {"\n"} Kabupaten Sumbawa Barat</Text>
          <View style={{
                  padding: 12, 
                  backgroundColor: '#F2F2F2',
                  marginTop: 10, 
                  width:200,
                  borderRadius: 8
                }}>
                <Image source={ laravel } 
                       style={{ 
                        width:188, 
                        height:107, 
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8
                        }}/>
                <Text style={{ fontSize:14, fontWeight:'bold', marginTop: 16 }}>Government Digital Service</Text>
                <Text style={{ fontSize:30, fontWeight:'bold', color:'#F2994A', marginTop: 12 }}>Making 4.0</Text>
                <Text style={{ fontSize:20, fontWeight:'bold', marginTop: 12 }}>KSB Smart Region</Text>
                <View style={{ backgroundColor: '#6FCF97', paddingVertical:6, borderRadius: 20, marginTop: 20 }}>
                    <Text style={{ fontSize:20, fontWeight:'600', color: 'white', textAlign:'center' }}>Kunjungi</Text>
                </View>
              </View>
          <View 
            style={{ 
              width:300, 
              height:300, 
              backgroundColor: '#3d84b8', 
              borderWidth:2,
              borderColor: '#3f3697',
              marginTop: 20,
              marginLeft: 20
              }}/>
      </View>
    )
};

const styles = StyleSheet.create({
    text:{
      fontSize: 30,
      color: '#000',
      textAlign: "center",
      backgroundColor: "#87a7b3",
      padding: 10,
      fontWeight:'bold'
    },
});

export default StylingComponent;