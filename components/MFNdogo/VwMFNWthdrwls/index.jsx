import React from 'react';
import {View, Text,   ScrollView} from 'react-native';


import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
      
      
      agContact: string,
      Amount: number,
      
      createdAt:string,
      updatedAt:string,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         id,
         
         Amount,
         
         createdAt,
         updatedAt,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
            
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Transaction ID {id}             
                    </Text>
            </View>
              
            <ScrollView >              
                
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Amount (Ksh): {Amount.toFixed(2)}                 
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