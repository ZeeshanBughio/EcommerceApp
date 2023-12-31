import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SingleProduct from '../screens/ProductDetails';

const BottomStack = createBottomTabNavigator();

function BottomStackNav() {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <BottomStack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomStack.Screen
        name="Product Screen"
        component={ProductsScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <BottomStack.Screen
                name='Profile Screen'
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            <BottomStack.Screen
                name='Setting Screen'
                component={SettingScreen}
                options={{
                    headerShown: false,
                }}
            /> */}
    </BottomStack.Navigator>
  );
}

export default BottomStackNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
