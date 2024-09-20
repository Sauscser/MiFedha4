import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    ScrollView, Pressable} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID:string,
        loaneePhn: string,
        amountgiven: number,
        amountexpected: number,
        amountrepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        advregnu: string,
        loaneename:string,
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
    loaneePhn,
    amountgiven,
    amountexpected,
    amountrepaid,
    lonBala,
    repaymentPeriod,
    advregnu,
    amountExpectedBackWthClrnc,
    DefaultPenaltySM2,
    loaneename,
    status,
    description,
    createdAt,
    advEmail,
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("VwB2PMyLoaneesDtld", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("VwB2PReceived", {loanID})
   }

   const Blacklist = () => {
      navigation.navigate ("BLBiz2Pal", {loanID})
   }

   const WaiveSMBiz2Pal = () => {
      navigation.navigate ("WaiveSMBiz2Pal", {loanID})
   }

   
   
    return (
        <View style = {{marginTop:"10%"}}>              
            
            <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
            <Text style = {styles.ownerName}>                       
                     
                       Loanee Name: {loaneename}               
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
                      onPress={WaiveSMBiz2Pal}
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

export default SMCvLnStts