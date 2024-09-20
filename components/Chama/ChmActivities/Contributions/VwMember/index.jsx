import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';


export interface MmbrContriInfo {
   MmbrContriDtls: {
     id: string,
     grpContact: string,
     
     GrpName:string,
     
     contriAmount: number,
   
    
   
     status: string,
     createdAt:string,
     
   }}

const MemberContriInfo = (props:MmbrContriInfo) => {
  const {
     MmbrContriDtls: {
        id,
        grpContact,
        
        GrpName,
        status,
        contriAmount,
        createdAt,       
      
      
      
  }} = props ;

  const navigation = useNavigation;

  const TryChmLn = () => {
   navigation.navigate("ChmLnsGvnOuts", {grpContact});
  }
   return (
       <View style = {styles.container}>              
           
           
           <ScrollView >       
              

                    <Text style = {styles.ownerContact}>                       
                      {/*loaner details */}  
                      Transaction ID: {id}                
                   </Text>                                               
                   <Text style = {styles.ownerContact}>                       
                      {/*loaner details */}  
                    Chama Name: {GrpName}                
                   </Text>                     
                   <Text style ={styles.amountoffered}>                       
                      {/* amount*/} 
                      Amount (Ksh): {contriAmount.toFixed(2)}
                   </Text>   
                   
                   <Text style = {styles.interest}>                       
                      {/* interest*/}
                      Time Sent: {createdAt}                    
                   </Text> 
                   <Text style = {styles.interest}>                       
                      {/* interest*/}
                     Status: {status}                    
                   </Text> 

       </ScrollView>
               
       </View>
   );
}; 

export default MemberContriInfo