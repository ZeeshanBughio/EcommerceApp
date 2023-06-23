import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsScreen from '../screens/ProductsScreen';
import UserInfo from '../screens/UserInfo';
import ProductDetails from '../screens/ProductDetails';

const DrawerStack = createDrawerNavigator();

function DrawerStackNav() {
  return (
    <DrawerStack.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#cb3837',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#cb3837',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DrawerStack.Screen
        name="Product Screen"
        component={ProductsScreen}
        options={{
          headerStyle: {
            backgroundColor: '#cb3837',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#fff',
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <DrawerStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerStyle: {
            backgroundColor: '#cb3837',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#fff',
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <DrawerStack.Screen
        name="User Information"
        component={UserInfo}
        options={{
          headerStyle: {
            backgroundColor: '#cb3837',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#fff',
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </DrawerStack.Navigator>
  );
}

export default DrawerStackNav;
