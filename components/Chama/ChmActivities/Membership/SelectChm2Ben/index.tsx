import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  Pressable} from 'react-native';

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
      memberChmBenefit:number,
      
      AcStatus: string,
      loanStatus: string,
      blStatus: string,
      createdAt:string,
      
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
         memberChmBenefit,
         
         createdAt,       
         AcStatus,
       
       
   }} = props ;

   const navigation = useNavigation();
   const ViewMmberDtls = () => {
      navigation.navigate ("ChamaDtls", {ChamaNMember})
   }
   
    return (
        <Pressable style = {styles.container}>              
                
            
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       {groupName}             
                    </Text>
            <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama Number: {MembaId}                
                    </Text>    

                   

                     <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Group Benefits (Ksh): {(memberChmBenefit).toFixed(2)}
                    </Text>    

                    
                    
                    
                   
                      
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Chama Phone: {groupContact}                  
                    </Text> 
                   
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Membership Status: {AcStatus}                    
                    </Text> 
            
                    
                
        </Pressable>
    );
}; 

export default ChmMbrShpInfo