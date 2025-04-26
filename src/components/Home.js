import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CuteButton from './CuteButton';

const Home = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Career Path Finder</Text>
        <Text style={styles.subtitle}>Discover your perfect career match!</Text>
        
        <Image 
          source={require('../assets/images/career-icon.jpg')} 
          style={styles.image}
        />
        
        <Text style={styles.description}>
          Take our comprehensive questionnaire to find the career path that best matches your interests, skills, and personality.
        </Text>
        
        <CuteButton 
          text="Start Questionnaire" 
          onPress={onStart}
          style={styles.startButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF85A2',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  startButton: {
    width: '80%',
  },
});

export default Home; 