import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileDemo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌸 My Profile 🌸</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Course & Section:</Text>
        <Text style={styles.info}>
          Bachelor of Science in Information Systems, 3rd Year – Section A
        </Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>Ellissea Montes</Text>

        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>24</Text>

        <Text style={styles.label}>Favorite Hobby:</Text>
        <Text style={styles.info}>Singing, Dancing, and Painting</Text>

        <Text style={styles.label}>3 Pet Peeves in Class:</Text>
        <Text style={styles.info}>1. Students who think highly of themselves</Text>
        <Text style={styles.info}>
          2. Not working as a team; working alone as if others don’t exist
        </Text>
        <Text style={styles.info}>3. Not putting in genuine effort</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff0f5', // soft pastel pink
    justifyContent: 'center',   // centers the content vertically
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',       // only the title is centered
    color: '#ff69b4',          // cute pink
  },
  infoBox: {
    padding: 20,
    backgroundColor: '#fff8dc', // soft cream background
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3, // Android shadow
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 16,
    color: '#ff1493', // dark pink for labels
  },
  info: {
    fontSize: 15,
    marginTop: 3,
    color: '#333',    // professional, easy-to-read text
  },
});
