
import React from 'react';
import {View, Text,   ScrollView} from 'react-native';

import styles from './styles';


export interface ChmaInfo {
    ChmDtls: {
      
      BusKntct: string,
      netEarnings: number,
      busName: string,
      TtlEarnings: number,
      earningsBal: number
      
      description: string,
        
    }}

const ChmInfo = (props:ChmaInfo) => {
   const {
      ChmDtls: {
        
      BusKntct,
      netEarnings,
      busName,
      TtlEarnings,
      earningsBal,
      
      description,
   }} = props ;

    return (
        <View style = {styles.container}>              
            
            
            <ScrollView >       
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Business Info          
                    </Text>
            </View>      

                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                      Business Name: {busName}                
                    </Text> 
                    
                   
                                                                   
                    
                      

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Business Balance : {netEarnings.toFixed(2)}
                    </Text>  

                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                      Description: {description}                
                    </Text>  
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ChmInfo