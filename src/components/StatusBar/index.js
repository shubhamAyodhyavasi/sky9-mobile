/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StatusBar as RNStatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import 'react-native-gesture-handler';
import {colors} from '../../constant';
const StatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <RNStatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? getStatusBarHeight() : RNStatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

StatusBar.defaultProps = {
  barStyle: 'light-content',
  backgroundColor: colors.theme,
};

export default StatusBar;
