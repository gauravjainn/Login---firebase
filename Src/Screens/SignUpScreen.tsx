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
import SocialButton from "../Components/social-button/SocialButton";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomImageStyleProp =
  | StyleProp<ImageStyle>
  | Array<StyleProp<ImageStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;

const dummyFunction = () => {};
export interface ISignUpScreenProps {
  signupText?: string;
  disableDivider?: boolean;
  logoImageSource: any;
  disableSocialButtons?: boolean;
  emailPlaceholder?: string;
  firstNamePlaceholder?: string;
  lastNamePlaceholder?: string;
  passwordPlaceholer?: string;
  confirmpasswordPlaceholer?: string;
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
  onFirstChange: (firstname: string) => void;
  onLastChange: (lastname: string) => void;
  onPasswordChange: (password: string) => void;
  onConfirmPasswordChange: (password: string) => void;
  onFacebookPress?: () => void;
  onTwitterPress?: () => void;
  onApplePress?: () => void;
  onDiscordPress?: () => void;
}

const SignUpScreen: React.FC<ISignUpScreenProps> = ({
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
  onFirstChange,
  onLastChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onFacebookPress = dummyFunction,
  onTwitterPress = dummyFunction,
  onApplePress = dummyFunction,
  onDiscordPress = dummyFunction,
  emailPlaceholder = "Email",
  firstNamePlaceholder = "First Name",
  lastNamePlaceholder = "Last Name",
  passwordPlaceholer = "Password",
  confirmpasswordPlaceholer = " Confirm Password",
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

  const TextInputContainer = () => (
    <View style={[styles.textInputContainer, textInputContainerStyle]}>
      <TextInput placeholder={firstNamePlaceholder} onChangeText={onFirstChange} />
      <View style={styles.passwordTextInputContainer}>
      <TextInput placeholder={lastNamePlaceholder} onChangeText={onLastChange} />
        </View>
      <View style={styles.passwordTextInputContainer}>
      <TextInput placeholder={emailPlaceholder} onChangeText={onEmailChange} />
        </View>
      <View style={styles.passwordTextInputContainer}>
        <TextInput
          placeholder={passwordPlaceholer}
          secureTextEntry
          onChangeText={onPasswordChange}
        />
      </View>
      <View style={styles.passwordTextInputContainer}>
        <TextInput
          placeholder={confirmpasswordPlaceholer}
          secureTextEntry
          onChangeText={onConfirmPasswordChange}
        />
      </View>
    </View>
  );

  const LoginButton = () => (
    <TouchableOpacity
      style={[styles.loginButtonStyle, loginButtonStyle]}
      onPress= {()=>{navigation.navigate("HomeScreen")}}
    >
      <Text style={[styles.loginTextStyle, loginTextStyle]}>Sign Up</Text>
    </TouchableOpacity>
  );

  const SignUp = () => (
    <View>

    <TouchableOpacity
      style={[styles.signupStyle, signupStyle]}
      onPress={onSignupPress}
      >
      <Text style={[styles.signupTextStyle, signupTextStyle]}>
        or
      </Text>
        </TouchableOpacity>
      </View>
  );

  const Divider = () => <View style={[styles.dividerStyle, dividerStyle]} />;

  const DefaultSocialLoginButtons = () =>
    !disableSocialButtons ? (
      <>
        <SocialButton
          text="Continue with Facebook"
          textStyle={styles.facebookSocialButtonTextStyle}
          onPress={onFacebookPress}
        />

        {/* <SocialButton
          text="Continue with Discord"
          style={styles.socialButtonStyle}
          textStyle={styles.discordSocialButtonTextStyle}
          imageSource={require("./local-assets/discord.png")}
          onPress={onDiscordPress}
        /> */}
      </>
    ) : null;

  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
      <Logo />
      <TextInputContainer />
      <LoginButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
