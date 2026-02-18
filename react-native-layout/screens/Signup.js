import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Signup() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      {/* Username Input */}
      <TextInput
        placeholder="Username"
        style={styles.input}
      />

      {/* Email Input */}
      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
});
