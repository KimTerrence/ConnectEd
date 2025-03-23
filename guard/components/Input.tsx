
import { StyleSheet, TextInput } from "react-native";
 
interface InputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
  }

 export default function Input({placeholder, value, onChangeText}: InputProps){
    return(
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={styles.tbx} autoCapitalize="none"/>
    )
 }

const styles = StyleSheet.create({
    tbx:{   
        width:"90%",
        backgroundColor:"#FFFFFF",
        borderRadius:50,
        paddingLeft:15,
        height:50,
    }
})