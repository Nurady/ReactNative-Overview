import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

// Dimensions.get('width').width
const Story = props => {
    return (
        <View style={{ alignItems:'center', marginRight:20, marginTop: 10, }}>
            <Image source={{uri: props.image }} style={{width:70, height:70, borderRadius:70/2}}/>
            <Text style={{ maxWidth:70, textAlign:'center' }}>{props.name}</Text>
        </View>        
    );
};

const PropDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <ScrollView  horizontal={true}>            
                <View style={{ flexDirection: 'row'}}>            
                    <Story name="izzan" image="https://placeimg.com/100/100/animals"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1543932169-4a26c43dfaa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1564165219324-f91d8e35c7ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1580465446361-8aae5321522b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1553235437-fb1fa9d4e513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1580465446361-8aae5321522b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"/>
                    <Story name="izzan" image="https://images.unsplash.com/photo-1608300973016-e60c5b0093f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"/>
                </View>
            </ScrollView>
        </View>
    );
};

export default PropDinamis;
const styles = StyleSheet.create({});
