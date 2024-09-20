import React from 'react';
import {View, Text,    ScrollView} from 'react-native';
import styles from './styles';


export interface SMCvLnSttus {
    Loanee: {
      loanID:string,
        loaneePhn: string,
        amountGiven: number,
        amountExpectedBack: number,
        amountExpectedBackWthClrnc:number
        amountRepaid: number,
        lonBala: number,
        repaymentPeriod: number,
        loanerName:string,
        status: string,
        description: string,
        createdAt:string,
        updatedAt:string,
        
    }}

const SMCvLnStts = (props:SMCvLnSttus) => {
   const {
    Loanee: {
      loanID,
    loaneePhn,
    amountGiven,
    amountExpectedBack,
    amountExpectedBackWthClrnc,
    amountRepaid,
    lonBala,
    repaymentPeriod,
    loanerName,
    createdAt,
    updatedAt,
    status,
    description,
   }} = props ;
    return (
        <View style = {styles.container}>              
            
            
            <View style = {{alignItems:"center"}}>
            <Text style = {styles.loanAdvert}>                       
                       {/*loaner details */}   
                       {loanerName}               
                    </Text>
            </View>
                  
            
            <ScrollView >              
                       
                        

                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loan Id: {loanID}                 
                    </Text>
                    <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                       Loanee Contact: {loaneePhn}                 
                    </Text>
                    <Text style = {styles.ownerContact}>                       
                       {/*loaner details */}  
                       Amount Given (Ksh): {amountGiven.toFixed(2)}                
                    </Text>                     
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount Expected Back(Ksh): {amountExpectedBack.toFixed(2)}
                    </Text>   
                    <Text style ={styles.amountoffered}>                       
                       {/* amount*/} 
                       Amount Expected Back with Clearance(Ksh): {amountExpectedBackWthClrnc.toFixed(2)}
                    </Text>  
                    <Text style = {styles.repaymentPeriod}>                       
                       {/* repaymentPeriod*/}
                       Amount Repaid(Ksh): {amountRepaid.toFixed(2)}                  
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
                      Loan Status: {status}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                      Created At: {createdAt}                    
                    </Text> 
                    <Text style = {styles.interest}>                       
                       {/* interest*/}
                     Last Update: {updatedAt}                    
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