import React from 'react';
import AppStack from './src/Navigation/Navigation';
import AppContext from './src/Contexts/AppContext';
import AppConfiguration from './AppConfiguration';

export interface Props {}
export interface State {
  theme: {};
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      theme: {},
    };
  }

  componentDidMount() {}

  render() {
    const {theme} = this.state;

    return (
      <AppContext.Provider value={{theme}}>
        <AppStack />
      </AppContext.Provider>
    );
  }
}
