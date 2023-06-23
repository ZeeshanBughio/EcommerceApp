import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image:
      'https://www.czone.com.pk/Images/Thumbnails/copy-6-czone.com.pk-1540-14494-160323080330.jpg',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Product 2',
    image:
      'https://www.czone.com.pk/Images/Thumbnails/10-czone.com.pk-1540-14298-190123074128.jpg',
    price: 19.99,
  },
];

const ProductsScreen = ({navigation}) => {
  const handleProductPress = product => {
    navigation.navigate('ProductDetails', {product});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleProductPress(item)}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>$ {item.price}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(item)}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  listContentContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#cb3837',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addToCartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
