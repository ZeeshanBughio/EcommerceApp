import React from 'react-native';
import {StyleSheet} from 'react-native';

export var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: '100%',
    position: 'relative',
  },
  logo: {
    width: '80%',
    height: 150,
    objectFit: 'contain',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    marginTop: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#cb3837',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#fff',
    fontSize: 18,
  },
  signupLink: {
    color: '#cb3837',
    textDecorationLine: 'none',
  },
  flexingtwobuttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  marginright: {
    marginRight: 10,
  },
  capitalize: {
    textTransform: 'uppercase',
  },
  logotext: {
    fontSize: 30,
    color: '#cb3837',
    fontWeight: 700,
    fontFamily: 'Poppins',
  },
  containeruser: {
    flex: 1,
    padding: 16,
  },
  userContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  labeluser: {
    fontWeight: 'bold',
  },
});
