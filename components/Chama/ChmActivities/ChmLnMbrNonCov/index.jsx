import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text,  Pressable,  } from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      ChamaNMember: string,      
      memberName:string, 
      MembaId:string,      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         ChamaNMember,         
         memberName,  
         MembaId    
      
   }} = props ;

   const navigation = useNavigation();
    
   const SndChmMmbrMny = () => {
      navigation.navigate("ChmNonCovLons", {ChamaNMember})
   }
   
    return (
       <Pressable 
       onPress={SndChmMmbrMny}
       style = {styles.container}>          
          
                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama ID: {MembaId}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Member Name: {memberName}                
                    </Text>   
                                
               
        </Pressable>
    );
}; 

export default ChmMbrShpInfo