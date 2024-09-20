import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      rafikiName: string,
      id:string,
      rafikicntct: string,  
      rafikiEmail:string,
      
      rafikiamnt:number,
      rafikiprcntg:number
      rafikidesc:string,
      rafikirpymntperiod:number,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         
         rafikiName,  
         rafikicntct,
         id,
         rafikiamnt,
         rafikidesc,  
         rafikiprcntg,
         rafikirpymntperiod,

                 
   }} = props ;
   const navigation = useNavigation();
   const SndChmMmbrMny = () => {
      navigation.navigate ("DtldPalLnInfo", {id})
   }
 
    return (
      <TouchableOpacity 
      onPress={SndChmMmbrMny}
      style = {styles.container}>             
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Name: {rafikiName}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Contact: {rafikicntct}                 
                    </Text>
                              
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Loan Amount: {rafikiamnt.toFixed(2)}
                       
                    </Text>

                    

        </TouchableOpacity>
    );
}; 

export default ViewSMDeposts