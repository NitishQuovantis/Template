import React from 'react';
import {View, Text} from 'react-native';
import CommonStyle from '../../Utils/CommonStyle/CommonStyle';
import {
  SplashNavigatorProp,
  SplashRouteProp,
} from '../../Navigation/NavigationType';
import R from '../../Utils/R';

export interface Props {
  navigation: SplashNavigatorProp;
  route: SplashRouteProp;
}

export interface State {}

export default class SplashScreen extends React.Component<Props, State> {
  componentDidMount() {
    setTimeout(() => {
      this.checkUserAndRedirect();
    }, 2000);
  }

  checkUserAndRedirect = async () => {
    const {navigation} = this.props;
    navigation.navigate('App');
  };

  render() {
    return (
      <View style={[CommonStyle.centerContent, CommonStyle.containerStyle]}>
        <Text>Splash Screen</Text>
      </View>
    );
  }
}
