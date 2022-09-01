import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function Produtos({nome, imagem, descricao}, {navigation}){
    return(
        // onPress={() => navigation.navigate('DescProduto')}
        <TouchableOpacity style={estilo.container}>
            <Image
            style={estilo.images}
            source={require(`./../../imagens/produtos/${imagem}`)}
            />

            <View style={estilo.textView}>
                <Text style={estilo.nome}>{nome}</Text>
                <Text style={estilo.descricao}>{descricao}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    container: {
        borderRadius: 20,
        marginTop: 8,
        marginBottom: 20,
        marginLeft: 5,
        padding: 10,
        margin: 2,
        alignItems: "center",
        width: 200,
        height: 250,
        backgroundColor: "rgba(223, 1, 1, 0.65)",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,    
    },
    textView:{
        width: '100%',
        textAlign: 'right'
    },
    nome:{
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 30,
    },
    descricao: {
        color: '#ffff',
        fontSize: 12.5,
    },
    images: {
        width: '50%',
        height: '50%',
        borderRadius: 25,
        marginTop: 5,
    }
});
