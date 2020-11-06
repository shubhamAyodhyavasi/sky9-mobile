/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {StatusBar} from './components';
import {colors, gbStyle} from './constant';
import MainRoute from './router/MainRoute';
import {AppProvider} from './services';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    placeholder: colors.textBase,
    label: colors.textBase,
    text: colors.textBase,
    primary: colors.labels,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppProvider>
        <NavigationContainer>
          <StatusBar />
          <View style={gbStyle.body}>
            <MainRoute />
          </View>
        </NavigationContainer>
      </AppProvider>
    </PaperProvider>
  );
};

export default App;
