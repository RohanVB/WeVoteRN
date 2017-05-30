import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import App from './src/scenes/Main/App'
import AboutUs from './src/scenes/Main/scenes/AboutUs'

class WeVoteRN extends Component{
    
    render(){
      
      const { navigation } = this.props;
      return (
        <App />
          );
  }
}

const SimpleApp = DrawerNavigator({
  Home: {screen: App},
  About: { screen: AboutUs}
});


AppRegistry.registerComponent('WeVoteRN', () => SimpleApp);
