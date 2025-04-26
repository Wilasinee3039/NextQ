import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressIndicator = ({ current, total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>
        Question {current} of {total}
      </Text>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill,
            { width: `${(current / total) * 100}%` }
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  progressText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
    textAlign: 'center',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#EEE',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#A5E1E8',
    borderRadius: 3,
  },
});

export default ProgressIndicator;