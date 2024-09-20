import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  ScrollView} from 'react-native';

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
         subscriptionFrequency,
         subscriptionAmt,
         lateSubscriptionPenalty,
         ttlLateSubs,
         timeCrtd,
      subscribedAmt,
      totalSubAmt,
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
       
       
   }} = props ;

   const navigation = useNavigation();

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
                 

   
    return (
        <View style = {styles.container}>              
            
            <View style = {{alignItems:"center"}}>
               <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       {memberName}             
                    </Text>
            </View>
            <ScrollView >       
               

                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama Number: {MembaId}                
                    </Text>    
                    
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Member Contact: {memberContact}                  
                    </Text>                                       
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Funds to and from member Account (Ksh): {NonLoanAcBal.toFixed(2)}
                    </Text>  
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Subscription due: {Amt2HvBnSub.toFixed(0)}                  
                    </Text>                                       
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Late subscription Penalties (Ksh): {ttlLateSubs.toFixed(2)}
                    </Text>  
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Subscription and Penalties (Ksh): {ttlArrears}
                    </Text>    
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Group Benefits (Ksh): {(ttlNonLonAcBal).toFixed(2)}
                    </Text>    
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Gross Loans (Ksh): {GrossLnsGvn.toFixed(2)}
                    </Text>  

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Actual Loans (Ksh): {LonAmtGven.toFixed(2)}
                    </Text>                      
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                      Amount repaid (Ksh): {AmtRepaid.toFixed(2)}
                    </Text>     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Loan Balance (Ksh): {LnBal.toFixed(2)}
                    </Text>   
                    
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Time Created: {createdAt}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Loan Status: {loanStatus}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Black-Listing Status: {blStatus}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Membership Status: {AcStatus}                    
                    </Text> 
            
        </ScrollView>
                
        </View>
    );
}; 

export default ChmMbrShpInfo