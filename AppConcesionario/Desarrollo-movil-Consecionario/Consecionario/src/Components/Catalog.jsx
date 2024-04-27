import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const vehiclesData = [
  {
    id: 1,
    name: 'Toyota Corolla',
    description: 'Sedán confiable y económico.',
    price: 'Aprox. $76,000,000 COP',
  },
  {
    id: 2,
    name: 'Honda Civic',
    description: 'Estilo deportivo y gran economía de combustible.',
    price: 'Aprox. $95,000,000 COP',
  },
  {
    id: 3,
    name: 'Ford Mustang',
    description: 'Potencia y estilo icónico.',
    price: 'Aprox. $114,000,000 COP',
  },
  // Otros vehículos...
];

const VehicleItem = ({ vehicle, onPress }) => (
  <TouchableOpacity onPress={() => onPress(vehicle)} style={styles.itemContainer}>
    <View style={styles.imageContainer}>
      {/* Aquí puedes colocar tu componente de imagen */}
      {/* <Image source={vehicle.image} style={styles.image} /> */}
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{vehicle.name}</Text>
      <Text style={styles.description}>{vehicle.description}</Text>
      <Text style={styles.price}>{vehicle.price}</Text>
    </View>
  </TouchableOpacity>
);

const Catalog = ({ navigation }) => {
  const handleVehiclePress = (vehicle) => {
    navigation.navigate('Details', { vehicle });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {vehiclesData.map((vehicle) => (
        <VehicleItem key={vehicle.id} vehicle={vehicle} onPress={handleVehiclePress} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Catalog;
