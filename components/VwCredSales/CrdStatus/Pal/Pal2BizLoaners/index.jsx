import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    ScrollView, Pressable} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      loanID: string,
      itemName: string,
  
      buyerContact: string,
      
      buyerName:string,
   
      amountSold: number,
      amountexpectedBack: number,
      amountRepaid: number,
      repaymentPeriod: number,
      lonBala:number,
      description: string,
      status: string,
      advregnu: string,
      createdAt:string,
      updatedAt:string,
        
    }}

const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      loanID,
      itemName,
     
      buyerContact,
      
      buyerName,
   
      amountSold,
      amountexpectedBack,
      amountRepaid,
      repaymentPeriod,
      lonBala,
      description,
      status,
      advregnu,
      createdAt,
      updatedAt,
   }} = props ;
   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("VwMyPal2BizLoanersDtld", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("CredP2BReceived", {loanID})
   }

   const Repay = () => {
      navigation.navigate ("CredRPyPal2Biz", {loanID})
   }

   
   
    return (
        <View style = {{marginTop:"10%"}}>              
            
            <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Buyer Name: {buyerName}               
                    </Text>
                  
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {loanID}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Buyer Contact: {buyerContact}                 
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
                        <Text style = {styles.loanAFriendText}>ViewRpymnts</Text>            
                    </Pressable>
                    </View>   
                    <View>
                    <Pressable
                      onPress={Repay}
                      style = {styles.loanFriendButton}>            
                        <Text style = {styles.loanAFriendText}>Repay</Text>            
                    </Pressable>  
                    </View>
                     
                    </View>
        </View>
    );
}; 

export default CredSlrCvLnStts