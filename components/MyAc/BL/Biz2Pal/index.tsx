import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text,  Pressable,  } from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID:string,
        loaneePhn: string,
        
        lonBala: number,
        createdAt:string
        loaneename:string,
        
    }}

const SMCvLnStts = (props:SMCvLnSttus) => {
   const {
    Loanee: {
      loanID,
    loaneePhn,
    
    lonBala,
    createdAt,
    loaneename,
   
   }} = props ;

   const navigation = useNavigation()

   
   const SndChmMmbrMny = () => {
      navigation.navigate("BLBiz2Pal", {loanID})
   }
    return (
        <Pressable 
       onPress={SndChmMmbrMny}
       style = {styles.container}>            
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {loaneename}               
                    </Text>
            </View>
           
                   <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {loanID}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loanee Contact: {loaneePhn}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                      Loan Balance (Ksh): {lonBala}                
                    </Text>   

                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Time given: {createdAt}                
                    </Text>                    
                    
                     
          
        </Pressable>
    );
}; 

export default SMCvLnStts