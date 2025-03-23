import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import { router } from "expo-router";


//-----components
import Input from "@/components/Input";


export default function Index() {


  //-----state
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");


  //-----handle login button
  const handleLogin = () => {
    if(uname && password == "admin"){
      Alert.alert("","welcome")
      router.replace('/home')
    }else{
      Alert.alert("Warning!", "Invalid Crendential")
    }
  };


  return (
    <View style={styles.con}>
      <Text style={styles.title}>ConnectEd</Text>
      <View style={styles.form_con}>
        <Input placeholder="Username" onChangeText={setUname} value={uname} />
        <Input placeholder="Password" onChangeText={setPassword} value={password} />
        <TouchableOpacity style={styles.login_btn} onPress={handleLogin}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  con:{
    height: "100%",
    backgroundColor: "#E8E8E8",
    alignItems:"center",
    justifyContent:"center",
    gap:50,
  },
  title:{
    color:"#B51717",
    fontSize:45,
    fontFamily:"monospace",
    fontWeight:900
  },
  form_con:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    gap:10,
  },

  login_btn:{
    backgroundColor:"#B51717",
    width:"90%",
    alignItems:"center",
    justifyContent:"center",
    height:50,
    borderRadius:50,
  }
})
