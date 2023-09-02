import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  SafeAreaView,
  Render,
  ScrollView,Alert
} from 'react-native';

const SignUp = ({viewSignUp, setViewSignUp}) => {
  
  const [Usuario,setUsuario]=useState('')
  const [Telefono,setTelefono]=useState('')
  const [Email,setEmail]=useState('')
  const [Contraseña,setContraseña]=useState('')
  const CompleteFields=()=>{
    if(Telefono && Email && Usuario && Contraseña){
      setViewSignUp(false)
      Alert.alert('Registro Exitoso')
      setUsuario('')
      setEmail('')
      setTelefono('')
      setContraseña('')
    }else{
      Alert.alert('Todos los campos son obligatorios')
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Modal visible={viewSignUp} animationType="slide">
          <View style={style.Modal}>
            <Pressable
              onPress={() => setViewSignUp(false)}
              >
              <Text style={style.txtReturn}> =Regresar </Text>
            </Pressable>
            <Text style={style.title}>REGISTRO DE USUARIO</Text>
            <Text style={style.label}>Usuario</Text>
            <TextInput 
              placeholder='Usuario'
              value={Usuario}
              onChangeText={(Usuario)=>setUsuario(Usuario)}
              style={style.input} 
              placeholderTextColor='#9c9c9c'
            />
            <Text style={style.label}>Telefono</Text>
            <TextInput 
              placeholder='Telefono'
              value={Telefono}
              onChangeText={(Telefono)=>setTelefono(Telefono)}
              style={style.input} 
              placeholderTextColor='#9c9c9c'
              keyboardType='numeric'
            />
            <Text style={style.label}>Email</Text>
            <TextInput 
              placeholder='Email'
              value={Email}
              onChangeText={(Email)=>setEmail(Email)}
              style={style.input} 
              placeholderTextColor='#9c9c9c'
            />
            <Text style={style.label}>Contraseña</Text>
            <TextInput  
              placeholder='Contraseña'
              secureTextEntry={true}
              value={Contraseña}
              onChangeText={(Contraseña)=>setContraseña(Contraseña)}
              style={style.input} 
              placeholderTextColor='#9c9c9c'
            />
            <Pressable
              style={style.btnRegistroUsuario}
              onPress={CompleteFields}>
              <Text style={style.txtBtnRegistro}>REGISTRARSE</Text>
            </Pressable>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Modal: {
    backgroundColor: '#0c1633',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom:40,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2BE7F3',
  },
  label: {
    color: '#fff',
    marginTop: 15,
    marginLeft:30,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
  },
  txtReturn:{
    textAlign: 'left',
    margin:10,
    color: '#9c9c9c',
    fontSize: 17,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    color: '#22142b',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 30,
  },
  btnRegistroUsuario: {
    backgroundColor: '#2BE7F3',
    padding: 10,
    marginLeft: 90,
    marginTop: 30,
    marginBottom: 15,
    marginRight: 90,
    borderRadius: 20,
  },
  txtBtnRegistro: {
    textAlign: 'center',
    color: '#22142b',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SignUp;
