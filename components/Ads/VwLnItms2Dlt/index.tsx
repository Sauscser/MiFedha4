import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import {  graphqlOperation, API,Auth} from 'aws-amplify';

import styles from './styles';
import { deleteSokoAd } from '../../../src/graphql/mutations';



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

   const [isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   
   const DeleteSlsAd = async()=>{
      if(isLoading){
        return;
      }
      setIsLoading(true);
          try{
              await API.graphql(
                graphqlOperation(deleteSokoAd,{
                  
                    input:{id:id}
                                                                      
                  
                })
              )
          }
          catch(error){
            console.log(error)
            if(error){
              Alert.alert("Retry or update app or call customer care")
              return;
            }
          }
            setIsLoading(false)
            Alert.alert("Ad deleted. Refresh to load other ads")
        }
  
        
   
    return (
      <TouchableOpacity 
      onPress={DeleteSlsAd}
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

                   
                    </TouchableOpacity>
    );
}; 

export default ViewSMDeposts