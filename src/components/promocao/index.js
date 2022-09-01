import React from 'react';
import {Text,TouchableOpacity, View, StyleSheet, Image, } from 'react-native';

export default function Promocao({produto, imagem}){
    return(
        <View style={estilo.container}>
            <Image style={estilo.image}
            source={require(`../../imagens/promocoes/${imagem}`)}
            />
            <Text style={estilo.promocao}>{produto} está em Promoção! 2 pacotes por apenas 10R$!</Text>
        </View>
    )
};



const estilo = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'rgba(223, 1, 1, 0.65)',
        margin: 15,
        marginBottom: -6,
        alignItems: 'center',
        alignContent: 'center',
        height: 250,
        borderRadius: 15,
        borderStyle: 'solid',
        borderWidth: 1.5
    },
    image:{
        height: '50%',
        width: 180,
        margin: 15,
    },
    promocao:{
        backgroundColor: 'rgba(223, 1, 1, 0.75)',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
        height: '50%', 
        marginTop: 5,
        textAlign: 'center',
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,    
    }
});