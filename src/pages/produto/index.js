import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Categorias from "../../components/categorias";
import Dados from "../../../api/dadosCategorias";
import Promocao from "../../components/promocao"
import {ANTIALERGICOS} from "../../../api/dadosProdutos.js"
import {ANALGESICOS} from "../../../api/dadosProdutos.js"
import {INFANTIL} from "../../../api/dadosProdutos.js"
import {PERFUMES} from "../../../api/dadosProdutos.js"
import {COSMETICOS} from "../../../api/dadosProdutos.js"
import Produtos from "../../components/produtos"

export default function Produto() {
 return (
   <View style={{flex:1}}>
    <ScrollView contentContainerStyle={{width:'100%'}}>

      <Text style={estilo.tituloDiv}>
        Categorias
      </Text>

      <FlatList 
            horizontal={true}
            data={Dados}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Categorias
                  icone = {item.icone}
                  nome = {item.nome}
              />
            )}
      />

      <Promocao 
          produto={"Fralda Pampers"}
          imagem ={"pampers.jpg"}
      /> 

      <Text style={estilo.tituloProduto}>Antialérgicos</Text>
      <FlatList
            horizontal={true}
            data={ANTIALERGICOS}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (
              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />

      <Text style={estilo.tituloProduto}>Analgesicos</Text>
      <FlatList
            horizontal={true}
            data={ANALGESICOS}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />

      <Text style={estilo.tituloProduto}>Infantil</Text>
      <FlatList
            horizontal={true}
            data={INFANTIL}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />

      <Text style={estilo.tituloProduto}>Perfumes</Text>
      <FlatList
            horizontal={true}
            data={PERFUMES}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />
      
      <Text style={estilo.tituloProduto}>Cosméticos</Text>
      <FlatList
            horizontal={true}
            data={COSMETICOS}
            keyExtractor = {(item)=> item.id}
            renderItem = { ({item}) => (

              <Produtos
                  nome = {item.nome}
                  imagem = {item.imagem}
                  descricao = {item.descricao}
              />
            )}
      />
    </ScrollView>
   </View>
  );
}


const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tituloDiv:{
      color: '#FE2E2ECC',
      fontSize: 30,
      fontWeight: '700',
      marginTop: 45,
      marginBottom: 5,
      textAlign: 'center',
      fontFamily: 'Marvel-Bold',
      lineWeight: 36,
  },
    tituloProduto:{
      color: "rgba(254, 46, 46, 0.8)",
      lineWeight: 36,
      fontWeight: 'bold',
      fontSize: 30,
      marginLeft: 5,
      marginTop: 30,
    }
  });
  