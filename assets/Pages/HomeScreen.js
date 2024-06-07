import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {
  const navigator = useNavigation()
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  // Função do Esqueci minha senha
  const handleForgotButton = () => {
    navigator.navigate('ForgotPage')
  }

  // Função do Botão Entrar
  const handleLoginButton = () => {
    setEmailField(passwordField)
    setPasswordField(emailField)
    if(emailField != '' && passwordField != ''){
      navigator.navigate('EnterPage')
    } else{
      alert('Você esqueceu de preencher algum campo')
    }
  }

  // Função do Cadastre-se
  const handleSignUpButton = () => {
    navigator.navigate('RegisterPage')
  }

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../moda.png')}/>
        <Text style={styles.h1}>Bem-vindo(a)</Text>
          <Text style={styles.h1}>Não faça drama faça compra de roupas novas!</Text>
       
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu email'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapitalize='none'
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={passwordField}
            onChangeText={t => setPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
            <Text style={styles.forgotBtnText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
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
  logo: {
    width: 400,
    height: 220,
   
  },
  h1: {
    color: '#363636',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  
  inputArea: {
    width: '100%',
    paddingTop: 20,
  },
  inputLabel: {
    color: '#363636',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
    marginLeft:10
  },
  inputField: {
    color: '#000000',
    borderWidth: 3,
    borderRadius: 13,
    borderColor: '#363636',
    fontSize: 15,
    padding: 19,
   
    
  
  },
  aditionals: {
    width: '100%',
  },
  forgotBtnArea: {
    paddingVertical: 30,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#363636'
  },
  button: {
    backgroundColor: 'black',
    width: '89%',
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#DA70D6',
    fontSize: 14,
    
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#363636',
    marginLeft: 5,
  },
  footerArea: {
    marginVertical: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#363636',
  },
})