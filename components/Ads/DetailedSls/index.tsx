import React from 'react';
import {View, Text, ScrollView} from 'react-native';


import styles from './styles';



export interface SMAccount {
    SMAc: {
      sokokntct: string,
      
      
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
        
        
         sokodesc,  
         sokolnprcntg,
         sokolpymntperiod,

                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
              
            
            <ScrollView >              
                       
                        
                     

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
                       Percentage Discount: {sokolnprcntg.toFixed(2)} %
                       
                    </Text>

                              

                    <Text style ={styles.amountoffered} >                         
                       {/* amount*/} 
                     Sales Description: {sokodesc}
                     
                    </Text>
                    
                    
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts