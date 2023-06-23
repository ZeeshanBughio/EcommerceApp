import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, useDispatch, useSelector} from 'react-redux';
import {login, logout, setUserData} from './src/redux/actions/action';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import DrawerStackNav from './src/Navigations/DrawerStackNav';
import BottomStackNav from './src/Navigations/BottomStackNav';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const [showSignup, setShowSignup] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const userType = useSelector(state => state.user.userType);
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    checkLoginStatus();
    console.log(userData);
  }, []);

  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null && value === 'true') {
        const storedUserType = await AsyncStorage.getItem('userType');
        dispatch(login(storedUserType));
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          dispatch(setUserData(JSON.parse(storedUserData)));
        }
      }
    } catch (error) {
      console.log('Error retrieving login status:', error);
    }
  };

  const handleLogin = async (email, password) => {
    const users = userData || [];
    if (users) {
      const user = users.find(
        user => user.email === email && user.password === password,
      );
      if (user) {
        dispatch(login(user.role));
        try {
          await AsyncStorage.setItem('isLoggedIn', 'true');
          await AsyncStorage.setItem('userType', user.role);
        } catch (error) {
          console.log('Error saving login status:', error);
        }
      } else {
        Alert.alert('Invalid credentials');
      }
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleSignup = async (email, password, role) => {
    const users = userData || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      Alert.alert('Email already exists. Please choose a different email.');
      return;
    }
    users.push({email, password, role});
    dispatch({
      type: 'SET_USER_DATA',
      payload: users,
    });
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(users));
    } catch (error) {
      console.log('Error saving user data:', error);
    }

    setShowSignup(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          userType === 'Seller' ? (
            <Stack.Screen
              name="Seller"
              component={BottomStackNav}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="Buyer"
              component={DrawerStackNav}
              options={{headerShown: false}}
            />
          )
        ) : showSignup ? (
          <Stack.Screen name="Signup" options={{headerShown: false}}>
            {() => (
              <SignupScreen
                handleSignup={handleSignup}
                setShowSignup={setShowSignup}
              />
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {() => (
              <LoginScreen
                handleLogin={handleLogin}
                setShowSignup={setShowSignup}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  userType: state.user.userType,
  userData: state.user.userData,
});

export default connect(mapStateToProps)(App);
