import React, {useEffect, useState} from 'react';

import {
  
  
  
  updateCompany,
  
  updateSMAccount,
  
  updateCvrdGroupLoans,
  updateGroup,
  
  updateChamaMembers,
  createLoanRepayments,
  
} from '../../../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getChamaMembers,
  getCompany,
  getCvrdGroupLoans,
  getGroup,  
  getSMAccount,
  
  
} from '../../../../../../../src/graphql/queries';

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


const RepayCovChmLnsss = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  const[LnId, setLnId] = useState("")
  const [Desc, setDesc] = useState("");

  const[isLoading, setIsLoading] = useState(false);

  const route = useRoute();
  
    const ftchCvdSMLn = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      const userInfo = await Auth.currentAuthenticatedUser();

      try {
          const RecAccountDtl:any = await API.graphql(
              graphqlOperation(getCvrdGroupLoans, {loanID: route.params.loanID}),
              );
              
              const amountExpectedBackWthClrncs =RecAccountDtl.data.getCvrdGroupLoans.amountExpectedBackWthClrnc; 
              const memberIds =RecAccountDtl.data.getCvrdGroupLoans.memberId;
              const DefaultPenaltyChm2s =RecAccountDtl.data.getCvrdGroupLoans.DefaultPenaltyChm2;
              const grpContactssss =RecAccountDtl.data.getCvrdGroupLoans.grpContact; 
              const loaneePhnssss =RecAccountDtl.data.getCvrdGroupLoans.loaneePhn;
              const lonBalas =RecAccountDtl.data.getCvrdGroupLoans.lonBala;
              const amountExpectedBacks =RecAccountDtl.data.getCvrdGroupLoans.amountExpectedBack;
              const amountRepaidss =RecAccountDtl.data.getCvrdGroupLoans.amountRepaid; 
              const LonBalsss = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountRepaidss); 
              const ClranceAmt = parseFloat(amountExpectedBackWthClrncs) - parseFloat(amountExpectedBacks); 

  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: loaneePhnssss}),
      );

      const SenderUsrBal =accountDtl.data.getSMAccount.balance;
      const usrPW =accountDtl.data.getSMAccount.pw;
      const usrAcActvStts =accountDtl.data.getSMAccount.acStatus;
      const TtlClrdLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlClrdLonsTmsLneeChmCov;
      const TtlActvLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlActvLonsTmsLneeChmCov;
      const TtlActvLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlActvLonsAmtLneeChmCov;
      const TtlClrdLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlClrdLonsAmtLneeChmCov;
      const TtlBLLonsTmsLneeChmCovs =accountDtl.data.getSMAccount.TtlBLLonsTmsLneeChmCov;
      const TtlBLLonsAmtLneeChmCovs =accountDtl.data.getSMAccount.TtlBLLonsAmtLneeChmCov;
      const names =accountDtl.data.getSMAccount.name;
      
      const nonLonLimits =accountDtl.data.getSMAccount.nonLonLimit;
      const MaxTymsBLss =accountDtl.data.getSMAccount.MaxTymsBL;
      
      const fetchCompDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
            
          const UsrTransferFee = CompDtls.data.getCompany.chmLnRpymntFee;
          const CompPhoneContact = CompDtls.data.getCompany.phoneContact;  
          const ttlChmLnsInClrdTymsCovs = CompDtls.data.getCompany.ttlChmLnsInClrdTymsCov; 
          const ttlChmLnsInClrdAmtCovs = CompDtls.data.getCompany.ttlChmLnsInClrdAmtCov;
          const ttlChmLnsInBlTymsCovs = CompDtls.data.getCompany.ttlChmLnsInBlTymsCov; 
          const ttlChmLnsInBlAmtCovs = CompDtls.data.getCompany.ttlChmLnsInBlAmtCov;
          const ttlChmLnsInActvAmtCov = CompDtls.data.getCompany.ttlChmLnsInActvAmtCov;
          const ttlChmLnsInActvTymsCov = CompDtls.data.getCompany.ttlChmLnsInActvTymsCov;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const ttlCompTrnsfrEarningsCovs = CompDtls.data.getCompany.ttlCompTrnsfrEarningsCov;
          const ttlSMLnsInActvTymsCovs = CompDtls.data.getCompany.ttlSMLnsInActvTymsCov;
          const ttlSMLnsInActvAmtCovs = CompDtls.data.getCompany.ttlSMLnsInActvAmtCov;
          const totalLnsRecovereds = CompDtls.data.getCompany.totalLnsRecovered;
          const maxBLss = CompDtls.data.getCompany.maxBLs;
         
          const TotalTransacted = parseFloat(amounts)  + parseFloat(UsrTransferFee)*parseFloat(amounts) + ClranceAmt; 

         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getGroup, {grpContact: grpContactssss}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getGroup.grpBal;                    
                    const usrAcActvSttss =RecAccountDtl.data.getGroup.status; 
                   
                    const tymsChmHvBLs =RecAccountDtl.data.getGroup.tymsChmHvBL;                    
                    const TtlClrdLonsTmsLnrChmCovs =RecAccountDtl.data.getGroup.TtlClrdLonsTmsLnrChmCov;
                    const TtlClrdLonsAmtLnrChmCovs =RecAccountDtl.data.getGroup.TtlClrdLonsAmtLnrChmCov;
                    const TtlBLLonsTmsLnrChmCovs =RecAccountDtl.data.getGroup.TtlBLLonsTmsLnrChmCov;
                    const TtlBLLonsAmtLnrChmCovs =RecAccountDtl.data.getGroup.TtlBLLonsAmtLnrChmCov;
                    const namess =RecAccountDtl.data.getGroup.grpName;
                    const TtlActvLonsTmsLnrChmCovs =RecAccountDtl.data.getGroup.TtlActvLonsTmsLnrChmCov;
                    const TtlActvLonsAmtLnrChmCovs =RecAccountDtl.data.getGroup.TtlActvLonsAmtLnrChmCov;
                        
                              const fetchMmbrDtls = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try {
                                    const RecAccountDtl:any = await API.graphql(
                                        graphqlOperation(getChamaMembers, {ChamaNMember: memberIds}),
                                        );
                                        
                                        const AmtRepaids =RecAccountDtl.data.getChamaMembers.AmtRepaid;
                                        const LnBals =RecAccountDtl.data.getChamaMembers.LnBal;
                                         
                                        
                                        const updtSendrAcLonOvr1 = async () =>{
                                          if(isLoading){
                                            return;
                                          }
                                          setIsLoading(true);
                                          try{
                                              await API.graphql(
                                                graphqlOperation(updateSMAccount, {
                                                  input:{
                                                    awsemail:userInfo.attributes.email,
                                                    
                                                    MaxTymsBL:0 ,
                                                    
                                                    
                                                  }
                                                })
                                              )
                    
                    
                                          }
                                          catch(error){
                                            if (error){
                                              Alert.alert("Waived unsuccessful; Retry")
                                              return
                                            }
                                          }
                                          setIsLoading(false);
                                          await updtChmMbrTTlBlOvr();
                                        }

                                        const updtSendrAcLonOvr2 = async () =>{
                                          if(isLoading){
                                            return;
                                          }
                                          setIsLoading(true);
                                          try{
                                              await API.graphql(
                                                graphqlOperation(updateSMAccount, {
                                                  input:{
                                                    awsemail:userInfo.attributes.email,
                                                    
                                                    MaxTymsBL:parseFloat(MaxTymsBLss)-1 ,
                                                   
                                                  }
                                                })
                                              )
                    
                    
                                          }
                                          catch(error){
                                            if (error){
                                              Alert.alert("Waiving unsuccessful; Retry")
                                              return
                                            }
                                          }
                                          setIsLoading(false);
                                          await updtChmMbrTTlBlOvr();
                                        }


                                        const updtChmMbrTTlBlOvr  = async () =>{
                                          if(isLoading){
                                            return;
                                          }
                                          setIsLoading(true);
                                          try{
                                              await API.graphql(
                                                graphqlOperation(updateChamaMembers, {
                                                  input:{
                                                    ChamaNMember:memberIds,
                                                    AmtRepaid: (parseFloat(AmtRepaids)+parseFloat(amounts)).toFixed(0) ,
                                                    LnBal: (parseFloat(LnBals)-parseFloat(amounts)).toFixed(0)  ,
                                                    
                                                    
                                                }})
                                              )
                    
                    
                                          }
                                          catch(error){
                                            if (error){Alert.alert("Retry or update app or call customer care")
                                            return;}
                                          }
                                          setIsLoading(false);
                                          await updtSMCvLnLnOver();
                                        }

                                        
                              const updtSMCvLnLnOver  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          loanID: route.params.loanID,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountRepaidss)).toFixed(0),
                                          lonBala: (LonBalsss-parseFloat(amounts)).toFixed(0),
                                          amountExpectedBackWthClrnc:(parseFloat(amountExpectedBackWthClrncs) - ClranceAmt).toFixed(0),
                                          DefaultPenaltyChm2:0,
                                          status: "LoanCleared",
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtRecAcLonOver();
                              }
                              
                              
                              
          
                              const updtRecAcLonOver = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateGroup, {
                                        input:{
                                          grpContact:grpContactssss,
                                          
                                          tymsChmHvBL: parseFloat(tymsChmHvBLs) - 1,
                                          
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtCompLnOvr();
                              }
          
                              const updtCompLnOvr = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                         
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  
                                }
                                Alert.alert("Waived. " );
                                setIsLoading(false);
                                await sendNonLnLnOver();
                              } 
                              
                              const sendNonLnLnOver = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        senderPhn: loaneePhnssss,
                                        recPhn: grpContactssss,     
                                        RecName:namess,
                                        SenderName:names,      
                                        loanId1: "route.params.id",    
                                        
                                        loanId2: "route.params.id",
                                        loanId3: route.params.loanID,                     
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "Waived",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  if (error){
                                    Alert.alert("Error! Retry")
                                    return
                                  }
                                }
                                setIsLoading(false);
                                
                              };
                              
                              const updtChmMbrTTlBl  = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateChamaMembers, {
                                        input:{
                                          ChamaNMember:memberIds,
                                          AmtRepaid: (parseFloat(AmtRepaids)+parseFloat(amounts)).toFixed(0) ,
                                          LnBal: (parseFloat(LnBals)-parseFloat(amounts)).toFixed(0) ,
                                          
                                      }})
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await repyCovLn();
                              }
                        

                              const repyCovLn = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCvrdGroupLoans, {
                                        input:{
                                          loanID: route.params.loanID,
                                          amountRepaid: (parseFloat(amounts) + parseFloat(amountRepaidss)).toFixed(0),
                                          lonBala: (parseFloat(lonBalas)-parseFloat(amounts)).toFixed(0),
                                          amountExpectedBackWthClrnc:(parseFloat(amountExpectedBackWthClrncs) - ClranceAmt).toFixed(0),
                                          DefaultPenaltyChm2:0
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtSendrAc();
                              }
                              
                              
                              const updtSendrAc = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateSMAccount, {
                                        input:{
                                          awsemail:userInfo.attributes.email,
                                          
                                        }
                                      })
                                    )
          
          
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtRecAc();
                              }
          
                              const updtRecAc = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateGroup, {
                                        input:{
                                          grpContact:grpContactssss,
                                         
                                        }
                                      })
                                    )                              
                                }
                                catch(error){
                                  console.log(error)
                                  if (error){Alert.alert("Retry or update app or call customer care")
                                  return;}
                                }
                                setIsLoading(false);
                                await updtComp();
                              }
          
                              const updtComp = async () =>{
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true);
                                try{
                                    await API.graphql(
                                      graphqlOperation(updateCompany, {
                                        input:{
                                          AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                          
                                        }
                                      })
                                    )
                                    
                                    
                                }
                                catch(error){
                                  console.log(error)
                                  
                                }
                                Alert.alert("Partially Waived. " );
                                setIsLoading(false);
                                await sendNonLnLnOver2()

                              }

                              const sendNonLnLnOver2 = async () => {
                                if(isLoading){
                                  return;
                                }
                                setIsLoading(true)
                                try {
                                  await API.graphql(
                                    graphqlOperation(createLoanRepayments, {
                                      input: {
                                        senderPhn: loaneePhnssss,
                                        recPhn: grpContactssss,     
                                        RecName:namess,
                                        SenderName:names,      
                                        loanId1: "route.params.id",    
                                        
                                        loanId2: "route.params.id",
                                        loanId3: route.params.loanID,                     
                                        amount: parseFloat(amounts).toFixed(0),                              
                                        description: Desc,
                                        status: "Waived",
                                        owner: userInfo.attributes.sub
                                      },
                                    }),
                                  );
          
          
                                } catch (error) {
                                  if (error){
                                    Alert.alert("Error! Retry")
                                    return
                                  }
                                }
                                setIsLoading(false);
                                
                              };

                                    
                                                    
                              
                              if(usrAcActvStts === "AccountInactive"){Alert.alert('Sender account is inactive');
                              return;
                            }
                              else if(usrAcActvSttss === "AccountInactive"){Alert.alert('Receiver account is inactive');
                              return;
                            }
                              
                              
                             
                          else if(ClranceAmt > parseFloat(amounts) ){Alert.alert( "Too little amount waived: at least "+ClranceAmt);
                          return;
                        }


                          else if(parseFloat(amounts) > lonBalas){Alert.alert("The Loan Balance is lesser: Ksh. "+lonBalas)}
                          

                          else if(parseFloat(amounts) === parseFloat(lonBalas)  && parseFloat(MaxTymsBLss) === parseFloat(maxBLss) )
                          {updtSendrAcLonOvr1();}          
                          
                          else if(parseFloat(amounts) === parseFloat(lonBalas)  && parseFloat(MaxTymsBLss) > parseFloat(maxBLss))
                          {updtSendrAcLonOvr2();} 
                              
                               else {
                                updtChmMbrTTlBl();
                              }

                            }
                            catch (e) {
                              console.log(e)
                              if (e){Alert.alert("Retry or update app or call customer care")
                              return;}
                          };
                        }
                      
                        await fetchMmbrDtls();
                          }
                          catch (e) {
                            console.log(e)
                            if (e){Alert.alert("Retry or update app or call customer care")
                            return;}
                        };
                      }
                    
                      await fetchRecUsrDtls();
                                                                                         
                }       
                catch(e) {     
                  console.log(e)
                  if (e){Alert.alert("Retry or update app or call customer care")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchCompDtls();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Retry or update app or call customer care")
      return;}
        }
        setIsLoading(false);        
      };
      await fetchSenderUsrDtls();
    
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Retry or update app or call customer care")
      return;}
  };
      setIsLoading(false);
      
      setAmount("");
     
      setLnId("");
      setDesc("");
      setSnderPW("");
      
      
}


