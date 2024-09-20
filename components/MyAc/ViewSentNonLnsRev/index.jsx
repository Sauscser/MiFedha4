import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';

import styles from './styles';


export interface SMAccount {
    SMAc: {
      id: string,
      SenderName:string,
      recPhn: string,  
      RecName: string,
      amount: number,
      description: string, 
      status: string,
      createdAt:string,
      updatedAt:string,
              
    }}

const SMNonLnSnt = (props:SMAccount) => {
   const {
      SMAc: {
         id,
         recPhn,  
         RecName,
         SenderName,
         amount,
         description, 
         status,
         createdAt,
         updatedAt,
                 
   }} = props ;

   const navigation = useNavigation();
    
   const SndChmMmbrMny = () => {
     navigation.navigate("SendNonLonsRev", {id})
   }

 
    return (
        <Pressable 
        
        onPress={SndChmMmbrMny}
        style = {styles.container}>
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       {RecName}             
                    </Text>
            </View>
                  
                  
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       ID: {id}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Amount (Ksh): {amount.toFixed(2)}                 
                    </Text>
                    
                    
        </ScrollView>
                
        </Pressable>
    );
}; 

export default SMNonLnSnt