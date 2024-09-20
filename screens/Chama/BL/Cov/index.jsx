import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {updateCompany, updateSMAccount, updateCvrdGroupLoans, updateGroup,  updateChamaMembers, } from '../../../../src/graphql/mutations';
import {getCompany, getSMAccount, getCvrdGroupLoans, getGroup, getChamaMembers } from '../../../../src/graphql/queries';
import {graphqlOperation, API, Auth} from 'aws-amplify';

import {useNavigation, useRoute} from '@react-navigation/native';


import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from './styles';


  


const BLChmCovLoanee = (props) => {
  const navigation = useNavigation();

  const [LonId, setLonId] = useState("");
  const [ChmMbrId, setChmMbrId] = useState("");
  const [SigntryPW, setSigntryPW] = useState("");
  
 
  const[isLoading, setIsLoading] = useState(false);
  


  const route = useRoute();
  

  
    
    const gtCompDtls = async () =>{
      
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await Auth.currentAuthenticatedUser();
    try{
      const compDtls :any= await API.graphql(
        graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
        );
        const ttlChmLnsInBlTymsCovs = compDtls.data.getCompany.ttlChmLnsInBlTymsCov
        const ttlChmLnsInBlAmtCovs = compDtls.data.getCompany.ttlChmLnsInBlAmtCov
        const userClearanceFees = compDtls.data.getCompany.userClearanceFee
        const ttlBLUsrss = compDtls.data.getCompany.ttlBLUsrs

        const gtLoanDtls = async () =>{
          if(isLoading){
            return;
          }
          setIsLoading(true);
          try{
            const compDtls2 :any= await API.graphql(
              graphqlOperation(getCvrdGroupLoans,{loanID:route.params.loanID})
              );
              const loaneePhns = compDtls2.data.getCvrdGroupLoans.loaneePhn
              const loanerPhns = compDtls2.data.getCvrdGroupLoans.grpContact
              const amountexpecteds = compDtls2.data.getCvrdGroupLoans.amountExpectedBack
              const amountrepaids = compDtls2.data.getCvrdGroupLoans.amountRepaid
              const lonBala = compDtls2.data.getCvrdGroupLoans.lonBala
              const interest = compDtls2.data.getCvrdGroupLoans.interest
              const dfltUpdate = compDtls2.data.getCvrdGroupLoans.dfltUpdate
              const crtnDate = compDtls2.data.getCvrdGroupLoans.crtnDate
              const dfltDeadLn = compDtls2.data.getCvrdGroupLoans.repaymentPeriod
              const createdAt = compDtls2.data.getCvrdGroupLoans.createdAt
              const statussxzs = compDtls2.data.getCvrdGroupLoans.status
              
              const amountExpectedBackWthClrncs = compDtls2.data.getCvrdGroupLoans.amountExpectedBackWthClrnc
              
              
              const memberIds = compDtls2.data.getCvrdGroupLoans.memberId
              
              const DefaultPenaltyChms = compDtls2.data.getCvrdGroupLoans.DefaultPenaltyChm

              const amountExpectedBackWthClrncss = parseFloat(userClearanceFees) * parseFloat(amountexpecteds) 
              + parseFloat(amountExpectedBackWthClrncs)

              

              const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const now1:any = "2024-05-20";
             
              
              
              
              
              
             

        
              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)

             

              let charz = createdAt;
              let char1z = charz.charAt(0)
              let char2z = charz.charAt(1)
              let char3z = charz.charAt(2)
              let char4z = charz.charAt(3)
              let char5z = charz.charAt(4)
              let char6z = charz.charAt(5)
              let char7z = charz.charAt(6)
              let char8z = charz.charAt(7)
              let char9z = charz.charAt(8)
              let char10z = charz.charAt(9)
              let char11z = charz.charAt(10)
              let char12z = charz.charAt(11)
              let char13z = charz.charAt(12)

              
              let crtnYrz = char1z+char2z+char3z+char4z;
              let crtnMnthz = char6z+char7z;
              let crtnDyz = char9z+char10z;
              let crtnHrz = char12z+char13z;
              const crtnYearsz = parseFloat(crtnYrz)*365;
              const crtnMnthsz = parseFloat(crtnMnthz)*30.4375;
              const daysAtCrtnz = crtnYearsz + crtnMnthsz + parseFloat(crtnDyz)

              const tmDif = daysUpToDate - dfltUpdate;
              const tmDif2 = daysUpToDate - crtnDate;

              const MmbrClrnceCosts = parseFloat(userClearanceFees) * parseFloat(amountexpecteds) + parseFloat(DefaultPenaltyChms);
              const MmbrClrnceCost = parseFloat(userClearanceFees) * parseFloat(amountexpecteds)
              

              const LonBal = parseFloat(lonBala);
              
              const paymentFrequency = compDtls2.data.getCvrdGroupLoans.paymentFrequency
              const installmentAmount = compDtls2.data.getCvrdGroupLoans.installmentAmount
              const LonBal1 = LonBal*Math.pow((1 + parseFloat(interest)/100), tmDif/parseFloat(paymentFrequency));
            
              const pymtFrqncy = tmDif2/parseFloat(paymentFrequency)
              const Amt2HvBnPaid = pymtFrqncy* parseFloat(installmentAmount)

              const LonBal4 = LonBal1 + MmbrClrnceCosts
              const LonBal5 = LonBal1 + MmbrClrnceCost
              const LonBal6 = parseFloat(lonBala) + parseFloat(DefaultPenaltyChms)

              const gtLoanerDtls = async () =>{
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try{
                  const compDtls3 :any= await API.graphql(
                    graphqlOperation(getGroup,{grpContact:loanerPhns})
                    );
                    const owners = compDtls3.data.getGroup.owner
                    const acStatuss = compDtls3.data.getGroup.status
                    const TtlBLLonsTmsLnrChmCovs = compDtls3.data.getGroup.TtlBLLonsTmsLnrChmCov
                    const TtlBLLonsAmtLnrChmCovs = compDtls3.data.getGroup.TtlBLLonsAmtLnrChmCov
                    const TtlActvLonsTmsLnrChmCovs = compDtls3.data.getGroup.TtlActvLonsTmsLnrChmCov
                    const TtlActvLonsAmtLnrChmCovs = compDtls3.data.getGroup.TtlActvLonsAmtLnrChmCov
                    const grpNames = compDtls3.data.getGroup.grpName
                    const tymsChmHvBLs = compDtls3.data.getGroup.tymsChmHvBL
                    const signitoryPWs = compDtls3.data.getGroup.signitoryPW
                    const objectionStatus =compDtls3.data.getGroup.objectionStatus;
                      
                    const gtLoaneeDtls = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                        const compDtls4 :any= await API.graphql(
                          graphqlOperation(getSMAccount,{awsemail:loaneePhns})
                          );
                          const TtlBLLonsTmsLneeChmCovs = compDtls4.data.getSMAccount.TtlBLLonsTmsLneeChmCov
                          const TtlBLLonsAmtLneeChmCovs = compDtls4.data.getSMAccount.TtlBLLonsAmtLneeChmCov
                          const phonecontact = compDtls4.data.getSMAccount.phonecontact
                          const TtlActvLonsAmtLneeChmCovs = compDtls4.data.getSMAccount.TtlActvLonsAmtLneeChmCov
                          const acStatusss = compDtls4.data.getSMAccount.acStatus
                          const namess = compDtls4.data.getSMAccount.name
                          const MaxTymsBLs =compDtls4.data.getSMAccount.MaxTymsBL;

                          const MmbDtls = async () =>{
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                              const compDtls5 :any= await API.graphql(
                                graphqlOperation(getChamaMembers,{ChamaNMember:memberIds})
                                );
                                const LnBalsss = compDtls5.data.getChamaMembers.LnBal
                               

                                const updateLoanDtls3 = async () => {
                                  if(isLoading){
                                    return;
                                  }
                                  setIsLoading(true);
                                  try{
                                      await API.graphql(
                                        graphqlOperation(updateCvrdGroupLoans, {
                                          input:{
                                            loanID:route.params.loanID,
                                            amountExpectedBackWthClrnc:LonBal6.toFixed(0),
                                            lonBala:LonBal6.toFixed(0),
                                            dfltUpdate: daysUpToDate,
                                            blOfficer:userInfo.attributes.email,
                                            DefaultPenaltyChm2:DefaultPenaltyChms.toFixed(0),
                                          }
                                        })
                                      )
                              
                                      
                                  }
                                  catch(error){
                                    
                                    if(error){
                                      console.log(error)
                                    Alert.alert("Error! Access denied!");
                                    return;
                                } 
                                 }
                                 Alert.alert(grpNames +", you have penalised "+ namess)
                                 Communications.textWithoutEncoding(phonecontact,'MiFedha. Hi '
                                 + namess + ', your loan of ID ' 
                                 +  route.params.loanID
                                 + ' has been penalised after blacklisting by '+ grpNames 
                                 + ' group. The following is a breakdown of your repayable loan: Loan balance before blacklisting was Ksh. '
                               + LonBal.toFixed(0) + '. Default Penalty as you had agreed with your loaner is Ksh. ' + parseFloat(DefaultPenaltyChms).toFixed(0) 
                               + '. Total current loan repayable: Ksh. '+ LonBal6.toFixed(0)
                                +'. For clarification call the group Admin: '
                               + userInfo.attributes.phone_number + '. Thank you. MiFedha');
                                
                                  setIsLoading(false);          
                                } 
  
                                
  
                                const updateLoanerDtls = async () => {
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                                await API.graphql(
                                  graphqlOperation(updateGroup,{
                                    input:{
                                      grpContact:loanerPhns,
                                      tymsChmHvBL: parseFloat(tymsChmHvBLs) + 1,
                                      TtlBLLonsTmsLnrChmCov: parseFloat(TtlBLLonsTmsLnrChmCovs) + 1,
                                      TtlBLLonsAmtLnrChmCov: (parseFloat(TtlBLLonsAmtLnrChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                      TtlActvLonsAmtLnrChmCov: (parseFloat(TtlActvLonsAmtLnrChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                      
                                    }
                                  })
                                )
                        
                                
                            }
                            catch(error){ 
                              if (error){
                                console.log(error)
                                Alert.alert("Error! Access denied!")
                                return}
                      }

                            setIsLoading(false);          
                            await updtActAdm ();
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
                                          ttlChmLnsInBlTymsCov: parseFloat(ttlChmLnsInBlTymsCovs) + 1,
                                          ttlChmLnsInBlAmtCov: (parseFloat(ttlChmLnsInBlAmtCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          ttlBLUsrs:parseFloat(ttlBLUsrss) + 1,
                                        }
                                      })
                                    )
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                    console.log(error)
                                  Alert.alert("Error! Access denied!")
                                  return;
                              }}
                              await updateLoaneeDtls();
                              setIsLoading(false);
                              }
                              
                              const updateLoaneeDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount,{
                                        input:{
                                          awsemail:loaneePhns,
                                          MaxTymsBL: parseFloat(MaxTymsBLs) + 1,
                                          TtlBLLonsTmsLneeChmCov: parseFloat(TtlBLLonsTmsLneeChmCovs) + 1,
                                          TtlBLLonsAmtLneeChmCov: (parseFloat(TtlBLLonsAmtLneeChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                          
                                          TtlActvLonsAmtLneeChmCov: (parseFloat(TtlActvLonsAmtLneeChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          blStatus:"AccountBlackListed",
                                          loanStatus: "LoanActive"
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  if (error){
                                    Alert.alert("Error! Access denied!")
                                  }
                                  }
                              await updateLoanDtls();
                                setIsLoading(false);          
                              } 

                              const updateLoanDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          loanID:route.params.loanID,
                                          amountExpectedBackWthClrnc:LonBal4.toFixed(0),
                                          lonBala:LonBal4.toFixed(0),
                                          status:"LoanBL",
                                          dfltUpdate:daysUpToDate,
                                          blOfficer:userInfo.attributes.email,
                                          DefaultPenaltyChm2:DefaultPenaltyChms.toFixed(0),
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  if(error){
                                    console.log(error)
                                  Alert.alert("Error! Access denied!");
                                  return;
                              } 
                               }
                              await updateMbrDtls();
                              
                                setIsLoading(false);          
                              } 

                              const updateMbrDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateChamaMembers, {
                                        input:{
                                          ChamaNMember:memberIds,
                                          LnBal:(parseFloat(LnBalsss)+ MmbrClrnceCosts).toFixed(0),
                                          blStatus:"AccountBlackListed",
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){
                                  if (error){
                                    Alert.alert("Blacklisting unsuccessful; Retry!")
                                    return
                                  }
                                   }
                              Alert.alert(grpNames +", you have blacklisted "+ namess)
                              Communications.textWithoutEncoding(phonecontact,'MiFedha. Hi '
                              + namess + ', your loan of ID ' 
                              +  route.params.loanID
                              + ' has been blacklisted by '+ grpNames 
                              + ' group. The following is a breakdown of your repayable loan: Loan balance before blacklisting was Ksh. '
                            + LonBal.toFixed(0) + '. Default Penalty as you had agreed with your loaner is Ksh. ' + parseFloat(DefaultPenaltyChms).toFixed(0) 
                            + '. Clearance fee is Ksh. ' + MmbrClrnceCost.toFixed(0) + '. compounded loan balance is Ksh. ' 
                            + LonBal1.toFixed(0) + '. Total current loan repayable: Ksh. '+ LonBal4.toFixed(0)
                             +'. For clarification call the group Admin: '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha');
                                setIsLoading(false);          
                              } 

                              const updateLoanerDtls2 = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateGroup,{
                                        input:{
                                          grpContact:loanerPhns,
                                                                                    
                                          TtlBLLonsAmtLnrChmCov: (parseFloat(TtlBLLonsAmtLnrChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                          TtlActvLonsAmtLnrChmCov: (parseFloat(TtlActvLonsAmtLnrChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                          
                                        }
                                      })
                                    )
                            
                                    
                                }
                                catch(error){ 
                                  if (error){
                                    console.log(error)
                                    Alert.alert("Error! Access denied!")
                                    return}
                          }
    
                                setIsLoading(false);          
                                await updtActAdm2 ();
                              } 
                              
                              if(LonBal === 0){
                                Alert.alert("Loanee has cleared this loan");
                                return;
                              }
                             
    
                              else if(acStatusss === "AccountInactive"){
                                Alert.alert("Loanee account has been deactivated");
                                return;
                              } 

                              else if (objectionStatus === "Objected")
                                 {Alert.alert("Operations on this group have been stopped")} 

                              else if (tmDif < parseFloat(paymentFrequency))
                                 {Alert.alert("Time to Blacklist is not yet")}

                                 
                              
                              else if (tmDif2 > parseFloat(paymentFrequency) 
                              && parseFloat(amountrepaids) < Amt2HvBnPaid && tmDif2 < dfltDeadLn
                              && statussxzs !== "LoanBL"){
                                updateLoanDtls3()
                              }
                              
                              else if (tmDif2 > parseFloat(dfltDeadLn) && statussxzs !== "LoanBL"){
                                updateLoanerDtls()
                              }                              
                              
    
                              else if (parseFloat(paymentFrequency) < tmDif && statussxzs === "LoanBL"){
                                updateLoanerDtls2()
                              }

                              else {Alert.alert("Retry or update app or call customer care")}
                              
                              
                      
                              const updtActAdm2 = async()=>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                    try{
                                        await API.graphql(
                                          graphqlOperation(updateCompany,{
                                            input:{
                                              AdminId:"BaruchHabaB'ShemAdonai2",
                                              
                                              ttlChmLnsInBlAmtCov: (parseFloat(ttlChmLnsInBlAmtCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                              
                                            }
                                          })
                                        )
                                    }
                                    catch(error){
                                      console.log(error)
                                      if(error){
                                        console.log(error)
                                      Alert.alert("Error! Access denied!")
                                      return;
                                  }}
                                  await updateLoaneeDtls2();
                                  setIsLoading(false);
                                  }
                                  
                                  const updateLoaneeDtls2 = async () => {
                                    if(isLoading){
                                      return;
                                    }
                                    setIsLoading(true);
                                    try{
                                        await API.graphql(
                                          graphqlOperation(updateSMAccount,{
                                            input:{
                                              awsemail:loaneePhns,
                                              
                                              
                                              TtlBLLonsAmtLneeChmCov: (parseFloat(TtlBLLonsAmtLneeChmCovs) + amountExpectedBackWthClrncss).toFixed(0),
                                              
                                              TtlActvLonsAmtLneeChmCov: (parseFloat(TtlActvLonsAmtLneeChmCovs) + (parseFloat(userClearanceFees) * parseFloat(amountexpecteds))).toFixed(0),
                                              blStatus:"AccountBlackListed",
                                              loanStatus: "LoanActive"
                                            }
                                          })
                                        )
                                
                                        
                                    }
                                    catch(error){
                                      if (error){
                                        console.log(error)
                                        Alert.alert("Error! Access denied!")
                                      }
                                      }
                                  await updateLoanDtls2();
                                    setIsLoading(false);          
                                  } 
    
                                  const updateLoanDtls2 = async () => {
                                    if(isLoading){
                                      return;
                                    }
                                    setIsLoading(true);
                                    try{
                                        await API.graphql(
                                          graphqlOperation(updateCvrdGroupLoans, {
                                            input:{
                                              loanID:route.params.loanID,
                                              amountExpectedBackWthClrnc:LonBal5.toFixed(0),
                                              lonBala:LonBal5.toFixed(0),
                                              status:"LoanBL",
                                              dfltUpdate:daysUpToDate,
                                              blOfficer:userInfo.attributes.email,
                                              DefaultPenaltyChm2:DefaultPenaltyChms.toFixed(0),
                                            }
                                          })
                                        )
                                
                                        
                                    }
                                    catch(error){
                                      console.log(error)
                                      if(error){
                                        console.log(error)
                                      Alert.alert("Error! Access denied!");
                                      return;
                                  } 
                                   }
                                  await updateMbrDtls2();
                                  
                                    setIsLoading(false);          
                                  } 
    
                                  const updateMbrDtls2 = async () => {
                                    if(isLoading){
                                      return;
                                    }
                                    setIsLoading(true);
                                    try{
                                        await API.graphql(
                                          graphqlOperation(updateChamaMembers, {
                                            input:{
                                              ChamaNMember:memberIds,
                                              LnBal:(parseFloat(LnBalsss)+ MmbrClrnceCost).toFixed(0),
                                              blStatus:"AccountBlackListed",
                                            }
                                          })
                                        )
                                
                                        
                                    }
                                    catch(error){
                                      if (error){
                                        Alert.alert("Blacklisting unsuccessful; Retry!")
                                        return
                                      }
                                       }
                                  Alert.alert(grpNames +", you have penalised after blacklisting "+ namess)
                                  Communications.textWithoutEncoding(phonecontact,'Hi '
                                  + namess + ', your loan of ID ' 
                                  +  route.params.loanID
                                  + ' has been Penalised after blacklisting by '+ grpNames 
                                  + ' group. The following is a breakdown of your repayable loan. Loan balance before blacklisting was Ksh. '
                                +LonBal.toFixed(0) 
                                + '. Clearance fee is Ksh. ' + MmbrClrnceCost.toFixed(0) + '. compounded loan balance is Ksh. ' 
                                + LonBal1.toFixed(0) + '. Total current loan repayable: Ksh. '+ LonBal5.toFixed(0)
                                 +'. For clarification call the group Admin: '
                                + userInfo.attributes.phone_number + '. Thank you. MiFedha');
                                    setIsLoading(false);          
                                  } 
                              
                            }
            
                        
                            catch(error){
                              console.log(error)
                              if(error){
                                console.log(error)
                              Alert.alert("Error! Access denied!")
                              
                          
                          return;} }
                            setIsLoading(false);         
                            
                          }
                          await MmbDtls(); 
                        
                        }
            
                        
                        catch(error){
                          console.log(error)
                          if(error){
                            console.log(error)
                          Alert.alert("Error! Access denied!")
                          
                      
                      return;} }
                        setIsLoading(false);         
                        
                      }
                      await gtLoaneeDtls(); 
                  }
      
                  catch(error){ if (error){
                    console.log(error)
                    Alert.alert("Error! Access denied!")
                    return
                  }}
                  setIsLoading(false);         
                  
                }
                await gtLoanerDtls(); 
            }

            catch(error){
              console.log(error)
              if(error){
                console.log(error)
              Alert.alert("Error! Access denied!")
              return;              
          } 
           }
            setIsLoading(false);                     
          } 
          await gtLoanDtls();        
            
          } catch (error) {
            console.log(error)
            
            if(error){
              console.log(error)
              Alert.alert("Error! Access denied!")
              return;
          };
          }
          
          setIsLoading(false);
          setLonId("") 
          setChmMbrId("")
          setSigntryPW("")
        };    

        useEffect(() =>{
          const usId=LonId
            if(!usId && usId!=="")
            {
              setLonId("");
              return;
            }
            setLonId(usId);
            }, [LonId]
             );

             useEffect(() =>{
              const SigntryPWs=SigntryPW
                if(!SigntryPWs && SigntryPWs!=="")
                {
                  setSigntryPW("");
                  return;
                }
                setSigntryPW(SigntryPWs);
                }, [SigntryPW]
                 );
    

             useEffect(() =>{
              const ChmMbrIds=ChmMbrId
                if(!ChmMbrIds && ChmMbrIds!=="")
                {
                  setChmMbrId("");
                  return;
                }
                setChmMbrId(ChmMbrIds);
                }, [ChmMbrId]
                 );
        
 return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <TouchableOpacity
                    onPress={gtCompDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Black List 
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default BLChmCovLoanee;