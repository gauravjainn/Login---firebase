import {View, Text, Image} from 'react-native';
import React from 'react';
import ApplicationStyles from '../Themes/ApplicationStyles';

export default function LogoIcon() {
  return (
    <View>
      <Image
      resizeMode="contain"
      source={require('../../assets/logo-example.png')}
      style={ApplicationStyles.logoImageStyle}
    />
    </View>
  );
}
