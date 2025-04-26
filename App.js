import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/components/Home';
import Questionnaire from './src/components/Questionnaire';
import Results from './src/components/Results';
import PremiumFeatures from './src/components/PremiumFeatures';
import CareerSummary, { careerPatterns } from './src/components/CareerSummary';

const predictCareer = (answers) => {
  // Convert answers object to array
  const answerArray = Object.values(answers);
  
  // Calculate match scores for each career pattern
  const scores = Object.entries(careerPatterns).map(([key, career]) => {
    let score = 0;
    career.pattern.forEach((expectedAnswer, index) => {
      if (answerArray[index] === expectedAnswer) {
        score += 1;
      }
    });
    return {
      key,
      score,
      career
    };
  });

  // Sort by score in descending order
  scores.sort((a, b) => b.score - a.score);

  // Return top 3 matches
  return scores.slice(0, 3).map(({ career }) => ({
    title: career.title,
    description: career.description,
    examples: career.examples
  }));
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [predictionResult, setPredictionResult] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  const handleStartQuestionnaire = () => {
    setCurrentScreen('questionnaire');
  };

  const handleCompleteQuestionnaire = (answers) => {
    const result = predictCareer(answers);
    setPredictionResult(result);
    setCurrentScreen('results');
  };

  const handleUpgrade = () => {
    setIsPremium(true);
    setCurrentScreen('premium');
  };

  const handleRetake = () => {
    setCurrentScreen('questionnaire');
  };

  const handleViewSummary = () => {
    setCurrentScreen('summary');
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === 'home' && (
        <Home onStart={handleStartQuestionnaire} />
      )}
      {currentScreen === 'questionnaire' && (
        <Questionnaire onComplete={handleCompleteQuestionnaire} />
      )}
      {currentScreen === 'results' && (
        <Results 
          result={predictionResult} 
          isPremium={isPremium}
          onUpgrade={handleUpgrade}
          onRetake={handleRetake}
          onViewSummary={handleViewSummary}
        />
      )}
      {currentScreen === 'premium' && (
        <PremiumFeatures onBack={() => setCurrentScreen('results')} />
      )}
      {currentScreen === 'summary' && (
        <CareerSummary 
          onBack={() => setCurrentScreen('results')}
          result={predictionResult}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;