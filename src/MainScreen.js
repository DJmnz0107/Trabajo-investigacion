// components/MainScreen.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const MainScreen = ({ onNavigateToStudent }) => {
  const openGitHub = () => {
    Linking.openURL('https://github.com/DJmnz0107/Trabajo-investigacion');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Sistema de Estudiantes</Text>
          <Text style={styles.headerSubtitle}>
            Aplicación para gestionar información estudiantil
          </Text>
        </View>

        {/* Módulo principal */}
        <View style={styles.moduleCard}>
          <View style={styles.moduleHeader}>
            <View style={styles.moduleIcon}>
              <Text style={styles.iconText}>👤</Text>
            </View>
            <Text style={styles.moduleName}>Módulo de Estudiantes</Text>
            <Text style={styles.moduleDescription}>
              Visualiza y gestiona la información de los estudiantes registrados
            </Text>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={onNavigateToStudent}
          >
            <Text style={styles.primaryButtonText}>
              Ver Información del Estudiante
            </Text>
          </TouchableOpacity>
        </View>

        {/* Información del repositorio */}
        <View style={styles.repositoryCard}>
          <View style={styles.repositoryHeader}>
            <View style={styles.githubIcon}>
              <Text style={styles.iconText}>📁</Text>
            </View>
            <Text style={styles.repositoryTitle}>Código Fuente</Text>
            <Text style={styles.repositorySubtitle}>Disponible en GitHub</Text>
          </View>
          
          <TouchableOpacity
            style={styles.githubButton}
            onPress={openGitHub}
          >
            <Text style={styles.githubButtonText}>Ver Repositorio</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  moduleCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },
  moduleHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  moduleIcon: {
    marginBottom: 12,
  },
  iconText: {
    fontSize: 32,
  },
  moduleName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  repositoryCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 24,
  },
  repositoryHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  githubIcon: {
    marginBottom: 8,
  },
  repositoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 4,
  },
  repositorySubtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  githubButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  githubButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default MainScreen;