
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';

import styles from './styles';


export interface ChmaInfo {
    ChmDtls: {
      
      BusKntct: string,
      status: number,
      busName: string,
      TtlEarnings: number,
      earningsBal: number
      
      description: string,
        
    }}

const ChmInfo = (props:ChmaInfo) => {
   const {
      ChmDtls: {
        
      BusKntct,
      status,
      busName,
      TtlEarnings,
      earningsBal,
      
      description,
   }} = props ;

   const navigation = useNavigation();

   const SndChmMmbrMny = () => {
      navigation.navigate("TakeOverBizna", {BusKntct})
   }

    return (
      <Pressable 
      onPress={SndChmMmbrMny}
      style = {styles.container}>            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {busName}: {BusKntct}               
                    </Text>
            </View>
            
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                    Status: {status}                 
                    </Text>
                    

                    
        
                
        </Pressable>
    );
}; 

export default ChmInfo