import React  from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './styles';



export interface SMAccount {
   SMAc: {
      loanID:string,
      loaneePhn: string,      
      loanerPhn: string,  
      loanername:string,
      loaneename: string,  
      amountgiven:number,
      amountexpected: number,      
      amountrepaid: number,  
      lonBala:number,
      repaymentPeriod:number,
      advregnu:number,
      description:string,
      createdAt:string,
      updatedAt:string,
              
    }}

const ViewSMDeposts = (props:SMAccount) => {
   const {
      SMAc: {
         loanID,
         loaneePhn,
         loanerPhn,  
         loanername,
         loaneename,
         amountgiven,
         amountexpected,
         amountrepaid,
         lonBala,
         repaymentPeriod,
         
         description,
         createdAt,
         updatedAt,
                 
   }} = props ;

 
    return (
        <View style = {styles.container}>              
          <View style = {{alignItems:"center"}}>
            <Text style = {styles.subTitle}>                       
                       {/*loaner details */}   
                       Loan ID: {loanID}             
                    </Text>
            </View>
            <ScrollView >              
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loaner Name : {loanername}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loanee Name: {loaneename}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Loan Amount (Ksh): {amountgiven.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                     Amount Expected Back (Ksh): {amountexpected.toFixed(2)}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Repayment Period : {repaymentPeriod}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Amount Repaid : {amountrepaid.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Balance: {lonBala.toFixed(2)}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      Loaner Contact : {loanerPhn}                 
                    </Text>

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loanee Contact: {loaneePhn}                 
                    </Text>                                                               
                    
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Created At: {createdAt}
                    </Text>
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                     Last Update: {updatedAt}
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      More: {description}                 
                    </Text>
                    
                                       
        </ScrollView>
                
        </View>
    );
}; 

export default ViewSMDeposts