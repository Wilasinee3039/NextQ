import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CuteButton = ({ text, onPress, style, isSecondary = false }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSecondary ? styles.secondaryButton : styles.primaryButton,
        style,
      ]}
    >
      <Text style={[
        styles.buttonText,
        isSecondary ? styles.secondaryText : styles.primaryText,
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryButton: {
    backgroundColor: '#FF85A2',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FF85A2',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#FF85A2',
  },
});

export default CuteButton;