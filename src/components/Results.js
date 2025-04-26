import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import CuteButton from './CuteButton';
import { careerPatterns } from './CareerSummary';

const Results = ({ result, isPremium, onUpgrade, onRetake, onViewSummary }) => {
  // Get the top career match
  const topCareer = result[0];

  // Find the matching career pattern
  const careerPattern = Object.values(careerPatterns).find(
    pattern => pattern.title === topCareer.title
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.resultContainer}>
          <Text style={styles.title}>Your Career Match</Text>
          
          {/* Top Recommended Career */}
          <View style={styles.topCareerContainer}>
            <Image 
              source={careerPattern?.image || require('../assets/images/career-icon.jpg')}
              style={styles.careerImage}
              resizeMode="contain"
            />
            <Text style={styles.careerTitle}>{topCareer.title}</Text>
            <Text style={styles.careerDescription}>{topCareer.description}</Text>
          </View>

          {/* Career Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.sectionTitle}>Recommended Careers</Text>
            {careerPattern?.examples.map((example, index) => (
              <Text key={index} style={styles.careerExample}>
                • {example}
              </Text>
            ))}
          </View>
          
          {!isPremium && (
            <View style={styles.premiumContainer}>
              <Text style={styles.premiumText}>
                Unlock detailed analysis and career path with Premium!
              </Text>
              <CuteButton 
                text="Upgrade to Premium" 
                onPress={onUpgrade}
                style={styles.upgradeButton}
              />
            </View>
          )}
        </View>
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        <CuteButton 
          text="View Career Patterns" 
          onPress={onViewSummary}
          style={styles.summaryButton}
        />
        <CuteButton 
          text="Retake Questionnaire" 
          onPress={onRetake}
          style={styles.retakeButton}
          isSecondary
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF85A2',
  },
  topCareerContainer: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  careerImage: {
    width: 200,
    height: 200,
    marginBottom: 15,
    alignSelf: 'center',
  },
  careerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  careerDescription: {
    fontSize: 15,
    textAlign: 'center',
    color: '#666',
    marginHorizontal: 20,
    marginBottom: 15,
    lineHeight: 22,
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: '#F9F9F9',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 15,
  },
  careerExample: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 22,
  },
  premiumContainer: {
    backgroundColor: '#FFF0F5',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
  },
  premiumText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#555',
  },
  upgradeButton: {
    marginTop: 5,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  summaryButton: {
    marginBottom: 10,
  },
  retakeButton: {
    marginBottom: 10,
  },
});

export default Results;