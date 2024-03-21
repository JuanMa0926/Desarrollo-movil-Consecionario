// Importa la biblioteca React para el desarrollo de interfaces de usuario
import React from 'react';

// Importa componentes específicos para manejar desplazamientos, vistas y estilos desde React Native
import { ScrollView, View, StyleSheet } from 'react-native';

// Importa componentes específicos de React Native Paper para crear componentes de interfaz de usuario
import { Card, Text } from 'react-native-paper';

// Importa las imágenes locales que se utilizarán en las opciones de navegación
const catalogoImage = require('../assets/catalogo.jpg');
const ofertasImage = require('../assets/ofertas.jpg');
const servicioTallerImage = require('../assets/servicio_taller.jpg');
const testDriveImage = require('../assets/test_drive.jpg');

// Define un componente funcional para cada opción de navegación
const NavigationOption = ({ title, imageSource, onPress }) => (
  // Utiliza el componente Card de React Native Paper para crear una tarjeta
  <Card onPress={onPress} style={styles.card}>
    <Card.Content style={styles.cardContent}>
      {/* Utiliza el componente Card.Cover para mostrar la imagen de la opción de navegación */}
      <Card.Cover source={imageSource} style={styles.image} />
      {/* Utiliza el componente View para superponer el texto sobre la imagen */}
      <View style={styles.overlay}>
        {/* Utiliza el componente Text para mostrar el título de la opción */}
        <Text style={styles.title}>{title}</Text>
      </View>
    </Card.Content>
  </Card>
);

// Define el componente principal que renderiza las opciones de navegación
const OptionsNavigation = ({ navigation }) => {
  // Define un array de objetos que representan cada opción de navegación
  const options = [
    { title: 'Catalogo', imageSource: catalogoImage, onPress: () => navigation.navigate('Catalog') },
    { title: 'Oferta', imageSource: ofertasImage, onPress: () => navigation.navigate('Ofertas') },
    { title: 'Taller', imageSource: servicioTallerImage, onPress: () => navigation.navigate('Servicio de Taller') },
    { title: 'Test Drive', imageSource: testDriveImage, onPress: () => navigation.navigate('Test Drive') },
    // Otras opciones aquí...
  ];

  // Devuelve un componente ScrollView que contiene las opciones de navegación
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {/* Utiliza el componente View para agrupar las opciones de navegación */}
      <View style={styles.container}>
        {/* Mapea cada opción en el array y renderiza un componente NavigationOption para cada una */}
        {options.map((option, index) => (
          <NavigationOption key={index} title={option.title} imageSource={option.imageSource} onPress={option.onPress} />
        ))}
      </View>
    </ScrollView>
  );
};

// Define los estilos utilizando el objeto StyleSheet
const styles = StyleSheet.create({
  // Estilos para el contenido de ScrollView
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  // Estilos para el contenedor principal
  container: {
    alignItems: 'center',
  },
  // Estilos para la tarjeta
  card: {
    marginVertical: 10,
    width: '80%',
  },
  // Estilos para el contenido de la tarjeta
  cardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  // Estilos para el título
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  // Estilos para la imagen de la tarjeta
  image: {
    width: '100%',
    height: 200,
  },
  // Estilos para la superposición de texto sobre la imagen
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

// Exporta el componente OptionsNavigation para poder ser utilizado en otras partes de la aplicación
export default OptionsNavigation;
