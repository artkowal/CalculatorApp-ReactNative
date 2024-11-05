import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const [input, setInput] = useState('0');

  const handleButtonPress = (value) => {
    setInput((prev) => (prev === '0' ? value : prev + value));
  };

  const clearInput = () => {
    setInput('0');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input.replace(',', '.')).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{input}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={clearInput} style={[styles.button, styles.functionButton]}>
          <Text style={styles.functionButtonText}>AC</Text>
        </TouchableOpacity>
        <View style={[styles.emptyButton, styles.functionButton]} />
        <TouchableOpacity onPress={() => handleButtonPress('%')} style={[styles.button, styles.operatorButton]}>
          <Text style={styles.functionButtonText}>%</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress('7')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('8')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('9')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('*')} style={[styles.button, styles.operatorButton]}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress('4')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('5')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('6')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('-')} style={[styles.button, styles.operatorButton]}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress('1')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('2')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('3')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('+')} style={[styles.button, styles.operatorButton]}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleButtonPress('0')} style={[styles.buttonWide, styles.numberButton]}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress(',')} style={[styles.button, styles.numberButton]}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={calculateResult} style={[styles.button, styles.operatorButton]}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    paddingBottom: 0,
  },
  result: {
    backgroundColor: "black",
    color: 'white',
    fontSize: 64,
    marginBottom: 10,
    textAlign: 'right',
    width: '100%',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    height: 100,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.5,
  },
  buttonWide: {
    flex: 2, 
    height: 100,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0.5,
  },
  emptyButton: {
    flex: 2,
    height: 100,
    margin: 0.5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: '#fff',
  },

  operatorButton: {
    backgroundColor: '#FF9500',
  },

  numberButton: {
    backgroundColor: "#333333",
  },

  functionButton: {
    backgroundColor: "#A5A5A5",
  },

  functionButtonText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#000000",
  }

});

export default App;
