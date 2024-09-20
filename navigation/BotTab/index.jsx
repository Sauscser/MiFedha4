import { FontAwesome, Fontisto, MaterialCommunityIcons , Entypo, MaterialIcons, Octicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import ModalScreen from '../../screens/ModalScreen';
import NotFoundScreen from '../../screens/NotFoundScreen';
import TabOneScreen from '../../screens/TabOneScreen';
import HomeScreen from '../../screens/HomeScrn';
import KFNdogoLoc from '../../screens/MFNdogo/SearchMFN';
import FindKFNdogoLoc from '../../screens/MFNdogo/SignInMFN';
import MyAccount from '../../screens/MyAcc';
import LoanScreen from '../../screens/Loans';
import CredtSales from '../../screens/CredSls';
import ChamaScreen from '../../screens/Chama';
import EntrAdvLoc from '../../screens/Advocate/EnterAdvLoc';
import Welc from '../../screens/MyAcc/T&CAcceptanceForm';
import TabTwoScreen from '../../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../../types';
import LinkingConfiguration from '../LinkingConfiguration';

import LoanChmz from "../../screens/Ads/Search/LoanChm";
import SrchItemAdz from "../../screens/Ads/Search/SrchItemAd";
import SrchLoanAdz from "../../screens/Ads/Search/SrchLoanAd";
import HomeTabNav from "../HomeTabNav";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const HomeTabNavigator = props => {
  return (

    
    <BottomTab.Navigator
      initialRouteName="Home"

      screenOptions={{
        headerShown: false,
      }}
      >
      <BottomTab.Screen
        name='Home'
        component={HomeTabNav}
        options={{
          tabBarIcon: ({color: string}) => (
            <Fontisto name="home" size={25} color={'skyblue'} />
          ),
        }}
      />
      <BottomTab.Screen
        name='MFNdogo'
        component={FindKFNdogoLoc}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="map-marker" size={25} color={'skyblue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='MyAc'
        component={MyAccount}
        options={{
          tabBarIcon: ({color: string}) => (
            <MaterialCommunityIcons name="account" size={25} color={'skyblue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='PalLoan'
        component={SrchLoanAdz}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="search" size={25} color={'skyblue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='CredSale'
        component={SrchItemAdz}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="search" size={25} color={'skyblue'} />
          ),
        }}
      />

<BottomTab.Screen
        name='Chama'
        component={LoanChmz}
        options={{
          tabBarIcon: ({color: string}) => (
            <FontAwesome name="search" size={25} color={'skyblue'} />
          ),
        }}
      />


    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
 export default HomeTabNavigator;