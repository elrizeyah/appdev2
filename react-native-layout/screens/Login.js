import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Login Image */}
      <Image
        source={require('../assets/images/login.png')}
        style={styles.image}
      />

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          placeholder="Username"
          style={styles.input}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="log-in-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Link */}
      <TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    flexDirection: 'row',             // icon + text horizontally
    backgroundColor: '#4e9bde',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,                     // space between icon and text
  },
  signupText: {
    color: '#4e9bde',
    textAlign: 'center',
    marginTop: 10,
  },
});
