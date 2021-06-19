import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Item = ({name, email, bidang, onPress, hapus}) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
                <Image source={{uri: `https://ui-avatars.com/api/?background=random&name=${name}`}} style={styles.avatar}/>            
                <View style={styles.desc}>
                    <Text style={styles.descName}>{name}</Text>
                    <Text style={styles.descEmail}>{email}</Text>
                    <Text style={styles.descJob}>{bidang}</Text>
                </View>
            </TouchableOpacity>   
            <TouchableOpacity onPress={hapus}>         
                <Text style={styles.delete}>X</Text>
            </TouchableOpacity>  
        </View>
    )
};

const LocalAPI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");
    const [dataUser, setDataUser] = useState([]);
    const [button, setButton] = useState("simpan");
    const [selectedUser, setSelectedUser] = useState({});
    const [deleteUser, setDeleteUser] = useState({});

    useEffect(() => {
        getData();
    }, []);

    const submit = () => {
        const data ={
            name,
            email,
            bidang
        }
        // console.log('data beforesend', data);
        if(button === "simpan") {
            axios.post('http://10.0.2.2:3004/users', data)
            .then(response => {
                // console.log('data after send', response);
                setName("")
                setEmail("")
                setBidang("")
                getData()
            })
            .catch(err => { 
                console.log(err);
            })
        }

        if(button === "Update") {
            axios.put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
            .then(response => {
                // console.log('selected user', response);
                setName("")
                setEmail("")
                setBidang("")
                setButton("simpan")
                getData()
            })
            .catch(err => { 
                console.log(err);
            })  
        }

        if(button === "Delete") {
            Alert.alert(
                'Peringatan', 'Anda Yakin Ingin Menghapus User ini?',
                [
                    {
                        text: "Cancel",
                        onPress: () => {
                            setName("")
                            setEmail("")
                            setBidang("")
                            setButton("simpan")
                            getData()
                        },
                        style: "cancel"
                    },
                    {   text: "OK", 
                        onPress: () => axios.delete(`http://10.0.2.2:3004/users/${deleteUser.id}`, data)
                        .then(response => {
                            console.log('delete user', response);
                            setName("")
                            setEmail("")
                            setBidang("")
                            setButton("simpan")
                            getData()
                        })
                        .catch(err => { 
                            console.log(err);
                        })
                    }
                ]
            )
           
        }        
    };

    const getData = () => {
        axios.get('http://10.0.2.2:3004/users')
        .then(result => {
                // console.log(result);
                setDataUser(result.data);
            })
        .catch(err => console.log(err))
    };

    const selectItem = (item) => {
        setSelectedUser(item)
        setName(item.name)
        setEmail(item.email)
        setBidang(item.bidang)
        setButton("Update")
    };

    const deleteItem = (item) => {
        setDeleteUser(item)
        setName(item.name)
        setEmail(item.email)
        setBidang(item.bidang)
        setButton("Delete")

        // axios.delete(`http://10.0.2.2:3004/users/${item.id}`)
        // .then(response => {
        //     console.log('delete user', response);
        //     getData()
        // })
        // .catch(err => { 
        //     console.log(err);
        // })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API</Text>
            <Text style={styles.textTitle}>Masukkan Anggota Kabayan Coding</Text>
            <TextInput placeholder="Nama Lengkap" style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)}/>
            <TextInput placeholder="Bidang" style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)}/>
            <Button title={button} onPress={submit}/>
            <View style={styles.line}/>
            {
                dataUser.map((item) => {
                    return (
                        <Item 
                            key={item.id} 
                            name={item.name} 
                            email={item.email} 
                            bidang={item.bidang} 
                            onPress={() => selectItem(item)}
                            hapus={() => deleteItem(item)}
                            // hapus={() => Alert.alert(
                            //     'Peringatan', 'Anda Yakin Ingin Menghapus User ini?',
                            //         [
                            //             {   
                            //                 text: 'Tidak', 
                            //                 onPress: () => console.log('Tidak')
                            //             }, 
                            //             {
                            //                 text: 'Ya',
                            //                 onPress: () => deleteItem(item)
                            //             }
                            //         ]
                            //     )}
                        />
                    )
                })
            }
        </View>
    )
}

export default LocalAPI;

const styles = StyleSheet.create({
    container : {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 25,
        paddingHorizontal: 18
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
    },
    itemContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems:'center',
        marginBottom: 10
    },
    desc: {
        marginLeft: 18,
        flex: 1
    },
    descName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    descEmail: {
        fontSize: 16,
    },
    descJob: {
        fontSize: 12,
        marginTop: 8
    },
    delete: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',

    }
});
