import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Search from '../../components/Search'
import HeaderTitle from '../../components/Header'
import Social from '../../components/Social'


class App extends Component{
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

App.navigationOptions = {
  drawer: {
      icon: () => (
        <Image
          source={require('../../../imgs/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
});


export default App;
