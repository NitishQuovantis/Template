import React from 'react';
import {View, Text} from 'react-native';
import R from '../../../Utils/R';
import {
  HomeNavigationProp,
  HomeRouteProp,
} from '../../../Navigation/NavigationType';

export interface Props {
  navigation: HomeNavigationProp;
  route: HomeRouteProp;
}
export interface State {}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View
        style={[R.CommontStyle.containerStyle, R.CommontStyle.centerContent]}>
        <Text>Home</Text>
      </View>
    );
  }
}
