import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';
import { deleteReqLoan, updateReqLoan } from '../../../../../src/graphql/mutations';
import {  graphqlOperation, API,Auth} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      id:string,
      senderPhn:string,
      recPhn:string,
      RecName:string,
  SenderName:string,
  amount: number,  
  description: string,  
  owner: string,
  createdAt: string,
  attendingAdmin:string
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        id,
        senderPhn,
        recPhn,
        RecName,
  SenderName,
  amount,  
  description,  
  owner,
  createdAt,
  attendingAdmin
        
   }} = props ;

   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   

   const SndChmMmbrMny = () => {
       navigation.navigate("BizPalLn", {id})

   }

   const SndChmMmbrMny2 = () => {
    navigation.navigate("DeclPalLn", {id})
}
 
    return (
        
                  
                  
            <View style = {{marginTop:"10%"}}>

                  
                       
                      <View >
                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Hi! Kindly approve this cash payment to {RecName}  
                      amounting to Ksh. {amount}. More about the payment is
                      as follows: {description}. Thank you.
                       
                    </Text>
                    </View>  
                     
                    <View style = {styles.viewForPressables2}>
                    <View>
                    <Pressable
                      onPress={SndChmMmbrMny}
                      style = {styles.loanFriendButton}
                      >            
                        <Text>Accept</Text>            
                    </Pressable>
                    </View>   
                    <View>
                    <Pressable
                      onPress={SndChmMmbrMny2}
                      style = {styles.loanFriendButton}>            
                        <Text>Decline</Text>            
                    </Pressable>  
                    </View>
                     
                    </View>
                      

      
            </View>
            
                
        
    );
}; 

export default SMCvLnStts