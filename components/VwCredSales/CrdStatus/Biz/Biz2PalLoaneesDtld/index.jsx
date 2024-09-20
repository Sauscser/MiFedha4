import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,    ScrollView, Pressable} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
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

const CredSlrCvLnStts = (props:SMCvLnSttus) => {
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
      navigation.navigate ("VwB2PMyLoaneesDtld", {loanID})
   }

   const VwRpayments = () => {
      navigation.navigate ("VwB2PReceived", {loanID})
   }

   const Blacklist = () => {
      navigation.navigate ("BLBiz2Pal", {loanID})
   }

   
   
    return (
      <View style = {styles.container}>              
      <View style = {{alignItems:"center"}}>
      <Text style = {styles.loanAdvert}>                       
                 {/*loaner details */}   
                 {buyerName}               
              </Text>
      </View>
      
      <ScrollView >              
                 
                  

              
               <Text style = {styles.ownerName}>                       
                 {/*loaner details */}   
                 Loan Id: {loanID}                 
              </Text>
              
              <Text style = {styles.ownerContact}>                       
                  {/*loaner details */}  
                  Cash Price (Ksh): {amountSold.toFixed(2)}                
               </Text>                     
               <Text style ={styles.amountoffered}>                       
                  {/* amount*/} 
                  Credit Sale Price(Ksh): {amountexpectedBack.toFixed(2)}
               </Text>    
              <Text style = {styles.repaymentPeriod}>                       
                 {/* repaymentPeriod*/}
                 Amount Repaid(Ksh): {amountRepaid.toFixed(2)}                  
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                 Loan Balance(Ksh): {lonBala.toFixed(2)}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                 Repayment Period in days: {repaymentPeriod}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
               Buyer Contact: {buyerContact}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                Advocate Registration Number: {advregnu}                    
              </Text> 
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                Item Name(s): {itemName}                    
              </Text> 
          
              <Text style = {styles.interest}>                       
                 {/* interest*/}
                Loan Status: {status}                    
              </Text> 
              <ScrollView>
              <Text style = {styles.loanerotherdescriptions} >                       
                 {/* other description*/} 
                 Created At: {createdAt}                 
              </Text>   
              <Text style = {styles.loanerotherdescriptions} >                       
                 {/* other description*/} 
                 Last Update: {updatedAt}                 
              </Text>   
              <Text style = {styles.loanerotherdescriptions} >                       
                 {/* other description*/} 
                 More: {description}                 
              </Text>   
              </ScrollView>              
      
  </ScrollView>
          
  </View>
    );
}; 

export default CredSlrCvLnStts