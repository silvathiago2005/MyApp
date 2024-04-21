// import 'react-native-gesture-handler'
import React from 'react';

import { Container, Titulo } from './src/MainStyles';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes/index';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';

console.disableYellowBox = true;

export default function App(){
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle='light-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}


