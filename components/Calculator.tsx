import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import CalculatorButton from './CalculatorButton';

interface ButtonProps{
    title: string;
    onPress: () => void;
    backgroundColor: string;
    color: string;
    disabled?: boolean;
    style?: { style: number };
  }

const Calculator = () => {

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

    const buttons: ButtonProps[][] = [
        [
          { title: 'AC',
            onPress: clearInput,
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: '+/-',
            onPress: () => handleButtonPress('+/-'),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: '%',
            onPress: () => handleButtonPress('%'),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: '÷',
            onPress: () => handleButtonPress('/'),
            backgroundColor: '#ff9a00',
            color: '#e8e9ea'},
        ],
        [
          { title: '7', 
            onPress: () => handleButtonPress('7'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '8',
            onPress: () => handleButtonPress('8'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '9',
            onPress: () => handleButtonPress('9'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '×',
            onPress: () => handleButtonPress('*'),
            backgroundColor: '#ff9a00',
            color: '#e8e9ea'},
        ],
        [
          { title: '4',
            onPress: () => handleButtonPress('4'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '5',
            onPress: () => handleButtonPress('5'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '6',
            onPress: () => handleButtonPress('6'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '-',
            onPress: () => handleButtonPress('-'),
            backgroundColor: '#ff9a00',
            color: '#e8e9ea'
          },
        ],
        [
          { title: '1',
            onPress: () => handleButtonPress('1'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '2',
            onPress: () => handleButtonPress('2'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '3',
            onPress: () => handleButtonPress('3'),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '+',
            onPress: () => handleButtonPress('+'),
            backgroundColor: '#ff9a00',
            color: '#e8e9ea'
          },
        ],
        [
          { title: '0',
            onPress: () => handleButtonPress('0'),
            backgroundColor: '#737373',
            color: '#fff',
            style: { flex: 2, padding: 1 }
          },
          { title: ',',
            onPress: () => handleButtonPress(','),
            backgroundColor: '#737373',
            color: '#fff'
          },
          { title: '=',
            onPress: calculateResult,
            backgroundColor: '#ff9a00',
            color: '#e8e9ea'},
        ],
      ];
    
      const extraButtons: ButtonProps[][] = [
        [
          { title: '(',
            onPress: () => handleButtonPress('('),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: ')',
            onPress: () => handleButtonPress(')'),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'mc',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'mc+',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'm-',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'mr',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
        ],
        [
          { title: '2ⁿᵈ',
            onPress: () => handleButtonPress('('),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'x²',
            onPress: () => handleButtonPress(')'),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'x³',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'xʸ',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'eˣ',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: '10ˣ',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
        ],
        [
          { title: '1/x',
            onPress: () => handleButtonPress('('),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: '√x',
            onPress: () => handleButtonPress(')'),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: '∛x',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'xʸ',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'ln',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'log₁₀',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
        ],
        [
          { title: 'x!',
            onPress: () => handleButtonPress('('),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'sin',
            onPress: () => handleButtonPress(')'),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'cos',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'tan',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'e',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'EE',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
        ],
        [
          { title: 'Rad',
            onPress: () => handleButtonPress('('),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'sinh',
            onPress: () => handleButtonPress(')'),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'cosh',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'tanh',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'π',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
          { title: 'Rand',
            onPress: () => handleButtonPress(' '),
            backgroundColor: '#636466',
            color: '#e8e9ea'
          },
        ],
      ];

  return (
    
    <View style={styles.container}>
      <Text style={styles.result}>{input}</Text>
      

      <View style={styles.buttonsContainer}>
        <View style={styles.simplyContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={`row-${rowIndex}`} style={styles.buttonRow}>
            {row.map((button, index) => (
              <CalculatorButton
                key={`button-${rowIndex}-${index}`}
                title={button.title}
                onPress={button.onPress}
                backgroundColor={button.backgroundColor}
                color={button.color}
                disabled={button.disabled}
                style={button.style}
              />
            ))}
          </View>
          
        ))}
        </View>

              {isLandscape && (
        <View style={styles.scientificContainer}>
          {extraButtons.map((row, rowIndex) => (
            <View key={`extraRow-${rowIndex}`} style={styles.buttonRow}>
              {row.map((button, index) => (
                <CalculatorButton
                  key={`extraButton-${rowIndex}-${index}`}
                  title={button.title}
                  onPress={button.onPress}
                  backgroundColor={button.backgroundColor}
                  color={button.color}
                  disabled={button.disabled}
                  style={button.style}
                />
              ))}
            </View>
          ))}
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

export default Calculator;
