import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import HeaderTitle from '../../../components/Header'

const AboutUs = ()  => {
  return (
    <View style={styles.container}>
    <HeaderTitle headerText = {'About Us'}/>
      <Text>
        We Vote is a nonprofit powered by volunteer designers, 
        engineers, thought leaders, political junkies, and just 
        ordinary good citizens. We know that if more people vote, 
        we will get better outcomes. We contribute our time and 
        passion because we want to empower people with the knowledge 
        they need to become better voters, which will lead to a 
        better democracy for us all.
      </Text>
    </View>
  );
}

AboutUs.navigationOptions = {
  drawer: {
      icon: () => (
        <Image
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
});

export default AboutUs
