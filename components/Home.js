import React,{useState} from 'react'
import {StyleSheet,
    Text,
    View,
    Pressable,
    Modal,
    TextInput,
    SafeAreaView,
    Alert,} from 'react-native';
import RegisterTime from './RegisterTime';
import ConsultTime from './ConsultTime';
import Novedades from './Novedades';
const Home=({viewHome,setViewHome})=>{
    const [registerTime,setRegisterTime]=useState(false)
    const [consultTime,setConsultTime]=useState(false)
    const [novedades,setNovedades]=useState(false)
    const [newRegistro,setNewRegistro]=useState([])
    return(
        <SafeAreaView>
            <Modal
                visible={viewHome}
                animationType='slide'
            >
                <View style={style.Modal}>
                    <Pressable
                        onPress={()=>setViewHome(false)}
                      >
                      <Text style={style.txtReturn}> =Cerrar Sesion </Text>
                    </Pressable>
                    <Pressable
                    style={style.btnRegistroUsuario}
                    onPress={() => setRegisterTime(true)}>
                    <Text style={style.txtBtnRegistro}>REGISTRAR HORAS</Text>
                    </Pressable>
                    <Pressable
                    style={style.btnRegistroUsuario}
                    onPress={() => setConsultTime(true)}>
                    <Text style={style.txtBtnRegistro}>CONSULTAR</Text>
                    </Pressable>
                    <Pressable
                    style={style.btnRegistroUsuario}
                    onPress={() => setNovedades(true)}>
                    <Text style={style.txtBtnRegistro}>NOVEDADES</Text>
                    </Pressable>
                </View>
            </Modal>
            <RegisterTime
                registerTime={registerTime}
                setRegisterTime={setRegisterTime}
                newRegistro={newRegistro}
                setNewRegistro={setNewRegistro}
            />
            <ConsultTime
                consultTime={consultTime}
                setConsultTime={setConsultTime}
                newRegistro={newRegistro}
            />
            <Novedades
                novedades={novedades}
                setNovedades={setNovedades}
            />
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    txtReturn:{
      textAlign: 'left',
      margin:10,
      color: '#9c9c9c',
      fontSize: 17,
      fontWeight: 'bold',
      backgroundColor: '#0c1633',
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
      padding: 20,
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
  export default Home;