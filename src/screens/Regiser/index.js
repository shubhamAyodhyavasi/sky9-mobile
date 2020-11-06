import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header} from '../../components';
import {Input} from '../../components/Forms';
import {gbStyle} from '../../constant';
import {appContext, setUser} from '../../services';


const RegisterScreen = () => {
  const navigation = useNavigation();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const {dispatch} = useContext(appContext);
  const doSignIn = () => {
    // todo login
    dispatch(
      setUser({
        id: 123,
      }),
    );
  };
  const sendOtp = () => {
    setIsOtpSent(true);
    // todo send opt
  };
  return (
    <>
      <Header back={navigation.canGoBack()} />
      <View style={gbStyle.body}>
        <ScrollView>
          <View style={gbStyle.verticalCenterView}>
            <View style={gbStyle.formWrapper}>
              <Text
                style={[
                  gbStyle.heaingText,
                  gbStyle.baseText,
                  gbStyle.centerText,
                ]}>
                Sign Up
              </Text>
              {!isOtpSent ? (
                <>
                  <Input label="Name" autoCompleteType="name" maxLength={25} />
                  <Input
                    label="Mobile Number"
                    autoCompleteType="tel"
                    dataDetectorTypes="phoneNumber"
                    keyboardType="phone-pad"
                    maxLength={10}
                  />
                  <Input
                    label="Email"
                    autoCompleteType="email"
                    maxLength={60}
                  />
                </>
              ) : (
                <Input
                  label="OTP"
                  autoCompleteType="off"
                  dataDetectorTypes="none"
                  keyboardType="phone-pad"
                  maxLength={4}
                />
              )}
              <View style={gbStyle.formItem}>
                {isOtpSent ? (
                  <Pressable style={gbStyle.yellowBtn} onPress={doSignIn}>
                    <Text>Verify OTP</Text>
                  </Pressable>
                ) : (
                  <Pressable style={gbStyle.yellowBtn} onPress={sendOtp}>
                    <Text>Sign Up</Text>
                  </Pressable>
                )}
              </View>
              <View style={gbStyle.formItem}>
                <Text style={[gbStyle.baseText, gbStyle.centerText]}>
                  Already Have An Account?
                </Text>
              </View>
              <View>
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={[gbStyle.yellowText, gbStyle.centerText]}>
                    Sign In Here
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RegisterScreen;
