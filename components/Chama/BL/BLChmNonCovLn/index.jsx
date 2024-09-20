import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text,  Pressable,  } from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      id: string,
      lonBala:number,
      loaneeName:string,
      createdAt:string
      
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         id,
         lonBala,
         loaneeName,
         createdAt
         
   }} = props ;

   const navigation = useNavigation();
    
   const SndChmMmbrMny = () => {
      navigation.navigate("BLChmMmberNonCovs", {id})
   }
   
    return (
       <Pressable 
       onPress={SndChmMmbrMny}
       style = {styles.container}>          
          
                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Loan ID: {id}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Member Name: {loaneeName}                
                    </Text>  
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Loan Balance: (Ksh) {lonBala.toFixed(2)}                
                    </Text>  

                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Time given: {createdAt}                
                    </Text>   
                                
               
        </Pressable>
    );
}; 

export default ChmMbrShpInfo