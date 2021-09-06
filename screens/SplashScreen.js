import React from 'react';
import {Text, Button, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View>
      <Text>
        Welcome to Float
      </Text>
      <Button 
        onPress={()=>{navigation.navigate('Today')}}
        title="go to today"
      />
      <Button 
        onPress={()=>{navigation.navigate('Profile')}}
        title="go to profile"
      />
      <Button 
        onPress={()=>{navigation.navigate('Login')}}
        title="go to Login"
      />
    </View>
  )
}

export default SplashScreen;