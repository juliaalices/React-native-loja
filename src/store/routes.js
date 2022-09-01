import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import Home from '../pages/home';
import Produto from '../pages/produto';
import About from '../pages/about';
import Contato from '../pages/contato';
import DescProduto from '../components/descProduto';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function Tabs_({navigation}){
    return(
        <Tabs.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                tabBarInactiveTintColor: '#DCDCDC',
                tabBarActiveTintColor: '#38B6FF',
                tabBarStyle:{
                    paddingBottom:5,
                    paddingTop:5,
                    backgroundColor:'#DF0101',
                    borderTopColor: 'transparent'
                },
                headerTintColor: '#fff',
                headerStyle:{
                    backgroundColor: '#DCDCDC',
                    borderBottomColor: 'transparent',
            },
        }}
        >
            
            <Tabs.Screen 
            name='Produto' 
            component={Produto}
            options={{
                tabBarIcon:({size,color}) => (
                    <MaterialCommunityIcons name="emoticon-excited" size={size} color={color} />
                ),
                headerShown:false
            }}
            />
            <Tabs.Screen 
            name='About' 
            component={About}
            options={{
                tabBarIcon:({size,color}) => (
                    <Entypo name="info" size={size} color={color} /> 
                   ),
                   headerShown: false
            }}
            />
            <Tabs.Screen 
            name='Contato' 
            component={Contato}
            options={{
                tabBarIcon:({size,color}) => (
                    <Entypo name="phone" size={size} color={color} />
                   ),
                   headerShown: false
            }}
            />
        </Tabs.Navigator>
    )
}
export default function Routes({navigation}) {
 return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
                headerShown: false,
                title:'Bem Vindo'
            }}
            />
            <Stack.Screen 
            name="Produto" 
            component={Tabs_} 
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen 
            name="DescProduto" 
            component={DescProduto} 
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
