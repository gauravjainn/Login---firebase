import * as React from "react";
import {
  Image,
  View,
  Text,
  StyleProp,
  ViewStyle,
  StatusBar,
  TextStyle,
  ImageStyle,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TextInput from "react-native-text-input-interactive";
import {useNavigation} from '@react-navigation/native';

import styles from "./SignUpScreen.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => {};
export interface IHomeScreenProps {
  signupText?: string;
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  emailPlaceholder?: string;
  passwordPlaceholer?: string;
  disableSignup?: boolean;
  style?: CustomStyleProp;
  dividerStyle?: CustomStyleProp;
  logoImageStyle?: CustomImageStyleProp;
  textInputContainerStyle?: CustomStyleProp;
  loginButtonStyle?: CustomStyleProp;
  loginTextStyle?: CustomTextStyleProp;
  signupStyle?: CustomStyleProp;
  signupTextStyle?: CustomTextStyleProp;
  children?: any;
  onLoginPress: () => void;
  onSignupPress: () => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onFacebookPress?: () => void;
  onTwitterPress?: () => void;
  onApplePress?: () => void;
  onDiscordPress?: () => void;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({
  style,
  dividerStyle,
  logoImageStyle,
  loginTextStyle,
  loginButtonStyle,
  signupTextStyle,
  signupStyle,
  textInputContainerStyle,
  signupText = "Create A New Account",
  disableDivider,
  logoImageSource,
  onLoginPress,
  disableSocialButtons,
  onSignupPress,
  onEmailChange,
  onPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = "Email",
  passwordPlaceholer = "Password",
  disableSignup = false,
  children,
  navigation,
}) => {
  const Logo = () => (
    <Image
      resizeMode="contain"
      source={require('../../assets/logo-example.png')}
      style={styles.logoImageStyle}
    />
  );

  const Heading = () => (
    <View>
      <Text style={{alignSelf:'center',marginVertical:50,fontSize:20}}>Welcome </Text>
      </View>
  );
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>

      {!disableSignup && <Heading />}
 
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
