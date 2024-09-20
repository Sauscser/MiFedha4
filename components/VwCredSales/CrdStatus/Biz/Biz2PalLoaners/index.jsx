import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
   Loanee: {
      loanID: string,
     itemName: string,
 
     sellerContact: string,
     
     SellerName:string,
  
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

const CredByrCvLnStts = (props:ChmCvLnSttusRec) => {
  const {
   Loanee: {
      loanID,
     itemName,
     
     sellerContact,
     
     SellerName,
  
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
     navigation.navigate ("VwMyBiz2PalLoanersDtld", {loanID})
  }

  const VwRpayments = () => {
     navigation.navigate ("CredB2PSent", {loanID})
  }

  const Repay = () => {
     navigation.navigate ("CredRPyBiz2Pal", {loanID})
  }

  
  
   return (
       <View style = {{marginTop:"10%"}}>              
           
           <Pressable onPress={SndChmMmbrMny} style = {styles.container}>
           <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Seller Name: {SellerName}               
                   </Text>
                 
           <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Loan Id: {loanID}                 
                   </Text>
                   <Text style = {styles.ownerName}>                       
                      {/*loaner details */}   
                      Seller Contact: {sellerContact}                 
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

export default CredByrCvLnStts