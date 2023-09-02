import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  SafeAreaView,
} from 'react-native';

const Loged = ({Loged}) => {
  return (
    <SafeAreaView style={style.container}>
      <Modal visible={Loged} animationType="slide">
        <View style={style.Modal}>
          <Text style={style.title}>INICIO DE SESION</Text>
          <Text style={style.label}>Usuario</Text>
          <TextInput style={style.input} />
          <Text style={style.label}>Contraseña</Text>
          <TextInput style={style.input} />
          <Pressable style={style.btnRegistroUsuario} onpres>
            <Text style={style.txtBtnRegistro}>REGISTRARSE</Text>
          </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  Modal: {
    backgroundColor: '#0c1633',
    flex: 1,
    width: 50,
    height: 50,
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    color: '#fff',
  },
  label: {
    color: '#fff',
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
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
    marginTop: 15,
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

export default Loged;
