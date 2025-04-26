import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import CuteButton from './CuteButton';

export const careerPatterns = {
  technical: {
    image: require('../assets/images/technical-icon.webp'),
    title: 'Technical Careers',
    description: 'Careers in technology, engineering, and science',
    pattern: [
      'Math/Science',
      'Independently',
      'Structured and organized',
      'Analyze and solve systematically',
      'Solving complex problems',
      'Written communication',
      'Technical innovation',
      'Analyze and plan',
      'Theoretical knowledge',
      'Professional expertise'
    ],
    examples: ['Software Engineer', 'Data Scientist', 'Research Scientist', 'Systems Analyst']
  },
  creative: {
    image: require('../assets/images/creative-icon.jpg'),
    title: 'Creative Careers',
    description: 'Careers in arts, design, and creative fields',
    pattern: [
      'Arts/Literature',
      'Creative freedom',
      'Creative and flexible',
      'Think outside the box',
      'Creating something new',
      'Visual communication',
      'Artistic expression',
      'Express creatively',
      'Creative exploration',
      'Creative fulfillment'
    ],
    examples: ['Graphic Designer', 'Art Director', 'Content Creator', 'UX Designer']
  },
  social: {
    image: require('../assets/images/social-icon.jpg'),
    title: 'Social Impact Careers',
    description: 'Careers focused on helping others and social change',
    pattern: [
      'Social Sciences',
      'In a team',
      'Dynamic and fast-paced',
      'Collaborate with others',
      'Helping others',
      'Verbal communication',
      'Social change',
      'Seek support',
      'Practical experience',
      'Social impact'
    ],
    examples: ['Social Worker', 'Counselor', 'Non-profit Manager', 'Community Organizer']
  },
  physical: {
    image: require('../assets/images/physical-icon.webp'),
    title: 'Physical/Active Careers',
    description: 'Careers involving physical activity and hands-on work',
    pattern: [
      'Physical Activities',
      'Leading others',
      'Outdoor and active',
      'Take immediate action',
      'Achieving goals',
      'Hands-on demonstration',
      'Physical transformation',
      'Physical activity',
      'Physical practice',
      'Physical achievement'
    ],
    examples: ['Personal Trainer', 'Physical Therapist', 'Sports Coach', 'Fitness Instructor']
  },
  business: {
    image: require('../assets/images/business-icon.jpg'),
    title: 'Business/Management Careers',
    description: 'Careers in business, management, and leadership',
    pattern: [
      'Math/Science',
      'Leading others',
      'Structured and organized',
      'Analyze and solve systematically',
      'Achieving goals',
      'Verbal communication',
      'Technical innovation',
      'Analyze and plan',
      'Practical experience',
      'Professional expertise'
    ],
    examples: ['Business Manager', 'Project Manager', 'Entrepreneur', 'Business Analyst']
  }
};

const CareerSummary = ({ onBack, result }) => {
  // Get the top career match
  const topCareer = result[0];
  
  // Find the matching career pattern
  const careerPattern = Object.values(careerPatterns).find(
    pattern => pattern.title === topCareer.title
  );

  if (!careerPattern) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No career pattern found</Text>
        <CuteButton 
          text="Back to Results" 
          onPress={onBack}
          style={styles.backButton}
          isSecondary
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Your Career Path</Text>
        <Text style={styles.subtitle}>Based on your questionnaire answers</Text>

        <View style={styles.careerCard}>
          <Image 
            source={careerPattern.image}
            style={styles.careerImage}
            resizeMode="contain"
          />
          <Text style={styles.careerTitle}>{careerPattern.title}</Text>
          <Text style={styles.careerDescription}>{careerPattern.description}</Text>
          
          <View style={styles.patternContainer}>
            <Text style={styles.patternTitle}>Your Answer Pattern:</Text>
            {careerPattern.pattern.map((answer, index) => (
              <Text key={index} style={styles.patternItem}>
                {`${index + 1}. ${answer}`}
              </Text>
            ))}
          </View>

          <View style={styles.examplesContainer}>
            <Text style={styles.examplesTitle}>Recommended Careers:</Text>
            {careerPattern.examples.map((example, index) => (
              <Text key={index} style={styles.exampleItem}>
                • {example}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>

      <CuteButton 
        text="Back to Results" 
        onPress={onBack}
        style={styles.backButton}
        isSecondary
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF85A2',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  careerCard: {
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
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
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  careerDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
  },
  patternContainer: {
    marginBottom: 15,
    width: '100%',
  },
  patternTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  patternItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  examplesContainer: {
    marginTop: 10,
    width: '100%',
  },
  examplesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  exampleItem: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  backButton: {
    margin: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#FF85A2',
    textAlign: 'center',
    margin: 20,
  },
});

export default CareerSummary; 