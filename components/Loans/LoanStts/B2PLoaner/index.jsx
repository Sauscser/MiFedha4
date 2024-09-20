import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    ScrollView, Pressable} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID:string,
        loanerPhn: string,
        amountgiven: number,
        amountexpected: number,
        amountrepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        advregnu: string,
        loanername:string,
        status: string,
        description: string,
        createdAt:string,
        updatedAt:string,
        amountExpectedBackWthClrnc: number,
        DefaultPenaltySM2:number,
        advEmail:string
        
        
    }}

const SMCvLnStts = (props:SMCvLnSttus) => {
   const {
    Loanee: {
      loanID,
    loanerPhn,
    amountgiven,
    amountexpected,
    amountrepaid,
    lonBala,
    repaymentPeriod,
    advregnu,
    amountExpectedBackWthClrnc,
    DefaultPenaltySM2,
    loanername,
    status,
    description,
    createdAt,
    advEmail,
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("VwB2PMyLoanersDtld", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("VwB2PLRSent", {loanID})
   }

   const Repay = () => {
      navigation.navigate ("RpyBiz2Pal", {loanID})
   }

   
   
    return (
        <View style = {{marginTop:"10%"}}>              
            
            <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Name: {loanername}               
                    </Text>
                  
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {loanID}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Contact: {loanerPhn}                 
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
                      onPress={Repay}
                      style = {styles.loanFriendButton}>            
                        <Text style = {styles.loanAFriendText}>Repay</Text>            
                    </Pressable>  
                    
                     
                    </View>
        </View>
    );
}; 

export default SMCvLnStts