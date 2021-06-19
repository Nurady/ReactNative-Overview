import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import laravel from '../../assets/images/laravel.png'

const Cart = (props) => {
    return (
        <View>
            <View style = { styles.cartWrapper }>
                <Image source = { laravel } style = { styles.iconCart }/>
                <Text style = { styles.cart }>{ props.quantity }</Text>
            </View>
            <Text style = { styles.text }>Nursyafriady</Text>
        </View>
    )
}

export default Cart
const styles = StyleSheet.create({
    iconCart: {
        width:80, 
        height:80, 
        borderRadius:50
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#F2994A',
        width:80, 
        height:80, 
        borderRadius: 80/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#777777',
        fontWeight: '700',
        marginTop: 8
    },
    cart: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: '#334443',
        padding: 4,
        fontSize: 12,
        color: 'white',
        borderRadius: 25,
        width: 24,
        height: 24
    }
})
