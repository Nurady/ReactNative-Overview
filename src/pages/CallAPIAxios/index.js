import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CallAPIAxios = () => {
    const [ dataUser, setDataUser ] = useState({
        avatar: '',
        firts_name: '',
        last_name: '',
        email: ''
    });

    const [ dataJob, setDataJob ] = useState({
        name: '',
        job: ''
    });

    const getData = () => {
        axios.get('https://reqres.in/api/users/3')
            .then(result => {
                    setDataUser(result.data.data);
                })
            .catch(err => console.log(err))
    };

    const postData = () => {
        const dataForAPI = {
            name: "morpheus",
            job: "leader"
        }        

        axios.post('https://reqres.in/api/users', dataForAPI)
            .then(response => {
                setDataJob(response.data)
            })
            .catch(err => { 
                console.log(err);
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call API dengan Vanilla JS</Text>
            <Button title="GET DATA" onPress={getData}/>           
            {
                dataUser.avatar.length > 0 && (
                    <Image source={{uri: dataUser.avatar}} style={styles.avatar}/>
                )
            } 
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>
            <Text>Response Get Data</Text>
            <View style={styles.line}/>
            <Button title="POST DATA" onPress={postData}/>
            <Text>{dataJob.name}</Text>
            <Text>{dataJob.job}</Text>
            <Text>Response Post Data</Text>
        </View>
    )
}

export default CallAPIAxios;

const styles = StyleSheet.create({
    container : {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    },
    line: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 20
    },
    avatar: {
        height: 80,
        width:80,
        marginVertical: 20,
        borderRadius: 80/2
    }
});
