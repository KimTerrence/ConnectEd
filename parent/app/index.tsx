import { router } from "expo-router";
import { Text, View, StyleSheet, Button, TouchableOpacity} from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>ConnectEd Landing Screen</Text>
      <TouchableOpacity onPress={() => {router.replace("/register")}}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  
})