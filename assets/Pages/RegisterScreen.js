import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
export default function RegisterScreen() {
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')
  const [cpfField, setCpfField] = useState('')
  const handleRegisterButton = () => {
  if(passwordField != '' & cpfField != '' & emailField != ''){
    alert('Conta Registrada')
  } else{
    alert('Você esqueceu de preencher algum campo')
  }}
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../moda.png')}/>
        <Text style={styles.h1}>Bem-vindo(a)</Text>
          <Text style={styles.h1}>Não faça drama faça compra de roupas novas!</Text>
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>CPF</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu CPF' 
            placeholderTextColor='#d1d1d1'
            value={cpfField}
            onChangeText={t => setCpfField(t)}
            autoCapitalize='none'
          />
        </View>
        
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
        <TouchableOpacity style={styles.button} onPress={handleRegisterButton}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>

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
  button: {
    backgroundColor: 'black',
    width: '89%',
    padding: 12,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#DA70D6',
    fontSize: 14,
    
  },
  footerArea: {
    marginVertical: 32,
  },
  footerText: {
    fontSize: 14,
    color: '#363636',
  },
})