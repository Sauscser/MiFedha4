import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';

import {  graphqlOperation, API,Auth} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteReqLoanCredSl } from '../../../src/graphql/mutations';


export interface SMAccount {
    SMAc: {
      id:string,
      status:string,
      loaneePhone:string,
      itemName:string,
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
        itemName,
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
          graphqlOperation(deleteReqLoanCredSl, {
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
                      Hi! it's {loaneeName}. Kindly sell me a {itemName} on credit whose cash price is Ksh. {amount}. I 
                      commit to repay at a compound interest of {repaymentAmt}% per month within {repaymentPeriod} days. 
                      You can reach me through {loaneePhone}. {status}    
                    </Text>
                    </Pressable>  
                     
                   
    );
}; 

export default SMCvLnStts