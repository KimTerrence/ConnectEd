import { StyleSheet, Text, View } from "react-native";

import Input from '../components/inputBox'


export default function Register(){
    return(
        <>
        <View style={styles.con}>
            <View style={styles.form}>
                <Text>Register</Text>
                <Input />   
            </View>
            
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    con:{
        flex: 1,
        alignItems: "center",
        justifyContent : "center",
    },
    form:{
        width: "100%",height: "50%",
        alignItems : "center",
        justifyContent:"center",
        backgroundColor: "#a41212"
    }
})