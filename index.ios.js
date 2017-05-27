import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Search from './src/Components/Search'
import HeaderTitle from './src/Components/Header'
import Social from './src/Components/Social'
import IntroText from './src/Components/IntroText'

class WeVoteRN extends Component{
    render(){
      return (
        <View>
        <Search/>
        <HeaderTitle headerText = {'Your Account'}/>
        <Social/>
        </View>
          );
  }
}


AppRegistry.registerComponent('WeVoteRN', () => WeVoteRN);
