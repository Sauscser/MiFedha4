import React, {useEffect, useState} from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import {createSMAccount, updateCompany} from '../../../../src/graphql/mutations';
import { getCompany, listSMAccounts, } from '../../../../src/graphql/queries';
import {Auth,  graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  
  TextInput,
  ScrollView,
  
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';


  


const CreateAcForm = (props) => {

  
  const navigation = useNavigation();

  const [nationalId, setNationalid] = useState('');
  
  
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');

  
      const ChckUsrExistence = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(listSMAccounts,
              { filter: 
                {
                  and:{
                    nationalid: { eq: nationalId},
                    
                }                          
                }}
            )
          )

          const ChckUsrExistence2 = async () => {
            const userInfoz = await Auth.currentAuthenticatedUser();
            try {
              const UsrDtlsz:any = await API.graphql(
                graphqlOperation(listSMAccounts,
                  { filter: 
                    {
                      and:{
                        awsemail: { eq: userInfo.attributes.email},
                        
                    }                          
                    }}
                )
              )

          const gtCompDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
              const compDtls :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const actvSMUsrs = compDtls.data.getCompany.ttlActiveUsers;
                
              
            const onCreateNewSMAc = async () => {
              if(isLoading){
                return;
              }
              setIsLoading(true);
              try {
                await API.graphql(
                graphqlOperation(createSMAccount, {
                input: {
                nationalid: nationalId,
                name: userInfo.username,
                phonecontact: userInfo.attributes.phone_number,
                awsemail: userInfo.attributes.email,
                balance: 0,
                                   
                pw: pword,
                nationality: "Kenyan",
                MFKubwaCost: 0,
                MFKubwaNetCost: 0,
                MFNdogoDue: 0,
                MFNdogoNet: 0,
                loanAcceptanceCode:userInfo.attributes.email,
      
                ttlDpstSM: 0,
                TtlWthdrwnSM: 0,
      
                TtlActvLonsTmsLnrCov: 0,
                TtlActvLonsTmsLneeCov: 0,
                TtlActvLonsAmtLnrCov: 0,
                TtlActvLonsAmtLneeCov: 0,
                TtlBLLonsTmsLnrCov: 0,
                TtlBLLonsTmsLneeCov: 0,
                TtlBLLonsAmtLnrCov: 0,
                TtlBLLonsAmtLneeCov: 0,
                TtlClrdLonsTmsLnrCov: 0,
                TtlClrdLonsTmsLneeCov: 0,
                TtlClrdLonsAmtLnrCov: 0,
                TtlClrdLonsAmtLneeCov: 0,
                
                TtlActvLonsTmsLneeChmCov: 0,
                TtlActvLonsAmtLneeChmCov: 0,
                TtlBLLonsTmsLneeChmCov: 0,
                TtlBLLonsAmtLneeChmCov: 0,
                TtlClrdLonsTmsLneeChmCov: 0,
                TtlClrdLonsAmtLneeChmCov: 0,
                   
                TtlActvLonsTmsSllrCov: 0,
                TtlActvLonsTmsByrCov: 0,
                TtlActvLonsAmtSllrCov: 0,
                TtlActvLonsAmtByrCov: 0,
                TtlBLLonsTmsSllrCov: 0,
                TtlBLLonsTmsByrCov: 0,
                TtlBLLonsAmtSllrCov: 0,
                TtlBLLonsAmtByrCov: 0,
                TtlClrdLonsTmsSllrCov: 0,
                TtlClrdLonsTmsByrCov: 0,
                TtlClrdLonsAmtSllrCov: 0,
                TtlClrdLonsAmtByrCov: 0,
                
              
                TtlActvLonsTmsLnrNonCov: 0,
                TtlActvLonsTmsLneeNonCov: 0,
                TtlActvLonsAmtLnrNonCov: 0,
                TtlActvLonsAmtLneeNonCov: 0,
                TtlBLLonsTmsLnrNonCov: 0,
                TtlBLLonsTmsLneeNonCov: 0,
                TtlBLLonsAmtLnrNonCov: 0,
                TtlBLLonsAmtLneeNonCov: 0,
                TtlClrdLonsTmsLnrNonCov: 0,
                TtlClrdLonsTmsLneeNonCov: 0,
                TtlClrdLonsAmtLnrNonCov: 0,
                TtlClrdLonsAmtLneeNonCov: 0,
                
                TtlActvLonsTmsLneeChmNonCov: 0,
                TtlActvLonsAmtLneeChmNonCov: 0,
                TtlBLLonsTmsLneeChmNonCov: 0,
                TtlBLLonsAmtLneeChmNonCov: 0,
                TtlClrdLonsTmsLneeChmNonCov: 0,
                TtlClrdLonsAmtLneeChmNonCov: 0,
                
                TtlActvLonsTmsSllrNonCov: 0,
                TtlActvLonsTmsByrNonCov: 0,
                TtlActvLonsAmtSllrNonCov: 0,
                TtlActvLonsAmtByrNonCov: 0,
                TtlBLLonsTmsSllrNonCov: 0,
                TtlBLLonsTmsByrNonCov: 0,
                TtlBLLonsAmtSllrNonCov: 0,
                TtlBLLonsAmtByrNonCov: 0,
                TtlClrdLonsTmsSllrNonCov: 0,
                TtlClrdLonsTmsByrNonCov: 0,
                TtlClrdLonsAmtSllrNonCov: 0,
                TtlClrdLonsAmtByrNonCov: 0,
      
                ttlNonLonsRecSM: 0,
                ttlNonLonsSentSM:0,
                ttlNonLonsRecChm: 0,
                ttlNonLonsSentChm:0,
              
                MaxTymsBL: 0,
                MaxTymsIHvBL: 0,

                TymsIHvGivnLn: 0,
                TymsMyLnClrd: 0,
                

                DefaultPenaltySM:0,

                MaxAcBal:10000000,

                acStatus: 'AccountActive',
                deActvtnReason:"None",
                blStatus: 'AccountNotBL',
                loanStatus: "NoLoan",
                loanLimit: 10000000,
                nonLonLimit:10000000,
                withdrawalLimit: 5000000,
                depositLimit: 5000000,
                owner:userInfo.attributes.sub
                        },
                      }),
                    );
                    
                  } catch (error) {
                    if (error){
                      Alert.alert("Creation unsuccessful; Retry")
                      return
                    }
                  
                  }
                  await updtActAdm();
                  setIsLoading(false);
                  
                };
                
                if (pword.length < 8)
                {Alert.alert("Short password; at least 8 mixed characters");
             
            } 
      
            else if (UsrDtls.data.listSMAccounts.items.length > 0) {
              Alert.alert("National ID already exists");
             
            }

           else if (UsrDtlsz.data.listSMAccounts.items.length > 0) {
              Alert.alert("Email already exists");
             
            }
           
            else {
              onCreateNewSMAc();
            }
      
                const updtActAdm = async()=>{
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try{
                      await API.graphql(
                        graphqlOperation(updateCompany,{
                          input:{
                            AdminId:"BaruchHabaB'ShemAdonai2",
                            ttlActiveUsers:parseFloat(actvSMUsrs) + 1,
                           
                          }
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
                  Alert.alert("Account successfully created")    
                  setIsLoading(false);
                }

                           
                
      }
      
      catch(e){
        console.log(e)
        if(e){
          Alert.alert("Retry or update app or call customer care")
          return;
      }
      }
        console.log(UsrDtls.data.listSMAccounts.items.length)          
      };

      
         
          await gtCompDtls();
        
      } catch (e) {
        if(e){Alert.alert("Retry or update app or call customer care")
      return}
        
      }
                
    }
    
    await ChckUsrExistence2 ();
   
  
  } catch (e) {
          if(e){Alert.alert("Retry or update app or call customer care")}
          return
        }
                  setIsLoading(false)
                  setNationalid('');
                  setPW('');
      }


useEffect(() =>{
  const natid=nationalId
    if(!natid && natid!=="")
    {
      setNationalid("");
      return;
    }
    setNationalid(natid);
    }, [nationalId]
     );

     useEffect(() =>{
      const pws=pword
        if(!pws && pws!=="")
        {
          setPW("");
          return;
        }
        setPW(pws);
        }, [pword]
         );
        
          return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Enter Your Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={nationalId}
                      onChangeText={setNationalid}
                      
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>National Id</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                                       
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Pass Word</Text>
                  </View>
        
                  <TouchableOpacity
                    onPress={ChckUsrExistence}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Create Main Account
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateAcForm;