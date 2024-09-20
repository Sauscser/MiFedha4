import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      sokokntct: string,
      
      id: string,
      sokoname:string,
      sokoprice: number,
      
    
      sokolnprcntg:number
      sokodesc:string,
      sokolpymntperiod:number,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         
         sokokntct,  
         
         sokoname,
         sokoprice,
        
        id,
         sokodesc,  
         sokolnprcntg,
         sokolpymntperiod,

                 
   }} = props ;

   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("DtldSalesInfo", {id})
   }
   
    return (
      <TouchableOpacity 
      onPress={SndChmMmbrMny}
      style = {styles.container}>  
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Bizna Contact: {sokokntct}                 
                    </Text>

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                     Item Name: {sokoname}
                    </Text>                                      
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Item Price: {sokoprice.toFixed(2)} 
                       
                    </Text>

                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Discount Percentage: {sokolnprcntg.toFixed(2)} %
                       
                    </Text>
                   

                    <Text style ={styles.amountoffered} numberOfLines={2}>                         
                       {/* amount*/} 
                     Item Description: {sokodesc}
                     
                    </Text>
                    
                    </TouchableOpacity>
    );
}; 

export default ViewSMDeposts