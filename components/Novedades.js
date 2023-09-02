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
  FlatList,
} from 'react-native';
const Novedades=({novedades,setNovedades})=>{
    
    return(
    <SafeAreaView>
      <Modal visible={novedades} animationType="slide">
        <View style={style.Modal}>
          <Pressable
              onPress={() => setNovedades(false)}
            >
              <Text style={style.txtReturn}> =Regresar </Text>
            </Pressable>
          <Text style={style.title}>NOVEDADES</Text>
          <Pressable
              style={style.btnRegistroUsuario}
              onPress={()=>Alert.alert("BOTON NO FUNCIONAL")}>
              <Text style={style.txtBtnRegistro}>CREAR NOVEDAD</Text>
            </Pressable>
        </View>
      </Modal>
    </SafeAreaView>
    )
}

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
    txtNotRegister:{
        alignContent:'center',
        alignItems:'center',
    }
  });

export default Novedades