import React, {Component} from 'react';
import {
    Image,
    TextInput,
    Text,   
    View,
  } from 'react-native';

const SampleComponent = () => {
    return (
      <View>
      <View style={{ width:80, height:80, backgroundColor: '#1abc9c' }}/>
        <Text>Nursyafriady</Text>
        <Gelar/>
        <Text>Munarsih</Text>
        <Text>Izzan</Text>
        <Photo/>
        <TextInput style={{borderWidth: 1 }} />
        <BoxGreen/>
        <Profile/>
    </View> 
    );
};

const Gelar = () => {
  return <Text>ST., M.T.I</Text>
};

const Photo = () => {
  return <Image source={{uri: 'https://placeimg.com/100/100/tech' }} style={{width:80, height:80}}/>
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>
  }
}

class Profile extends Component {
  render() {
    return (
    <View>   
      <Image source={{uri: 'https://placeimg.com/100/100/animals' }} style={{width:80, height:80,borderRadius:50}}/>
      <Text style={{ color:'blue',fontSize:30 }}>Ini Hewan</Text>
    </View>   
    )
  }
}

export default SampleComponent;