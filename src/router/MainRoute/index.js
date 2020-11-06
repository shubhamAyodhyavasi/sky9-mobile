import React, {useContext} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  MovieDetailScreen,
  LoginScreen,
  MovieListScreen,
  RegisterScreen,
  SearchScreen,
} from '../../screens';
import {colors} from '../../constant';
import {appContext} from '../../services';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  const {
    state: {user},
  } = useContext(appContext);
  return (
    <HomeStack.Navigator>
      {!user ? (
        <>
          <HomeStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              tabBarLabel: 'Login!',
              header: () => null,
            }}
          />
          <HomeStack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              tabBarLabel: 'Regiser!',
              header: () => null,
            }}
          />
        </>
      ) : (
        <>
          <HomeStack.Screen
            name="HomeStack"
            component={Tabs}
            options={{
              tabBarLabel: 'Home!',
              header: () => null,
            }}
          />
          <HomeStack.Screen
            name="MovieDetail"
            component={MovieDetailScreen}
            options={{
              tabBarLabel: 'Movie!',
              header: () => null,
            }}
          />
          <HomeStack.Screen
            name="MovieListScreen"
            component={MovieListScreen}
            options={{
              tabBarLabel: 'Movie!',
              header: () => null,
            }}
          />
        </>
      )}
    </HomeStack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: colors.dark}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const MainRoute = () => {
  return <HomeStackScreen />;
};

export default MainRoute;
