import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Signup() {
  return (
    <View style={styles.container}>
      {/* Screen Title */}
      <Text style={styles.title}>Create an Account</Text>

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

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <TextInput
          placeholder="Email"
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

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="person-add-outline" size={20} color="#fff" />
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
    marginLeft: 5,                     // spacing between icon and text
  },
});
