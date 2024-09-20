import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';
import { deleteReqLoan, updateReqLoan, updateReqLoanChama } from '../../../../src/graphql/mutations';
import {  graphqlOperation, API,Auth} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      grpContact:string,
      grpName:string,
      grpBal:number,
      
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        grpName,
        grpBal,
       
        grpContact
   }} = props ;

   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   

   const SndChmMmbrMny = () => {
       navigation.navigate("ChamaVw2GrantLnReqNonCov", {grpContact})

   }

   

    return (
        
                  
                  
            <Pressable 
            onPress={SndChmMmbrMny} 
            style = {styles.container}>

                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                     Group Name: {grpName}  
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                     Group Contact: {grpContact}  
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                     Group Balance: {grpBal}  
                    </Text>
                  
            </Pressable>
            
                
        
    );
}; 

export default SMCvLnStts