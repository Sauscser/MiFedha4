
import {View, Text, Alert, useWindowDimensions, ScrollView, Pressable } from 'react-native';


import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {  graphqlOperation, API,Auth} from 'aws-amplify';
import { getAgent, getCompany, getSAgent } from '../../../src/graphql/queries';
import { RotateInUpLeft } from 'react-native-reanimated';



export interface SMAccount {
  Agent: {
      id: string,
      latitude:string,
      longitude:string,
      MFNWithdrwlFee:number,
      name: string,  
      phonecontact:string,
      town:string,
    }}

const ViewSMDeposts = (props:SMAccount) => {

  
   const {
    Agent: {
         id,
         name,  
         town,
         phonecontact,
         latitude,
         longitude,
         MFNWithdrwlFee,
         
                 
   }} = props ;

   const[MFKWithdrwlFee, setMFKWithdrwlFee] = useState("");
   const[CompWithdrwlFee, setCompWithdrwlFee] = useState("");
   const[MFKWDFeeFrmCmp, setMFKWDFeeFrmCmp] = useState("");
   const[MFNWDFFrmCmp, setMFNWDFFrmCmp] = useState("");
   const[UsrWthdrwlFees, setUsrWthdrwlFees] = useState("");
  const width = useWindowDimensions().width;
  const[isLoading, setIsLoading] = useState(false);
  const route = useRoute();

  const fetchMFNDtls = async () =>{
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try{
      const MFNDtls :any= await API.graphql(
        graphqlOperation(getAgent,{phonecontact:route.params.phonecontact})
        );
      
        const sagentregno = MFNDtls.data.getAgent.sagentregno;
     
        
    
        const fetchMFKDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const MFNDtlsz :any= await API.graphql(
              graphqlOperation(getSAgent,{saPhoneContact:sagentregno})
              );
              setMFKWithdrwlFee(MFNDtlsz.data.getSAgent.MFKWithdrwlFee);

            
              const fetchCompDtls = async () =>{
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try{
                  const MFNDtlszz :any= await API.graphql(
                    graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                    );
                    setCompWithdrwlFee(MFNDtlszz.data.getCompany.companyCom); 
                    setUsrWthdrwlFees(MFNDtlszz.data.getCompany.UsrWthdrwlFees); 
                    setMFNWDFFrmCmp(MFNDtlszz.data.getCompany.agentCom);
                    setMFKWDFeeFrmCmp(MFNDtlszz.data.getCompany.sagentCom);
                     
                  
                   
                } catch (error) {
                    
                  }
             
                setIsLoading(false);
                            }
                            await fetchCompDtls();
             
          } catch (error) {
              
            }
       
          setIsLoading(false);
                      }

                      await fetchMFKDtls();
       
    } catch (error) {
        
      }
 
   

    setIsLoading(false);
      
    }
  
    
    useEffect(() => {
      fetchMFNDtls();
    }, []);
 
    return (
               
         <View style={styles.container}>
          {/* Bed & Bedroom  */}
          <Text style={styles.ownerName}>
          MiFedha Ndogo Name:{name}
          </Text>
          
          <Text style={styles.ownerName}>
          MiFedha Ndogo Number:{phonecontact}
          </Text>

          <Text style={styles.amountoffered} >
          Withdrawal Fee:{parseFloat(UsrWthdrwlFees)*100}%
          </Text>


          <Text style={styles.amountoffered} numberOfLines={4}>
          Company Disc:{20 - parseFloat(CompWithdrwlFee)}%
          </Text>

          {/* Type & Description */}
          <Text style={styles.amountoffered} numberOfLines={2}>

          MiFedha Kubwa Disc:{MFKWithdrwlFee}%
          </Text>

          <Text style={styles.amountoffered} numberOfLines={4}>

          MiFedha Ndogo Disc:{MFNWithdrwlFee}%
          </Text>

          {/* Type & Description */}
          <Text style={styles.amountoffered} numberOfLines={2}>
          Total Disc:{(20 - parseFloat(CompWithdrwlFee) )+MFKWithdrwlFee + MFNWithdrwlFee}%
          </Text>

          {/*  Old price & new price */}
          
        </View>
      
       
    );
}; 

export default ViewSMDeposts