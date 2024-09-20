import React from 'react';
import { Text,    ScrollView} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      policy: string,
      
    }}

const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      policy,
      
   }} = props ;
   
    return (
                
            <ScrollView >
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {policy}               
                    </Text>
            </ScrollView>
            
                     
        
                
        
    );
}; 

export default CredSlrCvLnStts