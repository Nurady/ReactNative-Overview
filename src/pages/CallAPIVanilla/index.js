import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const CALLAPIVanilla = () => {
    useEffect(() => {
    }, []);

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
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setDataUser(json.data);
            })
    };

    const postData = () => {
        const dataForAPI = {
            name: "morpheus",
            job: "leader"
        }        

        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(dataForAPI)
        })
            .then(response => response.json())
            .then(json => { 
                console.log(json);
                setDataJob(json);
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Call API dengan Axios</Text>
            <Button title="GET DATA" onPress={getData}/>  
            {/* karena image di mounting duluan */}
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

export default CALLAPIVanilla;

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
