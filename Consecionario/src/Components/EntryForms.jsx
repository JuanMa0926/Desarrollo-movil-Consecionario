import * as React from 'react'; // Importa la biblioteca React para crear componentes
import { SafeAreaView, StyleSheet, View } from 'react-native'; // Importa componentes de React Native para manejar la vista de manera segura y aplicar estilos
import { SegmentedButtons, Button, Avatar, TextInput, Checkbox } from 'react-native-paper'; // Importa componentes de React Native Paper para utilizar botones, avatares, texto de entrada y checkbox

// Declara un componente funcional llamado EntryForms que recibe 'navigation' como una prop
const EntryForms = ({ navigation }) => {
  const [value, setValue] = React.useState('Login'); // Declara el estado 'value' con un valor inicial de 'Login'
  const [email, setEmail] = React.useState(""); // Declara el estado 'email' con un valor inicial vacío para almacenar el valor del email
  const [password, setPassword] = React.useState(""); // Declara el estado 'password' con un valor inicial vacío para almacenar el valor de la contraseña
  const [rememberPassword, setRememberPassword] = React.useState(false); // Declara el estado 'rememberPassword' con un valor inicial de falso para el checkbox de recordar contraseña

  // Retorna la vista envuelta en SafeAreaView, que garantiza que el contenido no se superponga con elementos del sistema
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Selector de segmentos para elegir entre Iniciar Sesión y Registrarse */}
        <SegmentedButtons 
          value={value} // Establece el valor seleccionado del selector de segmentos
          onValueChange={setValue} // Maneja el cambio de valor del selector de segmentos
          buttons={[ // Define los botones del selector de segmentos
            {
              value: 'Login', // Valor del primer botón
              label: 'Iniciar Sesión', // Etiqueta del primer botón
              style: { // Estilo personalizado para el primer botón
                borderRadius: 0,
                backgroundColor: '#000000',
              },
              labelStyle: { // Estilo personalizado para la etiqueta del primer botón
                color: '#ffffff',
              }
            },
            {
              value: 'signup', // Valor del segundo botón
              label: 'Registrarse', // Etiqueta del segundo botón
              style: { // Estilo personalizado para el segundo botón
                borderRadius: 0,
                backgroundColor: '#000000',
              },
              labelStyle: { // Estilo personalizado para la etiqueta del segundo botón
                color: '#ffffff',
              }
            }
          ]}
        />
        {/* Renderiza los componentes condicionalmente según el valor seleccionado */}
        {value === 'Login' && (
          <View style={styles.formContainer}>
            {/* Agrega el Avatar.Text solo para la opción de "Iniciar Sesión" */}
            <Avatar.Text
              size={100} // Establece el tamaño del Avatar.Text
              label="XD" // Establece el texto a mostrar en el Avatar.Text
              style={styles.avatar} // Aplica estilos adicionales al Avatar.Text
              labelStyle={styles.avatarLabel} // Aplica estilos adicionales al texto del Avatar.Text
            />
            {/* Agrega el componente TextInput para el email */}
            <TextInput
              label="Email" // Etiqueta del TextInput
              value={email} // Valor del TextInput
              onChangeText={text => setEmail(text)} // Maneja el cambio de texto del TextInput y actualiza el estado 'email'
              style={styles.textInput} // Aplica estilos personalizados al TextInput
              theme={{ // Tema personalizado para el TextInput
                colors: {
                  primary: '#000000', // Color del texto y del borde del TextInput
                  placeholder: '#808080', // Color del placeholder del TextInput
                  background: '#dddddd', // Color de fondo del TextInput
                },
              }}
            />
            {/* Agrega el componente TextInput para la contraseña */}
            <TextInput
              label="Contraseña" // Etiqueta del TextInput
              value={password} // Valor del TextInput
              onChangeText={text => setPassword(text)} // Maneja el cambio de texto del TextInput y actualiza el estado 'password'
              style={styles.textInput} // Aplica estilos personalizados al TextInput
              theme={{ // Tema personalizado para el TextInput
                colors: {
                  primary: '#000000', // Color del texto y del borde del TextInput
                  placeholder: '#808080', // Color del placeholder del TextInput
                  background: '#dddddd', // Color de fondo del TextInput
                },
              }}
              secureTextEntry // Oculta el texto de la contraseña
            />
            {/* Checkbox para recordar contraseña */}
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={rememberPassword ? 'checked' : 'unchecked'} // Estado del checkbox de recordar contraseña
                onPress={() => setRememberPassword(!rememberPassword)} // Maneja el cambio de estado del checkbox
                color="#000000" // Color del checkbox
              />
              <Button 
                style={styles.checkboxText} // Estilo del texto del checkbox
                onPress={() => setRememberPassword(!rememberPassword)} // Maneja el cambio de estado del checkbox
              >
                Recordar contraseña 
              </Button>
            </View>
            {/* Texto para olvidar contraseña */}
            <Button 
              style={styles.forgotPasswordText} // Estilo del texto para olvidar contraseña
              onPress={() => console.log('Olvidaste tu contraseña')} // Maneja el evento de presionar el texto
            >
              ¿Olvidaste tu contraseña? 
            </Button>
            {/* Botón para iniciar sesión */}
            <Button 
              mode="contained" // Establece el modo del botón como contenido
              style={styles.button} // Aplica estilos personalizados al botón
              onPress={() => navigation.navigate('OptionsNavigation')} // Maneja el evento de presionar el botón
            >
              Iniciar Sesión 
            </Button>
          </View>
        )}
      </View>
    </SafeAreaView> // Cierra la vista segura
  );
};

