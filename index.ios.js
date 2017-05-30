import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Search from './src/components/Search'
import HeaderTitle from './src/components/Header'
import Social from './src/components/Social'
import IntroText from './src/components/IntroText'

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
