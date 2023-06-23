import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../redux/actions/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from '../assets/style';

const UserInfo = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logout());
    try {
      await AsyncStorage.setItem('isLoggedIn', 'false');
      await AsyncStorage.removeItem('userType');
    } catch (error) {
      console.log('Error saving login status:', error);
    }
  };

  const userData = useSelector(state => state.user.userData);

  return (
    <View style={styles.containeruser}>
      {userData.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <Text style={styles.labeluser}>Email:</Text>
          <Text>{user.email}</Text>
          <Text style={styles.labeluser}>Password:</Text>
          <Text>{user.password}</Text>
          <Text style={styles.labeluser}>Role:</Text>
          <Text>{user.role}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserInfo;
