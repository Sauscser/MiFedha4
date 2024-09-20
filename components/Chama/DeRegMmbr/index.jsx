import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text,  Pressable,  View, ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaMmbrshpInfo {
    ChamaMmbrshpDtls: {
      id: string,
      memberContact:string,
      memberName:string,
      
    }}

const ChmMbrShpInfo = (props:ChamaMmbrshpInfo) => {
   const {
      ChamaMmbrshpDtls: {
         id,
         memberContact,
         memberName,
         
   }} = props ;

   const navigation = useNavigation();
    
   const SndChmMmbrMny = () => {
      navigation.navigate("RemoveChmMbrs", {id})
   }
   
    return (
       <Pressable 
       onPress={SndChmMmbrMny}
       style = {styles.container}>          
          
          <View style = {{alignItems:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       Member Name: {memberName}               
                    </Text>
            </View>


            <ScrollView > 
                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Member Chama ID: {id}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Member Contact: {memberContact}                
                    </Text>   
                   
             </ScrollView>                   
               
        </Pressable>
    );
}; 

export default ChmMbrShpInfo