import React from 'react';
import {View, Text,   ScrollView} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      phonecontact: string,

    
      ttlEarnings: number,

      email: string,
      sagentregno: string,
      TtlFltIn: number,
      TtlFltOut: number,
      floatBal: number,
      latitude: number,
      longitude: number,
      agentEarningBal: number,

      createdAt:string,
      updatedAt:string,      
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         
         ttlEarnings,
   
         sagentregno,
         TtlFltIn,
         TtlFltOut,
         floatBal,
         
         agentEarningBal,
         createdAt,
         updatedAt,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
          
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Float In (Ksh): {TtlFltIn.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Float Out (Ksh): {TtlFltOut.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Float Balance (Ksh): {floatBal.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Earnings (Ksh): {ttlEarnings.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Earning Balance (Ksh): {agentEarningBal.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       MFKubwa Number: {sagentregno}                 
                    </Text>
                                      
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Created At: {createdAt}
                    </Text>
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                     Last Update: {updatedAt}
                    </Text>
                    
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts