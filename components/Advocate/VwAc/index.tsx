import React from 'react';
import {View, Text, ScrollView} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      advregnu: string,
      
      TtlEarnings: number,  
      advBal:number,
      
      createdAt:string,
      updatedAt:string,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         
         TtlEarnings,  
         advBal,
         createdAt,
         updatedAt,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
              
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Total Earnings(Ksh): {TtlEarnings.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Account Balance (Ksh): {advBal.toFixed(2)}                 
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