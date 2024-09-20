import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  ScrollView, Pressable} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      MembaId: string,
      ChamaNMember: string,
      groupContact: string,
      
      groupName:string,
      GrossLnsGvn:number,
      LonAmtGven: number,
      AmtRepaid:number,
      LnBal: number,
      NonLoanAcBal:number,
      ttlNonLonAcBal: number,
      AcStatus: string,
      loanStatus: string,
      blStatus: string,
      createdAt:string,
      memberChmBenefit:number,
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         MembaId,
         ChamaNMember,
         groupContact,
       
         groupName,
         loanStatus,
         blStatus,
         GrossLnsGvn,
         LonAmtGven,
         AmtRepaid,
         LnBal,
         NonLoanAcBal,
         memberChmBenefit,
         createdAt,       
         AcStatus,
       
       
   }} = props ;

   const navigation = useNavigation();

   const BenefitChama = () => {
      navigation.navigate("SendNLBnftChm", {ChamaNMember})
   }

   const BenefitChmSenderOnly = () => {
      navigation.navigate("BenefitChmSenderOnly", {ChamaNMember})
   }


    return (
      <View style = {{marginTop:"10%"}}>              
            
      <View style = {styles.container}>
      <Text style = {styles.ownerName}>                       
               
                 Group Name: {groupName}               
              </Text>
            
      <Text style = {styles.ownerName}>                       
                 
                Group Contact: {groupContact}                 
              </Text>

              <Text style = {styles.ownerName}>                       
                 
                Chama Benefits Earned: {memberChmBenefit}                 
              </Text>
              

              </View>

              <View style = {styles.viewForPressables2}>
              <Pressable
                onPress={BenefitChama}
                style = {styles.loanFriendButton}
                >            
                  <Text style = {styles.loanAFriendText}>Benefit</Text>            
              </Pressable>
              
              
              <Pressable
                onPress={BenefitChmSenderOnly}
                style = {styles.loanFriendButton}>            
                  <Text style = {styles.loanAFriendText}>Dont Benefit</Text>            
              </Pressable>  
             
            
             
               
              </View>
  </View>
        
    );
}; 

export default ChmMbrShpInfo