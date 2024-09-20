import React from 'react';
import {View, Text,   ScrollView} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
      
      senderPhn: string,  
      SenderName: string,
      amount: number,
      description: string, 
      status: string,
      createdAt:string,
      updatedAt:string,
              
    }}

const SMNonLnRec = (props:SMAccount) => {
   const {
      SMAc: {
         id,
         senderPhn,  
         SenderName,
         amount,
         description, 
         status,
         createdAt,
         updatedAt,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
            
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       {SenderName}             
                    </Text>
            </View>
                  
                  
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Transaction ID: {id}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Amount (Ksh): {amount.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Sender Contact: {senderPhn}                
                    </Text>                     
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Created At: {createdAt}
                    </Text>
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                     Last Update: {updatedAt}
                    </Text>
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                     More: {description}                  
                    </Text> 
                    
        </ScrollView>
                
        </View>
    );
}; 

export default SMNonLnRec