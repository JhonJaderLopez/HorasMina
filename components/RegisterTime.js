import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker'
const RegisterTime = ({registerTime,setRegisterTime,setNewRegistro,newRegistro}) => {
  const [usuario,setUsuario] = useState('')
  const [email,setEmail]= useState('')
  const [date, setDate] = useState(new Date());

    const CamposLlenos=()=>{
        if(usuario && email && date){
            Alert.alert("Registro exitoso",
            "Si desea consultar los registros ingrese al modulo de 'CONSULTAR'")
            const Registro = {
                id: Date.now(),
                usuario,
                email,
                date
            }
            setNewRegistro([...newRegistro,Registro])
            setRegisterTime(!registerTime)
            setUsuario('')
            setEmail('')
            setDate(new Date())
        }else{
            Alert.alert("Todos los campos son requeridos")
        }
        

    }

  return (
    <SafeAreaView>
      <Modal
        visible={registerTime}
        animationType='slide'
      >
        <View style={style.Modal}>
          <Pressable
            onPress={() => setRegisterTime(false)}
          >
            <Text style={style.txtReturn}> =Regresar </Text>
          </Pressable>
        <Text style={style.label}>Usuario</Text>
          <TextInput
            placeholder='Usuario'
            value={usuario}
            onChangeText={(usuario)=>setUsuario(usuario)}
            style={style.input}
            placeholderTextColor='#9c9c9c'
          />

        <Text style={style.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(email)=>setEmail(email)}
            style={style.input}
            placeholder='Email'
            placeholderTextColor='#9c9c9c'
          />

          <Text style={style.label}>Hora de inicio</Text>
          <View style={style.DatePicker}>
            
            
            <DatePicker
                date={date}
                onDateChange={(date)=>setDate(date)}
                textColor='#2BE7F3'
                mode='datetime'
            />
            <Text style={style.label}>{date ? date.toDateString() : "Select date..."}</Text>
          </View>
          
          <View >
            <Pressable
              style={style.btnRegistroUsuario}
              onPress={CamposLlenos}>
              <Text style={style.txtBtnRegistro}>GUARDAR</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
    </SafeAreaView>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1633',
  },
  txtReturn:{
    textAlign: 'left',
    margin:10,
    color: '#9c9c9c',
    fontSize: 17,
    fontWeight: 'bold',
  },
  Modal: {
    backgroundColor: '#0c1633',
    flex: 1,
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
  DatePicker:{
    margin:30,
  }
});

export default RegisterTime;
