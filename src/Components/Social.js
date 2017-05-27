import React, { Component } from 'react';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';


class Social extends Component{

	render(){
		return(
			<View>
				<SocialIcon
				  title='Sign In With Facebook'
				  button
				  type='facebook'
				/>

				<SocialIcon
				  title='Sign In With Twitter'
				  button
				  type='twitter'
				/>
			</View>
		);
	}
}

export default Social;