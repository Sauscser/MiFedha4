import React from 'react';
import {View, Text,    ScrollView} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID:string,
        loanerPhn: string,
        amountgiven: number,
        amountexpected: number,
        amountrepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        advregnu: string,
        loaneename:string,
        status: string,
        description: string,
        createdAt:string,
        updatedAt:string,
        amountExpectedBackWthClrnc: number,
        DefaultPenaltySM2:number,
        advEmail:string
        
        
    }}

const SMCvLnStts = (props:SMCvLnSttus) => {
   const {
    Loanee: {
      loanID,
    loanerPhn,
    amountgiven,
    amountexpected,
    amountrepaid,
    lonBala,
    repaymentPeriod,
    advregnu,
    amountExpectedBackWthClrnc,
    DefaultPenaltySM2,
    loaneename,
    status,
    description,
    createdAt,
    advEmail,
   }} = props ;
    return (
        <View style = {styles.container}>              
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {loaneename}               
                    </Text>
            </View>
             
            <ScrollView >              
                       
                        
            <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {loanID}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Company Contact: {loanerPhn}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Amount Given (Ksh): {amountgiven.toFixed(2)}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount Expected Back(Ksh): {amountexpected.toFixed(2)}
                    </Text>   
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount Repaid(Ksh): {amountrepaid.toFixed(2)}                  
                    </Text> 
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                      Balance if Blacklisted(Ksh): {amountExpectedBackWthClrnc.toFixed(2)}
                    </Text>   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Company Blacklisting Penalty(Ksh): {DefaultPenaltySM2.toFixed(2)}
                    </Text>   
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Loan Balance(Ksh): {lonBala.toFixed(2)}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                       Repayment Period in days: {repaymentPeriod}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Advocate Registration Number: {advregnu}                    
                    </Text> 

                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Advocate Email: {advEmail}                    
                    </Text>
                    
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Loan Status: {status}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Created At: {createdAt}                    
                    </Text> 
                     
                    <ScrollView>
                    <Text style = {styles.loanerotherdescriptions} >                       
                       {/* other description*/} 
                       Other Specifications: {description}                 
                    </Text>   
                    </ScrollView>              
            
                
                
            
        </ScrollView>
                
        </View>
    );
}; 

export default SMCvLnStts