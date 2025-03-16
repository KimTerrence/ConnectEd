import { TextInput, StyleSheet } from "react-native";


export default function InputBox(){
    return(
        <>
            <TextInput style={styles.tbx}>

            </TextInput>
        </>
    )
}

const styles = StyleSheet.create({
    tbx:{
        backgroundColor: "gray",
        width: "85%",
        borderRadius: 50,
    }
})