// CalculatorButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface CalculatorButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: string;
  color: string;
  disabled?: boolean;
  style?: {flex: number},
}

const CalculatorButton = ({ title, onPress, backgroundColor, color, disabled, style }: CalculatorButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, { backgroundColor, flex: 1 }, style]}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '98.2%',
    backgroundColor: '#4CAF50',
    margin: 1,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default CalculatorButton;
