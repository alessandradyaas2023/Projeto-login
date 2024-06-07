import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function EnterScreen() {
  const navigator = useNavigation()

  // Função do Esqueci minha senha
  const handleForgotButton = () => {}

  // Função do Botão Entrar
  const handleLoginButton = () => {
    if(emailField != '' && passwordField != ''){
      navigator.navigate('EnterPage')
    } 
  }

  // Função do Cadastre-se
  const handleSignUpButton = () => {}

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.conteud}> 
          <Text style={styles.text}>Sua Conta foi logada com sucesso</Text>
        </View>
        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por alessandra</Text>
        </View>
      </View>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#DA70D6',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    alignItems: 'center'
  },
  conteud:{
    width: 200,
    height:150,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: '#fff',
    fontSize: 12,
    },
  footerArea: {
    marginTop: 130,
  },
  footerText: {
    fontSize: 14,
    color: '#363636',
  },
})