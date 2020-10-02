import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';

// Root
export type RootStackType = {
  Auth: undefined;
  App: undefined;
  SplashScreen: undefined;
};

// Auth Stack
export type AuthStackType = {
  Login: {userId: string};
  SignUp: undefined;
  OtpVerification: {cognitoUser: any};
};

// Nested Stack type defination :- https://stackoverflow.com/questions/59816529/how-to-write-type-definitions-while-using-nested-navigation-in-react-navigation
export type SplashNavigatorProp = StackNavigationProp<
  RootStackType,
  'SplashScreen'
>;
export type SplashRouteProp = RouteProp<RootStackType, 'SplashScreen'>;

export type LoginNavigatorProp = StackNavigationProp<AuthStackType, 'Login'>;
export type LoginRouteProp = RouteProp<AuthStackType, 'Login'>;

export type SignUpNavigatorProp = StackNavigationProp<AuthStackType, 'SignUp'>;
export type SignUpRouteProp = RouteProp<AuthStackType, 'SignUp'>;

export type OtpVerificationNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AuthStackType, 'OtpVerification'>,
  StackNavigationProp<RootStackType>
>;
export type OtpVerificationRouteProp = RouteProp<
  AuthStackType,
  'OtpVerification'
>;

// App Stack
export type AppStackType = {
  Home: undefined;
};

export type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppStackType, 'Home'>,
  StackNavigationProp<RootStackType>
>;
export type HomeRouteProp = RouteProp<AppStackType, 'Home'>;
