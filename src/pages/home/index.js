import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
 return (
   <View style={style.container}>

    <Text style={style.titulo}>APP FARMÁCIA</Text>

    <TouchableOpacity 
    style={style.btn}
    onPress={() => navigation.navigate('Produto')}>
        <Text style={style.textBtn}>Entre no app!</Text>
    </TouchableOpacity>

   </View>
  );
}
const style = StyleSheet.create({
container:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
},
titulo:{
    fontSize: 50,
    marginTop: 95,
    fontWeight: 'bold',
    color: '#DF0101',
    width: '80%',
    textAlign: 'center',
},
btn:{
    padding: 35,
    backgroundColor: '#DF0101',
    borderRadius: 100,
    marginTop: 170,
},
textBtn:{
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
}


})