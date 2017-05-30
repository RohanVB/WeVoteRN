import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.wevoteusa.org/'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default MyWeb;