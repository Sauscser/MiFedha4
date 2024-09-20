import React from 'react';
import {View, Text,    ScrollView} from 'react-native';

import styles from './styles';


export interface ChamaRemitInfo {
    ChamaRemitDtls: {
      id: string,
      grpContact: string,
      recipientPhn: string,
      receiverName:string,
      memberId:string,
      amountSent: number,    
      description: string,
      
      status: string,
      createdAt:string,
      
    }}

const ChmRemitInfo = (props:ChamaRemitInfo) => {
   const {
      ChamaRemitDtls: {
         id,
         
         memberId,
         recipientPhn,
         receiverName,
         status,
         amountSent,
         createdAt,       
         description,
        
       
   }} = props ;

   /*
   const ContriToMmbr = props.ChamaRemitDtls;
   const navigation = useNavigation();

   const go2Contri2Mbr = () =>{
      navigation.navigate("ChmContrs", {ContriToMmbrId: ContriToMmbr.memberId});
   }
   */
   
    return (
       /* <Pressable 
        onPress={go2Contri2Mbr}
        style = {styles.container}>       </Pressable>       
            */
            <View style = {styles.wholeVw}>
            <ScrollView >       
               

                     <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Transaction ID: {id}                
                    </Text>                                               
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Member Name: {receiverName}                
                    </Text>    
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                     Member Chama ID: {memberId}                
                    </Text>                   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount (Ksh): {amountSent.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                      Member Contact: {recipientPhn}                  
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Time Sent: {createdAt}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Status: {status}                    
                    </Text> 



                    
                    <ScrollView>
                    
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       More about Remittance: {description}                 
                    </Text>   
                    </ScrollView>              
            
                
                
            
        </ScrollView>
                
        </View>
    );
}; 

export default ChmRemitInfo