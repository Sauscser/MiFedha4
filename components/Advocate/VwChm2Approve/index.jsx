import { useNavigation } from '@react-navigation/native';
import React  from 'react';
import {View, Text, Pressable, Alert} from 'react-native';
import {API, graphqlOperation, Auth} from "aws-amplify"
import styles from './styles';
import { updateReqLoan, updateReqLoanChama, updateSMAccount } from '../../../src/graphql/mutations';
import Communications from 'react-native-communications';


export interface SMAccount {
   SMAc: {
      id:string,
      loaneePhone: string,      
      loanerPhone:string,
      loanerName: string,
      loaneeName: string,  
      amount:number,
      repaymentAmt: number,      
      chamaPhone:string,
      description:string,
      defaultPenalty:number,
      repaymentPeriod:number,
      
      createdAt:string,
      
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         id,
         loaneePhone,
         loanerPhone, 
         loanerName,
         loaneeName,
         amount,
         repaymentAmt,
         chamaPhone,
         defaultPenalty,
         description,
         repaymentPeriod,
         
         
         createdAt,
         
                 
   }} = props ;

   const navigation = useNavigation();
   
   const SndChmMmbrMny3 = () => {
    navigation.navigate("Vw2ApproveChmReq")
   }
   const SndChmMmbrMny = () => {
     
                                                    
         try{
              API.graphql(
               graphqlOperation(updateReqLoanChama,{
                 input:{
                   id:id,
                   statusNumber:1,
                   
                 }
               })
             )
         }
         catch(error){
           if(error){
             Alert.alert("Retry or update app or call customer care")
             return;
         }
         }
         SndChmMmbrMny3();

         Communications.textWithoutEncoding(chamaPhone,
          'MiFedha. Hi, I have witnessed the'
         + ' loan contract between ' + loanerName +
         ' group and ' + loaneeName + ' the Loaned. Thank you.');  
       
   }

  const SndChmMmbrMny2 = () => {

    try{
      API.graphql(
       graphqlOperation(updateReqLoanChama,{
         input:{
           id:id,
           statusNumber:2,
           
         }
       })
     )
 }
 catch(error){
   if(error){
     Alert.alert("Retry or update app or call customer care")
     return;
 }
 }
 SndChmMmbrMny3();
 
 Communications.textWithoutEncoding(loaneePhone, 
  'MiFedha. Hi, I could not witness the '
 + ' loan contract between you ' + loaneeName +
 ' the Loanee and ' + loanerName + ' Please get in touch for more info. Thank you.');    
}

   
    return (
        
                  
                  
            <View style = {{marginTop:"10%"}}>

                  
                       
                      <View >
                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      MiFedha.
                      Greetings! We, {loaneeName}, the loanee and {loanerName}, the Loaning Group humbly 
                      request that you witness our loan contract amounting to Ksh.
                     {amount}, repayable at a compund interest of {repaymentAmt}% per month by the end of {repaymentPeriod} days,
                      default penalty is Ksh. {defaultPenalty} and its description is as 
                      as follows: "{description}." You can reach
                     my loaner through {chamaPhone}. You can also reach me through {loaneePhone}. Thank you.
                      
                    </Text>
                    </View>  
                     
                    <View style = {styles.viewForPressables2}>
                    <View>
                    <Pressable
                      onPress={SndChmMmbrMny}
                      style = {styles.loanFriendButton}
                      >            
                        <Text>Witness</Text>            
                    </Pressable>
                    </View>   
                    <View>
                    <Pressable
                      onPress={SndChmMmbrMny2}
                      style = {styles.loanFriendButton}>            
                        <Text>Decline</Text>            
                    </Pressable>  
                    </View>
                     
                    </View>
                      

      
            </View>
            
                
        
    );
}; 

export default ViewSMDeposts