import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
export default function ForgotScreen() {
  const [passwordField, setPasswordField] = useState('')
  const [confirmPasswordField, setConfirmPasswordField] = useState('')
  
  const handleResetPassword = () => {
    setPasswordField(confirmPasswordField)
    setConfirmPasswordField(passwordField)

    if(passwordField == confirmPasswordField){
      alert('Senha redefinida com sucesso')
    } else {
      alert('As senhas não estçao iguais')
    }
  }
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../moda.png')}/>
        <Text style={styles.h1}>Bem-vindo(a)</Text>
          <Text style={styles.h1}>Não faça drama faça compra de roupas novas!</Text>
       
        
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

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Redigite sua Senha</Text>
          <TextInput 
            style={styles.inputField} 
            placeholder='**********' 
            placeholderTextColor='#d1d1d1'
            value={confirmPasswordField}
            onChangeText={t => setConfirmPasswordField(t)}
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Redefinir senha</Text>
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