import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CuteButton from './CuteButton';

const premiumFeatures = [
  'Detailed career analysis',
  'Personalized development path',
  'Exclusive career tips',
  'Monthly career webinars',
  'Priority support',
];

const PremiumFeatures = ({ onBack }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Premium Features</Text>
        
        <View style={styles.featuresContainer}>
          {premiumFeatures.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.featureIcon} />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.pricingContainer}>
          <Text style={styles.pricingTitle}>Choose Your Plan</Text>
          
          <View style={styles.planOption}>
            <Text style={styles.planName}>Monthly</Text>
            <Text style={styles.planPrice}>$4.99/month</Text>
          </View>
          
          <View style={styles.planOption}>
            <Text style={styles.planName}>Yearly</Text>
            <Text style={styles.planPrice}>$39.99/year (33% off)</Text>
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
    padding: 20,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FF85A2',
    textAlign: 'center',
  },
  featuresContainer: {
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#A5E1E8',
    marginRight: 15,
  },
  featureText: {
    fontSize: 16,
    color: '#555',
  },
  pricingContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 15,
    padding: 20,
  },
  pricingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  planOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  planName: {
    fontSize: 16,
    color: '#555',
  },
  planPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF85A2',
  },
  backButton: {
    marginTop: 20,
  },
});

export default PremiumFeatures;