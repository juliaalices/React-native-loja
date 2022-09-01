import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={estilo.header}>
            <Text style = {estilo.Texto}> FARMÁCIA </Text>
        </View>

    );
}

const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#DF0101',
        width:'100%',
        padding: 15,
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 10,
        
    },
    Texto:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        textAlign: 'center',
        fontFamily: 'Marvel',
        fontStyle: 'normal',
    },
})