import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';
import { deleteReqLoan, deleteReqLoanChama, updateReqLoan } from '../../../../src/graphql/mutations';
import {  graphqlOperation, API,Auth} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      id:string,
      status:string,
      loaneePhone:string,
      amount:number,
      repaymentAmt:number,
      repaymentPeriod:number
      loaneeName:string,
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        status,
        loaneePhone,
        amount,
        repaymentAmt,
        repaymentPeriod,
        loaneeName,
        id
   }} = props ;

   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   
   const SndChmMmbrMny = () => {
    navigation.navigate("RepyChmNonCovLns", {id})
 }
   
   const updtRecAc2 = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
        await API.graphql(
          graphqlOperation(deleteReqLoanChama, {
            input:{
              id:id,
              
            }
          })
        )                              
    }
    catch(error){
      console.log(error)
      
    }
    setIsLoading(false);
    
  }
 


    return (
        
          
                       
                    <Pressable onPress={updtRecAc2}
                      style = {styles.container}>
                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Hi! it's {loaneeName}. Kindly Loan me Ksh. {amount}. I 
                      commit to repay at a compound interest of {repaymentAmt}% per month within {repaymentPeriod} days. 
                      You can reach me through {loaneePhone}. {status}    
                    </Text>
                    </Pressable>  
                     
                   
    );
}; 

export default SMCvLnStts