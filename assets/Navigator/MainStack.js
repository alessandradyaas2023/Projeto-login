import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// telas do aplicativo
import HomeScreen from '../Pages/HomeScreen'
import EnterScreen from '../Pages/EnterScreen'
import ForgotScreen from '../Pages/ForgotScreen'
import RegisterScreen from '../Pages/RegisterScreen'
const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Moda Mulher',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#DA70D6',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold'
        },
      }}/>
      <MainStack.Screen name='EnterPage' component={EnterScreen} options={{
        title: 'Moda Mulher',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#DA70D6',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold'
        },
        
      }}/>
       <MainStack.Screen name='ForgotPage' component={ForgotScreen} options={{
        title: 'Redefinir Senha',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#DA70D6',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold'
        },
      }}/>
      <MainStack.Screen name='RegisterPage' component={RegisterScreen} options={{
        title: 'Cadastre-se',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#DA70D6',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 20,
          fontWeight: 'bold'
        },
      }}/>
  </MainStack.Navigator>   
  )
}