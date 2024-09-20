import React from 'react';
import {View, Text, ScrollView} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      rafikiName: string,
      
      rafikicntct: string,  
      rafikiEmail:string,
      
      rafikiamnt:number,
      rafikiprcntg:number
      rafikidesc:string,
      rafikirpymntperiod:number,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         
         rafikiName,  
         rafikicntct,
         rafikiEmail,
         rafikiamnt,
         rafikidesc,  
         rafikiprcntg,
         rafikirpymntperiod,

                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
              
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Name: {rafikiName}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Contact: {rafikicntct}                 
                    </Text>

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                     Loaner Email: {rafikiEmail}
                    </Text>                                      
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Loan Amount: {rafikiamnt.toFixed(2)}
                       
                    </Text>

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Repayment days: {rafikirpymntperiod.toFixed(2)}
                       
                    </Text>

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Annual Percentage Rate: {rafikiprcntg.toFixed(2)}
                       
                    </Text>
            

                    <Text style ={styles.amountoffered} numberOfLines={2}>                         
                       {/* amount*/} 
                     Pal Loan Description: {rafikidesc}
                  
                    </Text>
                    
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts