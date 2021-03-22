import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
 
} from "react-native";

  function StudentLogin({navigation}) {

  const [userName,setUserName]=useState('')  
  const [password,setPassword]=useState('')
  const [responsee,setResponse]=useState()
  const postData=()=>{
    fetch('http://192.168.10.7/backend/api/Values/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        UserName: userName,
        U_Password: password,
      }),
    }).then(response => response.json()) 
    .then(json => console.log(json));
      
   }

   const Login=()=>{
    fetch('http://192.168.10.7/backend/api/Values/Login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        UserName: userName,
        U_Password: password,
      }),
    }).then(response => response.json()) 
    .then(json => console.log(json));
      
   }
    return(
        <View style={{display:'flex',flex:1}}>
          <View style={styles.container}>

<KeyboardAvoidingView behavior='position' keyboardVerticalOffset={20}  style={styles.form}>
  <ScrollView>
 {<Image source = {require("../assets/index.png")}style = {{ width: 100, height: 100,display:'flex',marginLeft:100}}/> }
<View style={{display:'flex',marginBottom:20,alignItems:'center' }}>
  <Text style={{fontSize:34,color:'#fb5b5a',fontWeight:'600'}}>Student LogIn </Text>
  </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Name "
          placeholderTextColor="black"
          onChangeText={(userName) => setUserName(userName)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."s
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn} onPress={postData}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </ScrollView>
      </KeyboardAvoidingView >
    </View>
    <Button onPress={()=>navigation.navigate('query')} title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"/> 
    <TouchableOpacity  onPress={Login}>
        <Text >  working LOGIN  </Text>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  backgroundColor:'#fff',
    alignItems: "center",
    //justifyContent: "center",
    display:'flex',
    //flexDirection:'column',
    marginTop:90,
  },
  form:{
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
width:'90%',

justifyContent:'center',
borderWidth:1


  }, 
  inputView: {
  borderBottomWidth:1,
    width: "100%",
    height: 45,
    marginBottom: 50,
    alignItems: 'center',
    color:'black'
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "99%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fb5b5a",
    
  },
});
export default StudentLogin;