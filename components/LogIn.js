import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';

import Home from './Home';
const Login = ({viewLogin, setViewLogin}) => {
  const [viewHome,setViewHome]=useState(false)
  const [Usuario, setUsuario] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const validacion=()=> {
    if (Usuario && Contraseña) {
      setViewHome(true)
      setUsuario('')
      setContraseña('')
    }else{
      Alert.alert('Todos los campos son obligatorios')
    }
  }
  return (
    <SafeAreaView>
      <Modal visible={viewLogin} animationType="slide">
        <View style={style.Modal}>
          <Pressable
              onPress={() => setViewLogin(false)}
            >
              <Text style={style.txtReturn}> =Regresar </Text>
            </Pressable>
          <Text style={style.title}>Iniciar Sesion</Text>
          <Text style={style.label}>Usuario</Text>
          <TextInput
            placeholder='Usuario'
            value={Usuario}
            onChangeText={(Usuario)=>setUsuario(Usuario)}
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
            onPress={validacion}
          >
            <Text style={style.txtBtnRegistro}>Iniciar Sesion</Text>
          </Pressable>
        </View>
      </Modal>
      <Home
        viewHome={viewHome}
        setViewHome={setViewHome}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1633',
  },
  Modal: {
    backgroundColor: '#0c1633',
    flex: 1,
  },
  txtReturn:{
    textAlign: 'left',
    margin:10,
    color: '#9c9c9c',
    fontSize: 17,
    fontWeight: 'bold',
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

export default Login;
