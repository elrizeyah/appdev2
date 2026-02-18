import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Login Image */}
      <Image
        source={require('../assets/images/login.png')}
        style={styles.image}
      />

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
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
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4e9bde',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    color: '#4e9bde',
    textAlign: 'center',
    marginTop: 10,
  },
});
