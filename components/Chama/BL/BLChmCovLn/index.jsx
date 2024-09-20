import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text,  Pressable,  } from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      loanID: string,
      lonBala:number,
      loaneeName:string,
      createdAt:string
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         loanID,
         lonBala,
         loaneeName,
         createdAt
         
   }} = props ;

   const navigation = useNavigation();
    
   const SndChmMmbrMny = () => {
      navigation.navigate("BLChmMmberCovs", {loanID})
   }
   
    return (
       <Pressable 
       onPress={SndChmMmbrMny}
       style = {styles.container}>          
          
                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Loan ID: {loanID}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     member Name: {loaneeName}                
                    </Text>   
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     loan Balance Ksh: {lonBala.toFixed(2)}                
                    </Text>  

                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Time given: {createdAt}                
                    </Text>  
                                
               
        </Pressable>
    );
}; 

export default ChmMbrShpInfo