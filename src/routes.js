import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

import Login from './pages/Login';
import Main from './pages/Main';

function Routes() {
  // const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   AsyncStorage.getItem('tindev_user4').then((userId) => {
  //     if (userId) {
  //       // navigation.navigate('Main');
  //       setIsLoggedIn(userId);
  //     }
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        {/* {loading && <Screen name="Loading" component={Loading} />} */}
        <Screen name="Login" component={Login} />
        <Screen name="Main" component={Main} />
        {/* {isLoggedIn ? (
          <Screen
            name="Main"
            component={Main}
            initialParams={{ id: isLoggedIn }}
          />
        ) : (
          <Screen name="Login" component={Login} />
        )} */}
      </Navigator>
    </NavigationContainer>
  );
}

function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#DF4723" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Routes;
