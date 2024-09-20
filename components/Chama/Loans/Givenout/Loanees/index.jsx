import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    Pressable} from 'react-native';
import styles from './styles';


export interface ChmNonCvLnSttusSent {
    Loaner: {
      loanID:string,
        loaneeName: string,
        amountGiven: number,
        amountExpectedBack: number,
        amountRepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        loaneePhn:string,
        status: string,
        grpContact:string,
        memberId:string,
        description: string,
        loanername:string,
        createdAt:string,
        updatedAt:string,
        
    }}

const ChmNonCvLnSttsSent = (props:ChmNonCvLnSttusSent) => {
   const {
    Loaner: {
      loanID,
    loaneePhn,
    amountGiven,
    amountExpectedBack,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    
    status,
    loaneeName,
    memberId,
    description,
    
    createdAt,
    updatedAt,
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("ChmLoaneesDtls", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("ViewNonLnsRecChm", {loanID})
   }

   const Blacklist = () => {
      navigation.navigate ("BLChmMmberCovs", {loanID})
   }

   const WaiveChmCov = () => {
      navigation.navigate ("WaiveChmCov", {loanID})
   }

   
    return (
      <View style = {{marginTop:"10%"}}>              
            
      <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
      <Text style = {styles.ownerName}>                       
               
                 Loanee Name: {loaneeName}               
              </Text>
            
      <Text style = {styles.ownerName}>                       
                 
                 Loan Id: {loanID}                 
              </Text>
              <Text style = {styles.ownerName}>                       
                
                 Loanee Contact: {loaneePhn}                 
              </Text>

              <Text style = {styles.ownerName}>                       
                 {/* interest*/}
                 Loan Balance(Ksh): {lonBala.toFixed(2)}                    
              </Text> 

              </Pressable>

              <View style = {styles.viewForPressables2}>
              <Pressable
                      onPress={VwRpayments}
                      style = {styles.loanFriendButton}
                      >            
                        <Text style = {styles.loanAFriendText}>ViewRpymnts</Text>            
                    </Pressable>
                    
                    
                    <Pressable
                      onPress={WaiveChmCov}
                      style = {styles.loanFriendButton}>            
                        <Text style = {styles.loanAFriendText}>Waive</Text>            
                    </Pressable>  
                   
                  
                    <Pressable
                      onPress={Blacklist}
                      style = {styles.loanFriendButton}>            
                        <Text style = {styles.loanAFriendText}>BL/Penalise</Text>            
                    </Pressable> 
               
              </View>
  </View>
    );
}; 

export default ChmNonCvLnSttsSent