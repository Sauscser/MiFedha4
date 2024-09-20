import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    Pressable} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      loanID:string,
        grpContact: string,
        amountGiven: number,
        amountExpectedBack: number,
        amountExpectedBackWthClrnc:number,
        amountRepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        advRegNu: string,
        status: string,
        description: string,
        LoanerName:string,
        createdAt:string,
        updatedAt:string,
        
    }}

const ChmCvLnSttsRec = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      loanID,
    
    amountGiven,
    amountExpectedBack,
    amountExpectedBackWthClrnc,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    advRegNu,
    status,
    LoanerName,
    description,
    grpContact,
    createdAt,
    updatedAt,
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("ChmLoanersDtls", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("ViewNonLnsSntChm", {loanID})
   }

   const Repay = () => {
      navigation.navigate ("RepyChmCovLns", {loanID})
   }

    return (
      <View style = {{marginTop:"10%"}}>              
            
      <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
      <Text style = {styles.ownerName}>                       
               
                 Group Name: {LoanerName}               
              </Text>
            
      <Text style = {styles.ownerName}>                       
                 
                 Loan Id: {loanID}                 
              </Text>
              <Text style = {styles.ownerName}>                       
                
                 Group Contact: {grpContact}                 
              </Text>

              <Text style = {styles.ownerName}>                       
                 {/* interest*/}
                 Loan Balance(Ksh): {lonBala.toFixed(2)}                    
              </Text> 

              </Pressable>

              <View style = {styles.viewForPressables2}>
              <View>
              <Pressable
                onPress={VwRpayments}
                style = {styles.loanFriendButton}
                >            
                  <Text>ViewRpymnts</Text>            
              </Pressable>
              </View>   
              <View>
              <Pressable
                onPress={Repay}
                style = {styles.loanFriendButton}>            
                  <Text>Repay</Text>            
              </Pressable>  
              </View>
               
              </View>
  </View>
    );
}; 

export default ChmCvLnSttsRec