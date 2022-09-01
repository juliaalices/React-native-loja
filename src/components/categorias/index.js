import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function Categorias({nome, icone}){  
    return(
        <View>
            <TouchableOpacity style={estiloCategorias.containerCategorias}>
                <Image
                style={estiloCategorias.icone}
                source={require(`./../../imagens/categorias_icons/${icone}`)}
                />

                
            </TouchableOpacity>
            <Text style={estiloCategorias.titulo}>{nome}</Text>
        </View>
    )
    
}

const estiloCategorias = StyleSheet.create({
    containerCategorias: {
        backgroundColor: "#DCDCDC",
        borderRadius: 60,
        marginTop: 15,
        padding: 12,
        margin: 2,
        marginLeft: 8,
        marginHorizontal: 2,
        alignItems: "center",
        textAlign: 'center',
        width: 75,
        height: 80,
        display: 'flex',
        borderWidth: 1,
        borderStyle: 'solid',
        shadowColor: '#000',
 shadowOffset: {
   width: 0,
   height: 1,
 },
 shadowOpacity: 0.60,
 shadowRadius: 5,
 elevation: 3,

    },
    titulo: {
        color: "black",
        fontSize: 11,
        fontWeight: '400',
        lineWeight: 12.89,
        alignSelf: 'center',
        display: 'flex',
    },
    
    icone: {
        position: "absolute",
        width: 55,
        height: 55,   
    }
});