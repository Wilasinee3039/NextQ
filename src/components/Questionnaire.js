import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CuteButton from './CuteButton';
import ProgressIndicator from './ProgressIndicator';

const questions = [
  {
    id: 1,
    text: 'What subject do you enjoy the most?',
    options: ['Math/Science', 'Arts/Literature', 'Social Sciences', 'Physical Activities'],
  },
  {
    id: 2,
    text: 'How do you prefer to work?',
    options: ['Independently', 'In a team', 'Leading others', 'Creative freedom'],
  },
  {
    id: 3,
    text: 'What type of environment do you thrive in?',
    options: ['Structured and organized', 'Dynamic and fast-paced', 'Creative and flexible', 'Outdoor and active'],
  },
  {
    id: 4,
    text: 'How do you handle challenges?',
    options: ['Analyze and solve systematically', 'Collaborate with others', 'Think outside the box', 'Take immediate action'],
  },
  {
    id: 5,
    text: 'What motivates you the most?',
    options: ['Solving complex problems', 'Helping others', 'Creating something new', 'Achieving goals'],
  },
  {
    id: 6,
    text: 'How do you prefer to communicate?',
    options: ['Written communication', 'Verbal communication', 'Visual communication', 'Hands-on demonstration'],
  },
  {
    id: 7,
    text: 'What type of impact do you want to make?',
    options: ['Technical innovation', 'Social change', 'Artistic expression', 'Physical transformation'],
  },
  {
    id: 8,
    text: 'How do you handle stress?',
    options: ['Analyze and plan', 'Seek support', 'Express creatively', 'Physical activity'],
  },
  {
    id: 9,
    text: 'What type of learning do you prefer?',
    options: ['Theoretical knowledge', 'Practical experience', 'Creative exploration', 'Physical practice'],
  },
  {
    id: 10,
    text: 'What are your long-term goals?',
    options: ['Professional expertise', 'Social impact', 'Creative fulfillment', 'Physical achievement'],
  },
];

const Questionnaire = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleSelectAnswer = (answer) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestionIndex].id]: answer,
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  return (
    <View style={styles.container}>
      <ProgressIndicator 
        current={currentQuestionIndex + 1} 
        total={questions.length} 
      />
      
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>
          {questions[currentQuestionIndex].text}
        </Text>
        
        <View style={styles.optionsContainer}>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <CuteButton
              key={index}
              text={option}
              onPress={() => handleSelectAnswer(option)}
              style={styles.optionButton}
            />
          ))}
        </View>
      </View>
      
      {currentQuestionIndex > 0 && (
        <CuteButton
          text="Back"
          onPress={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          style={styles.navButton}
          isSecondary
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 22,
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Avenir-Roman',
  },
  optionsContainer: {
    marginTop: 20,
  },
  optionButton: {
    marginVertical: 10,
  },
  navButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
});

export default Questionnaire;