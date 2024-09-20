import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';
import { deleteReqLoan, updateReqLoan } from '../../../../src/graphql/mutations';
import {  graphqlOperation, API,Auth} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      id:string,
      loaneeEmail:string,
      loaneePhone:string,
      amount:number
      repaymentAmt:number,
      repaymentPeriod:number
      loaneeName:string,
      dfltDeadLn:number
      installmentAmount:number
      paymentFrequency:number,
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        loaneeEmail,
        loaneePhone,
        amount,
        repaymentAmt,
        repaymentPeriod,
        loaneeName,
        dfltDeadLn,
        id,
        installmentAmount,
        paymentFrequency
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
                      Hi! it's {loaneeName}. Kindly Loan me Ksh. {amount}. I 
                      commit to repay at a compound interest of {repaymentAmt}% per month within {repaymentPeriod} days. 
                      Each Installment is {installmentAmount} after every {paymentFrequency} days.
                      You can reach me through {loaneePhone}.       
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