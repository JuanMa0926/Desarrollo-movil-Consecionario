  import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Details = ({ route, navigation }) => {
  const { vehicle } = route.params;

  const handleGoBack = () => {
    navigation.navigate('Catalog');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* Aquí va el recuadro grande para la imagen */}
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{vehicle.name}</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>{vehicle.description}</Text>
        <View style={styles.divider} />
        <View style={styles.colorsContainer}>
          <Text style={styles.colorLabel}>Color:</Text>
          <View style={styles.colorDotsContainer}>
            <View style={[styles.colorDot, { backgroundColor: 'red' }]} />
            <View style={[styles.colorDot, { backgroundColor: 'blue' }]} />
            <View style={[styles.colorDot, { backgroundColor: 'green' }]} />
          </View>
        </View>
        <Text style={styles.price}>{vehicle.price}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 300, // Altura deseada del recuadro de la imagen
    backgroundColor: '#333333',
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  colorLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    marginRight: 10,
  },
  colorDotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorDot: {
    width: 30,
    height: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buyButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  buyButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  backButton: {
    backgroundColor: '#ffc400',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default Details;
