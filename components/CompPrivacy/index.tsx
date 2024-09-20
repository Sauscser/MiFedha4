import React from 'react';
import { Text,    ScrollView} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      privacy: string,
      
    }}

const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      privacy,
      
   }} = props ;
   
    return (
                
            <ScrollView >
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {privacy}               
                    </Text>
            </ScrollView>
            
                     
        
                
        
    );
}; 

export default CredSlrCvLnStts