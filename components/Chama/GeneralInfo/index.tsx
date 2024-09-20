
import React from 'react';
import {View, Text,   ScrollView} from 'react-native';

import styles from './styles';


export interface ChmaInfo {
    ChmDtls: {
      grpContact:string,
      grpName: string,
      grpBal: number,
      regNo: string,
      ttlGrpMembers: number
      ttlDpst: number,
      ttlWthdrwn: number,
    
      ttlNonLonsRecChm: number,
      ttlNonLonsSentChm:number,
    
      
    
      TtlActvLonsTmsLnrChmCov: number,
      TtlActvLonsAmtLnrChmCov: number,
      TtlBLLonsTmsLnrChmCov: number,
      TtlBLLonsAmtLnrChmCov: number,
      TtlClrdLonsTmsLnrChmCov: number,
      TtlClrdLonsAmtLnrChmCov: number,
    
      TtlActvLonsTmsLnrChmNonCov: number,
      TtlActvLonsAmtLnrChmNonCov: number,
      TtlBLLonsTmsLnrChmNonCov: number,
      TtlBLLonsAmtLnrChmNonCov: number,
      TtlClrdLonsTmsLnrChmNonCov: number,
      TtlClrdLonsAmtLnrChmNonCov: number,
      description: string,
        
    }}

const ChmInfo = (props:ChmaInfo) => {
   const {
      ChmDtls: {
         grpContact,
      grpName,
      grpBal,
      ttlGrpMembers,
      ttlDpst,
      ttlWthdrwn,
      regNo,
      
     
      
    
      ttlNonLonsRecChm,
      ttlNonLonsSentChm,
    
      
    
      TtlActvLonsTmsLnrChmCov,
      TtlActvLonsAmtLnrChmCov,
      TtlBLLonsTmsLnrChmCov,
      TtlBLLonsAmtLnrChmCov,
      TtlClrdLonsTmsLnrChmCov,
      TtlClrdLonsAmtLnrChmCov,
    
      TtlActvLonsTmsLnrChmNonCov,
      TtlActvLonsAmtLnrChmNonCov,
      TtlBLLonsTmsLnrChmNonCov,
      TtlBLLonsAmtLnrChmNonCov,
      TtlClrdLonsTmsLnrChmNonCov,
      TtlClrdLonsAmtLnrChmNonCov,
      description,
   }} = props ;

    return (
        <View style = {styles.container}>              
            
            
            <ScrollView >       
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       General Chama Info  Summary            
                    </Text>
            </View>      

                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Chama Contact: {grpContact}                
                    </Text> 
                    
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Chama Name: {grpName}                
                    </Text>    
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Registration Number : {regNo}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Account Balance (Ksh): {grpBal.toFixed(2)}                
                    </Text>   
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Chama Benefits (Ksh): {TtlActvLonsTmsLnrChmNonCov.toFixed(2)}                
                    </Text>                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Chama Members: {ttlGrpMembers}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Chama Deposits(Ksh): {ttlDpst.toFixed(2)}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Chama Withdrawals(Ksh): {ttlWthdrwn.toFixed(2)}                    
                    </Text> 
                    
                    <View style = {{alignItems:"center"}}>
                     <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Non-Loans               
                    </Text>
                     </View>
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Members Contributions: {ttlNonLonsRecChm.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Money Sent to Members (Ksh): {ttlNonLonsSentChm.toFixed(2)}                    
                    </Text> 


            
        </ScrollView>
                
        </View>
    );
}; 

export default ChmInfo