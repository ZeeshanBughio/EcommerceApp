// import React, {useState, useEffect} from 'react';
// import {View, TextInput, Text, Image} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {styles} from '../assets/style';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import auth from '@react-native-firebase/auth';

// const LoginScreen = ({handleLogin, setShowSignup}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onLoginPress = () => {
//     handleLogin(email, password);
//   };

//   const onSignupPress = () => {
//     setShowSignup(true);
//   };

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         '343611312538-lmn996kh3i2h2nl1cmem4l51dpkje08q.apps.googleusercontent.com',
//     });
//   }, []);

//   const signIn = async () => {
//     try {
//       // Check if your device supports Google Play Services
//       console.log('first');
//       await GoogleSignin.hasPlayServices();

//       // Get the user's ID token and basic user information
//       const {idToken, user} = await GoogleSignin.signIn();

//       // console.log('User info:', user);
//       console.log('ID token:', idToken);

//       // Create a Google credential with the token
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//       // Sign-in the user with the credential
//       await auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       console.log('error', error);
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         // User cancelled the login flow
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         // Operation (e.g. sign in) is in progress already
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         // Play services not available or outdated
//       } else {
//         // Some other error happened
//         console.log('Error:', error);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/images/logo.png')}
//         style={styles.logo}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={text => setEmail(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={text => setPassword(text)}
//       />
//       <TouchableOpacity onPress={onLoginPress} style={styles.button}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={onSignupPress}>
//         <Text style={styles.signupText}>
//           Don't have an account? <Text style={styles.signupLink}>Sign up</Text>{' '}
//           Or
//         </Text>
//       </TouchableOpacity>
//       <GoogleSigninButton
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={signIn}
//       />
//     </View>
//   );
// };

// export default LoginScreen;
import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, Image, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../assets/style';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({handleLogin, setShowSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    handleLogin(email, password);
  };

  const onSignupPress = () => {
    setShowSignup(true);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '343611312538-49779kn8ukmq11vu2pp0kii9b410ihnh.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('tokenn', idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error', error);
    }
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity onPress={onLoginPress} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignupPress}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign up</Text>{' '}
          Or
        </Text>
      </TouchableOpacity>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => onGoogleButtonPress()}
      />
    </View>
  );
};

export default LoginScreen;
