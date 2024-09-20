import React from 'react';
import { Text,    ScrollView} from 'react-native';
import styles from './styles';


export interface ChmCvLnSttusRec {
    Loanee: {
      about: string,
      
    }}

const CredSlrCvLnStts = (props:ChmCvLnSttusRec) => {
   const {
    Loanee: {
      about,
      
   }} = props ;
  

   
    return (
                
            <ScrollView >
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {about}               
                    </Text>
            </ScrollView>
            
                     
        
                
        
    );
}; 

export default CredSlrCvLnStts