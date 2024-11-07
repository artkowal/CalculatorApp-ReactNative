import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';


const App = () => {
  const [input, setInput] = useState('0');
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      setIsLandscape(width > height);
    };
  
    handleOrientationChange();

    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    return () => {
      subscription.remove();
    };
  }, []);

  const handleButtonPress = (value) => {
    if (value === '+/-'){
      setInput((prev) => {
        if(prev === '0') return prev;
        return prev.startsWith('-') ? prev.slice(1) : '-' + prev;
      });
    } else if (value === '%') {
      setInput((prev) => {
        try {
          const result = (parseFloat(prev) / 100).toString();
          return result;
        } catch (error) {
          return 'Error';
        }
      });
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
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

      <View style={styles.buttonsContainer}>

        <View style={styles.simplyContainer}>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={clearInput} style={[styles.button, styles.functionButton]}>
              <Text style={styles.functionButtonText}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress('+/-')} style={[styles.button, styles.functionButton]}>
              <Text style={styles.functionButtonText}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress('%')} style={[styles.button, styles.functionButton]}>
              <Text style={styles.functionButtonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress('/')} style={[styles.button, styles.operatorButton]}>
              <Text style={styles.functionButtonText}>÷</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
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

          <View style={styles.buttonRow}>
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

          <View style={styles.buttonRow}>
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

          <View style={styles.buttonRow}>
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

        {isLandscape && (
          
          <View style={styles.scientificContainer}>
            
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => handleButtonPress('(')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>(</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(')')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>)</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>mc</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>m+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>m-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>mr</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>2ⁿᵈ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>x²</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>x³</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>xʸ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>eˣ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>10ˣ</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>1/x</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>√x</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>∛x</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>ⁿ√x</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>ln</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>log₁₀</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>x!</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>sin</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>cos</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>tan</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>e</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>EE</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>Rad</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>sinh</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>cosh</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>tanh</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>π</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleButtonPress(' ')} style={[styles.button, styles.functionButton]}>
                <Text style={styles.buttonText}>Rand</Text>
              </TouchableOpacity>
            </View>

          </View>
        )}

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#414646',
  },

  result: {
    fontSize: 64,
    width: '100%',
    color: 'white',
    textAlign: 'right',
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  buttonsContainer: {
    flexDirection: 'row-reverse',
    width: '100%',
    height: '70%'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height:'20%',
    width: '100%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '98.2%',
    backgroundColor: '#4CAF50',
    margin: 1,
  },
  buttonWide: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center',
    height: '98.2%',
    backgroundColor: '#4CAF50',
    margin:1,
    padding:1,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },

  operatorButton: {
    backgroundColor: '#FF9500',
  },

  numberButton: {
    backgroundColor: "#737373",
  },

  functionButton: {
    backgroundColor: "#555a55",
  },
  functionButtonText: {
    fontSize: 24,
    color: '#fff',
  },

  scientificContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  simplyContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default App;
