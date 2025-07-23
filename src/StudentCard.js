// components/StudentCard.js
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const StudentCard = ({ name, age, image, onBack }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        {/* Imagen del estudiante */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80'
            }}
            style={styles.studentImage}
            resizeMode="cover"
          />
          {/* Botón de regreso superpuesto */}
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </View>

        {/* Información del estudiante */}
        <View style={styles.cardContent}>
          <View style={styles.studentInfo}>
            <Text style={styles.label}>Nombre completo:</Text>
            <Text style={styles.studentName}>{name}</Text>
          </View>
          
          <View style={styles.studentInfo}>
            <Text style={styles.label}>Edad:</Text>
            <Text style={styles.studentAge}>{age} años</Text>
          </View>

          <View style={styles.divider} />
          
          <Text style={styles.subtitle}>Información del estudiante</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 200,
  },
  studentImage: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
  },
  cardContent: {
    padding: 24,
  },
  studentInfo: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
    fontWeight: '500',
  },
  studentName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },
  studentAge: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default StudentCard;