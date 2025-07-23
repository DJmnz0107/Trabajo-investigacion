// App.js
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import MainScreen from './src/MainScreen';
import StudentScreen from './src/StudentCard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('main');

  const navigateToStudent = () => {
    setCurrentScreen('student');
  };

  const navigateToMain = () => {
    setCurrentScreen('main');
  };

  if (currentScreen === 'student') {
    return <StudentScreen onBack={navigateToMain} />;
  }

  return <MainScreen onNavigateToStudent={navigateToStudent} />;
}

const styles = StyleSheet.create({
  // Los estilos están en cada componente individual
});