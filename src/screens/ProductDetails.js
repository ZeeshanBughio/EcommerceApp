import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductDetailScreen = ({route}) => {
  const {product} = route.params;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No product found.</Text>
      </View>
    );
  }

  const {image, name, price} = product;

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>Price: ${price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
});

export default ProductDetailScreen;
