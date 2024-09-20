import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  ScrollView, Pressable} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      MembaId: string,
      ChamaNMember: string,
      memberContact: string,
      memberName:string,
      memberNatId:string,
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
      
                  subscriptionFrequency:number,
      subscriptionAmt:number,
      lateSubscriptionPenalty:number,
      ttlLateSubs:number,
      timeCrtd:number,
      subscribedAmt:number,
      totalSubAmt:number
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         MembaId,
         ChamaNMember,
         memberNatId,
         memberContact,
         memberName,
         loanStatus,
         blStatus,
         GrossLnsGvn,
         LonAmtGven,
         AmtRepaid,
         LnBal,
         NonLoanAcBal,
         ttlNonLonAcBal,
         createdAt,       
         AcStatus,
         subscribedAmt,
         totalSubAmt,
         subscriptionFrequency,
         subscriptionAmt,
         lateSubscriptionPenalty,
         ttlLateSubs,
         timeCrtd,
         
   }} = props ;

   const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const now1:any = "2024-05-20";
             
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)          
              const tmDif = daysUpToDate - timeCrtd;
              const subFreq = tmDif/subscriptionFrequency
              const Amt2HvBnSub = subFreq*subscriptionAmt
              const subPnlties = totalSubAmt - subscribedAmt
              const ttlArrears = (ttlLateSubs + Amt2HvBnSub).toFixed(0)

   const navigation = useNavigation();
   const Penalise = () => {
      navigation.navigate ("PenaliseMember", {ChamaNMember})
   }

   const ViewMmberDtls = () => {
      navigation.navigate ("ChamaDtls", {ChamaNMember})
   }

   const ViewSubs = () => {
      navigation.navigate ("VwMbrSubsDirectly", {ChamaNMember})
   }

   const SendNonLoans = () => {
      navigation.navigate ("SndMbrsMnys", {ChamaNMember})
   }
   
    return (
      <View style = {{marginTop:"10%"}}>              
            
      <Pressable onPress={ViewMmberDtls} style = {styles.container}>
      <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       {memberName}             
                    </Text>

                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama Number: {MembaId}                
                    </Text>  
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Subscription up to date: {subscribedAmt}                
                    </Text>   
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Subscription with Penalties: {ttlArrears}                
                    </Text>  
            
      
              </Pressable>

              <View style = {styles.viewForPressables2}>
              <Pressable
                onPress={ViewSubs}
                style = {styles.loanFriendButton}
                >            
                  <Text style = {styles.loanAFriendText}>View Subscriptions</Text>            
              </Pressable>
              
              
              <Pressable
                onPress={Penalise}
                style = {styles.loanFriendButton}>            
                  <Text style = {styles.loanAFriendText}>Penalise</Text>            
              </Pressable>  

              <Pressable
                onPress={SendNonLoans}
                style = {styles.loanFriendButton}>            
                  <Text style = {styles.loanAFriendText}>SendNonLoans</Text>            
              </Pressable>  
             
            
             
               
              </View>
  </View>
    );
}; 

export default ChmMbrShpInfo