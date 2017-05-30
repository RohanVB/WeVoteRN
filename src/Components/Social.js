import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements';


class Social extends Component{

	render(){
		return(
			<View>
				<TouchableOpacity>
				<SocialIcon
				  title='Sign In With Facebook'
				  button
				  type='facebook'
				/>
				</TouchableOpacity>
				
				<TouchableOpacity>
				<SocialIcon
				  title='Sign In With Twitter'
				  button
				  type='twitter'
				/>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Social;