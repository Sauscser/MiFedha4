import React from 'react';
import {View, Text, ScrollView} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      grpContact: string,
      
      grpName: string,  
      venture:string,
      
      oprtnArea:string,
      description:string,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         
         grpContact,  
         grpName,
         venture,
         oprtnArea,
         description,  

                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
              
            
            <ScrollView >              
                       
                        
                     <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Name: {grpName}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Chama Contact: {grpContact}                 
                    </Text>
                                      
                    
                    <Text style ={styles.amountoffered} >                       
                       {/* amount*/} 
                       Chama Venture: {venture}
                       
                    </Text>

                    <Text style ={styles.amountoffered} >                       
                       {/* amount*/} 
                      Base Region/Town: {oprtnArea}
                       
                    </Text>

                    <Text style ={styles.amountoffered} >                       
                       {/* amount*/} 
                       Chama Description: {description}
                       
                    </Text>
                    
                    
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts