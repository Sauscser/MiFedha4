import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import BotTab from '../BotTab';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {View, Text} from 'react-native';

import KFKubwaScreen from '../../screens/MFKubwa';
import KFNdogoScreen from '../../screens/MFNdogo';
import KFAdminScreen from '../../screens/MFAdmin';
import MFSetting from '../../screens/Settings/SignIn';
import MFAdmSgnIn from "../../screens/MFAdmin/SignInAdm";
import MFKw from "../../screens/MFKubwa";
import Ref from "../../screens/Settings/Reference";
import AdvSgnIn from "../../screens/Advocate/AdvocateHm";



const Drawer = createDrawerNavigator();

const DummyScreen = props => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <Text>{props.name} </Text>
  </View>
);

const RootNavigator = props => {

  
  return (
    <NavigationContainer

    
    >
      <Drawer.Navigator
      
      screenOptions={{
        headerShown: false,
      }}>
        <Drawer.Screen name="Homes" component={BotTab} />
        <Drawer.Screen name="MFNdogos" component={KFNdogoScreen} />
        <Drawer.Screen name="MFKubwa" component={MFKw} />
        <Drawer.Screen name="MFAdvocate" component={AdvSgnIn} />
        
        <Drawer.Screen name="MFAdminstrators" component={MFAdmSgnIn} />
        
        <Drawer.Screen name="Reference" component={Ref} />
        
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;