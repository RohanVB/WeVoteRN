import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { SearchBar } from 'react-native-elements'

class Search extends Component {

render(){
const {searchPadding, container} = styles; 
return(
  <View style = {searchPadding}>
    <SearchBar
      lightTheme
      //onChangeText={someMethod}
      placeholder='Search We Vote...' />
  </View>
  );
  }
}

const styles = StyleSheet.create({
  container:{

  },
  
  searchPadding: {
    paddingTop: 20,
  },
});

export default Search;