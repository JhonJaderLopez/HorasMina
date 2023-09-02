import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import Login from './components/LogIn';
import SignUp from './components/SignUp';
const App = () => {
  const [viewSignUp, setViewSignUp] = useState(false);
  const [viewLogin, setViewLogin] = useState(false);
  return (
    <SafeAreaView style={style.container}>

      <View style={style.outLogo}>
        
        <Image
          style={style.logo}
          source={require("./src/imgs/minero.png")}
        />
      </View>
      <View>
        <Pressable
          style={style.btnNuevaCita}
          onPress={() => setViewLogin(true)}>
          <Text style={style.btnTextoNuevaCita}>INICIAR SESION</Text>
        </Pressable>
        <Login 
          viewLogin={viewLogin} 
          setViewLogin={setViewLogin}
        />
        <Pressable
          style={style.btnNuevaCita}
          onPress={() => setViewSignUp(true)}>
          <Text style={style.btnTextoNuevaCita}>REGISTRAR USUARIO</Text>
        </Pressable>
        <SignUp viewSignUp={viewSignUp} setViewSignUp={setViewSignUp} />    
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent:'center',
    flex: 1,
    backgroundColor: '#0c1633',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
    color: '#ffffff',
  },
  btnNuevaCita: {
    backgroundColor: '#2BE7F3',
    padding: 10,
    marginLeft: 90,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 90,
    borderRadius: 20,
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#22142b',
    fontSize: 15,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
  },
  outLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
  },
});

export default App;
