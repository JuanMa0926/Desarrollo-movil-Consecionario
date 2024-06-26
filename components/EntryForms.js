import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Alert } from 'react-native';
import { SegmentedButtons, Button, Avatar, TextInput, Checkbox } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../firebase'; // Importa la configuración de Firebase desde tu archivo firebaseConfig

// Remove this line: import { initializeApp } from 'firebase/app';

const auth = getAuth(app); // Inicializa Firebase Auth con la configuración importada
const app = firebase; // Update this line

const EntryForms = ({ navigation }) => {
  const [value, setValue] = useState('Login');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Función para registrar un nuevo usuario
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Registro exitoso", "El usuario se ha registrado exitosamente. Ahora puedes iniciar sesión.", [
        { text: "OK", onPress: () => { setEmail(""); setPassword(""); } } // Limpiar los campos de email y contraseña
      ]);
    } catch (error) {
      Alert.alert("Error al registrar usuario", error.message);
      console.error("Error al registrar usuario:", error.message);
    }
  };

  // Función para iniciar sesión
  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('OptionsNavigation');
    } catch (error) {
      Alert.alert("Error al iniciar sesión", error.message);
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SegmentedButtons 
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: 'Login',
              label: 'Iniciar Sesión',
              style: {
                borderRadius: 0,
                backgroundColor: '#000000',
              },
              labelStyle: {
                color: '#ffffff',
              }
            },
            {
              value: 'signup',
              label: 'Registrarse',
              style: {
                borderRadius: 0,
                backgroundColor: '#000000',
              },
              labelStyle: {
                color: '#ffffff',
              }
            }
          ]}
        />
        {value === 'Login' && (
          <View style={styles.formContainer}>
            <Avatar.Text
              size={100}
              label="XD"
              style={styles.avatar}
              labelStyle={styles.avatarLabel}
            />
            <TextInput
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.textInput}
              theme={{
                colors: {
                  primary: '#000000',
                  placeholder: '#808080',
                  background: '#dddddd',
                },
              }}
            />
            <TextInput
              label="Contraseña"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.textInput}
              theme={{
                colors: {
                  primary: '#000000',
                  placeholder: '#808080',
                  background: '#dddddd',
                },
              }}
              secureTextEntry
            />
            <Button 
              mode="contained"
              style={styles.button}
              onPress={handleSignIn}
            >
              Iniciar Sesión 
            </Button>
                        
          </View>
        )}
        {value === 'signup' && (
          <View style={styles.formContainer}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.textInput}
              theme={{
                colors: {
                  primary: '#000000',
                  placeholder: '#808080',
                  background: '#dddddd',
                },
              }}
            />
            <TextInput
              label="Contraseña"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.textInput}
              theme={{
                colors: {
                  primary: '#000000',
                  placeholder: '#808080',
                  background: '#dddddd',
                },
              }}
              secureTextEntry
            />
           
            <Button 
              mode="contained"
              style={styles.button}
              onPress={handleSignUp}
            >
              Registrarse 
            </Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  formContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 30,
    backgroundColor: '#000000',
  },
  avatarLabel: {
    color: '#ffffff',
  },
  button: {
    marginTop: 30,
    width: '80%',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textInput: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000000',
    color: '#000000',
    backgroundColor: '#dddddd',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    color: '#000000',
  },
  forgotPasswordText: {
    color: '#000000',
    marginTop: 10,
    marginBottom: 20,
  },
});


export default EntryForms;

