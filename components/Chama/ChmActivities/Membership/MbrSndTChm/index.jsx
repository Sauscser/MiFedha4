import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ImageBackground, Pressable, TextInput, ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      ChamaNMember: string,
      MembaId:string,
      groupName:string,
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         ChamaNMember,
         MembaId,
         groupName,
        
   }} = props ;

   const navigation = useNavigation();
    
   const SndChmMmbrMny = () => {
      navigation.navigate("Contributionssss", {ChamaNMember})
   }
   
    return (
       <Pressable 
       onPress={SndChmMmbrMny}
       style = {styles.container}>          
          
                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama Number: {MembaId}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Chama Name: {groupName}                
                    </Text>   
                                
               
        </Pressable>
    );
}; 

export default ChmMbrShpInfo