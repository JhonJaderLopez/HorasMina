import React from 'react'
import {Text,View, StyleSheet,Pressable,Alert} from 'react-native'

const NewRegistro=({item})=>{
    const {usuario,email, date} = item
    const FormateoFecha = date=>{
        const nuevaFecha = new Date(date)
        const opciones ={
            weekday:'long',
            year:'numeric',
            month:'long',
            day:'numeric',
            hour:'numeric',
            minute: 'numeric',
            hourCycle:'h12'
        }
        return nuevaFecha.toLocaleDateString('es-ES', opciones)
    }
    return(
        <View style={style.container}>
            <Text style={style.Title}>USUARIO: </Text> 
            <Text style={style.Text}>{usuario}</Text>
            <Text style={style.Text}>{email}</Text>
            <Text style={style.Date}>{FormateoFecha(date)}</Text>
            <View style={style.contenedor}>
                <Pressable 
                    style={style.btnRegistroUsuario} 
                    onPress={()=>Alert.alert("BOTON NO FUNCIONAL")}>
                    <Text style={style.btnEditar}>Editar</Text>
                </Pressable>
                <Pressable 
                    style={style.btnEliminar} 
                    onPress={()=>Alert.alert("BOTON NO FUNCIONAL")}>
                    <Text style={style.txtBtnRegistro}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const style =StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        borderRadius:15,
        padding: 22,
        marginLeft:10,
        marginRight:10,
        borderBottomColor:'#9c9c9c',
        borderBottomWidth:2,
    },
    Title:{
        color:'#2BE7F3',
        fontWeight:'700',
        marginBottom:12,
    },
    Text:{
        color:'#000000',
        fontWeight:'700',
        marginBottom:10,
    },
    Date:{
        color:'#000000'
    },
    btnEliminar: {
        backgroundColor: '#FF0000',
        padding: 8,
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 10,
        marginLeft:5,
        paddingHorizontal:20,
        fontWeight:'bold',
      },
      btnEditar:{
        backgroundColor: '#85c734',
        padding: 8,
        fontWeight:'bold',
        marginTop: 15,
        marginBottom: 5,
        borderRadius: 10,
        paddingHorizontal:20,
      },
      txtBtnRegistro:{
        color:'#000000',
        textAlign:'center'
      },
      contenedor:{
        flexDirection:'row',
      }
})

export default NewRegistro