import { TextInput } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const SignIn = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    <TextInput style={styles.JuDqeVeD} placeholder="test" defaultValue="1"></TextInput></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  JuDqeVeD: {
    backgroundColor: "#672323",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    top: 0,
    left: 0
  }
});
export default SignIn;