import React from 'react';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign  } from '@expo/vector-icons';


export default function DescProduto() {

  const btn = () => {
    
  }
 return (
   <View style={estilo.container}>

    <View style={estilo.prodEstilo}>  
      <View style={estilo.imgContainer}>
        <Image
          style={estilo.img}
          source={{uri: 'https://saude.abril.com.br/wp-content/uploads/2017/11/remc3a9dio01-1.jpg'}}
        />        
        <Text style={estilo.nomeProduto}>Nome do Produto aqui</Text>
        <Text style={estilo.precoProduto}>R$ 50,80</Text>
      </View>

      <View style={estilo.infosContainer}>
        <View style={estilo.infos}>
          <FontAwesome5 name="pills" size={26} color="white" />
          <Text style={estilo.textoinfos}>16 Comprimidos</Text>
        </View>
        <View style={estilo.infos}>
          <AntDesign name="infocirlceo" size={26} color="white" style={{marginTop: 15}} />
          <Text style={estilo.textoinfos}>Medicamento Genérico</Text>
        </View>
        <View style={estilo.infos}>
         <AntDesign name="exclamationcircleo" size={26} color="white"  style={{marginTop: 15}} />
          <Text style={estilo.textoinfos}>Receitamento não obrigatório</Text>
        </View>
      </View>
    </View>
    <View style={estilo.adicionar}>
        <TouchableOpacity
          onPress={btn}
          style={estilo.btn}>
            <AntDesign name="left" size={55} color="white" style={{marginTop: 10}} />
        </TouchableOpacity>

        <Text style={estilo.qtd}>
          0
        </Text>

        <TouchableOpacity
          onPress={btn}
          style={estilo.btn}>
            <AntDesign name="right" size={55} color="white" style={{marginTop: 10}} />
        </TouchableOpacity>
      </View>
   </View>
  );
}
const estilo = StyleSheet.create({
container:{
  flex: 1,
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#rgba(223, 1, 1, 0.65)',
},
prodEstilo:{
  alignItems: 'center',
  width: '100%',
  height: '80%',
},
infosContainer:{
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 135,
},
infos:{
  flexDirection: 'row',
  alignItems: 'center', 
  width: '90%', 
  marginLeft: 10,
},
textoinfos:{
  fontSize: 17,
  marginLeft: 6,
  marginTop: 10,
  color: 'white'
},
imgContainer:{
  width: '100%',
  height: '50%',
},
img:{
  width: '100%',
  height: '100%',
},
precoProduto:{
  fontSize: 17,
  color: 'darkgreen',
  fontWeight: '700',
  marginLeft: 10,
},
nomeProduto:{
  fontSize: 25,
  fontWeight: '900',
  marginLeft: 10,
  marginTop: 15,
  color: 'white'
},
adicionar:{
  width:  '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignContent: 'center',
  marginTop: 80,
  backgroundColor: '#FE2E2ECC'
},
qtd:{
  fontSize: 50,
  color: 'white',
  alignSelf: 'center',
  textAlign: 'center',
},
btn:{
  width: '40%',
  // backgroundColor: '#rgba(223, 1, 1, 0.65)',
  alignItems: 'center',
  height: 80,
  borderRightWidth: 1, 
  borderLeftWidth: 1,
}
})