useEffect(() =>{
  const SnderNatIds=SenderNatId
    if(!SnderNatIds && SnderNatIds!=="")
    {
      setSenderNatId("");
      return;
    }
    setSenderNatId(SnderNatIds);
    }, [SenderNatId]
     );

     useEffect(() =>{
      const amt=amounts
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amounts]
         );

         

             
             

                     useEffect(() =>{
                      const descr=Desc
                        if(!descr && descr!=="")
                        {
                          setDesc("");
                          return;
                        }
                        setDesc(descr);
                        }, [Desc]
                         );

                         useEffect(() =>{
                          const SnderPWss=SnderPW
                            if(!SnderPWss && SnderPWss!=="")
                            {
                              setSnderPW("");
                              return;
                            }
                            setSnderPW(SnderPWss);
                            }, [SnderPW]
                             );

                             useEffect(() =>{
                              const LnIds=LnId
                                if(!LnIds && LnIds!=="")
                                {
                                  setLnId("");
                                  return;
                                }
                                setLnId(LnIds);
                                }, [LnId]
                                 );
    

                             

                                 

  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
         
          <View style={styles.amountTitleView}>
            <Text style={styles.title}>Fill account Details Below</Text>
          </View>

        
          <View style={styles.sendAmtView}>
            <TextInput
            keyboardType={"decimal-pad"}
              value={amounts}
              onChangeText={setAmount}
              style={styles.sendAmtInput}
              editable={true}
              ></TextInput>
              
            <Text style={styles.sendAmtText}>Amount Waived</Text>
          </View>


          <View style={styles.sendAmtViewDesc}>
            <TextInput
              multiline={true}
              value={Desc}
              onChangeText={setDesc}
              style={styles.sendAmtInputDesc}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Description</Text>
          </View>
          
          

          <TouchableOpacity
            onPress={ftchCvdSMLn}
            style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Waive</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default RepayCovChmLnsss;
