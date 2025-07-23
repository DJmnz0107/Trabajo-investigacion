// components/StudentScreen.js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StudentCard from './StudentCard';

const StudentScreen = ({ onBack }) => {
  // Datos del estudiante
  const studentData = {
    name: "Ana María González",
    age: 22,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <StudentCard
        name={studentData.name}
        age={studentData.age}
        image={studentData.image}
        onBack={onBack}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default StudentScreen;