// Define los estilos con StyleSheet
const styles = StyleSheet.create({
  container: { // Estilos del contenedor principal
    flex: 1, // Flexibilidad para ocupar todo el espacio disponible
    alignItems: 'center', // Alinea los elementos hijos en el centro horizontalmente
    justifyContent: 'center', // Alinea los elementos hijos en el centro verticalmente
  },
  content: { // Estilos del contenido
    flex: 1, // Flexibilidad para ocupar todo el espacio disponible
    width: '100%', // Ancho del contenido al 100%
    justifyContent: 'flex-start', // Alinea los elementos hijos al principio verticalmente
  },
  formContainer: { // Estilos del contenedor del formulario
    marginTop: 50, // Margen superior
    alignItems: 'center', // Alinea los elementos hijos en el centro horizontalmente
  },
  avatar: { // Estilos del Avatar.Text
    marginBottom: 30, // Margen inferior
    backgroundColor: '#000000', // Color de fondo del Avatar.Text
  },
  avatarLabel: { // Estilos del texto del Avatar.Text
    color: '#ffffff', // Color del texto del Avatar.Text
  },
  button: { // Estilos del botón
    marginTop: 30, // Margen superior
    width: '80%', // Ancho del botón
    backgroundColor: '#000000', // Color de fondo del botón
    paddingVertical: 10, // Relleno vertical
    paddingHorizontal: 20, // Relleno horizontal
    borderRadius: 5, // Borde redondeado
  },
  textInput: { // Estilos del TextInput
    width: '80%', // Ancho del TextInput
    marginBottom: 20, // Margen inferior
    borderWidth: 1, // Ancho del borde
    borderColor: '#000000', // Color del borde
    color: '#000000', // Color del texto
    backgroundColor: '#dddddd', // Color de fondo del TextInput
  },
  checkboxContainer: { // Estilos del contenedor del checkbox
    flexDirection: 'row', // Disposición en fila
    alignItems: 'center', // Alinea los elementos hijos en el centro verticalmente
    marginBottom: 10, // Margen inferior
  },
  checkboxText: { // Estilos del texto del checkbox
    color: '#000000', // Color del texto del checkbox
  },
  forgotPasswordText: { // Estilos del texto para olvidar contraseña
    color: '#000000', // Color del texto para olvidar contraseña
    marginTop: 10, // Margen superior
    marginBottom: 20, // Margen inferior
  },
});

export default EntryForms; // Exporta el componente EntryForms
