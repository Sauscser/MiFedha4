import React, {useEffect, useState} from 'react';
import Communications from 'react-native-communications';
import {
  
  
  updateCompany,
  
  updateSMAccount,
  updateGroup,
  
  createGroupNonLoans,
  updateChamaMembers,
  
} from '../../../src/graphql/mutations';

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {
  
  getChamaMembers,
  getCompany,
  getGroup,
  
  getSMAccount,
  
} from '../../../src/graphql/queries';

import {useNavigation, useRoute} from '@react-navigation/native';

import {
  View,
  Text,
  
  TextInput,
  ScrollView,
  
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from './styles';


const SMASendNonLns = props => {
  const [SenderNatId, setSenderNatId] = useState('');
  
  const [SnderPW, setSnderPW] = useState("");
  
  const [amounts, setAmount] = useState("");
  
  const [Desc, setDesc] = useState("");
 
  const[isLoading, setIsLoading] = useState(false);
 
  const route = useRoute();
  
    const fetchChmMbrDtls = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      const userInfo = await Auth.currentAuthenticatedUser();
    
      try {
          const ChmMbrtDtl:any = await API.graphql(
              graphqlOperation(getChamaMembers, {ChamaNMember: route.params.ChamaNMember}),
              );

              const groupContacts =ChmMbrtDtl.data.getChamaMembers.groupContact;
              const memberContacts =ChmMbrtDtl.data.getChamaMembers.memberContact;
              const NonLoanAcBals =ChmMbrtDtl.data.getChamaMembers.NonLoanAcBal;
              
              const ttlNonLonAcBals =ChmMbrtDtl.data.getChamaMembers.ttlNonLonAcBal;
              
  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(false);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getGroup, {grpContact: groupContacts}),
      );

      const grpBals =accountDtl.data.getGroup.grpBal;
      const signitoryPWs =accountDtl.data.getGroup.signitoryPW;
      const statuss =accountDtl.data.getGroup.status;
      const SenderSub =accountDtl.data.getGroup.owner;
      const ttlNonLonsSentChms =accountDtl.data.getGroup.ttlNonLonsSentChm;
      
      const grpNames =accountDtl.data.getGroup.grpName;
      
      
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
          
            
          
          const TotalTransacted = parseFloat(amounts);
          
          const ttlNonLonssSentChms = CompDtls.data.getCompany.ttlNonLonssSentChm; 
         
                    
          const fetchRecUsrDtls = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
                const RecAccountDtl:any = await API.graphql(
                    graphqlOperation(getSMAccount, {awsemail: memberContacts}),
                    );
                    const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;   
                    const phonecontact =RecAccountDtl.data.getSMAccount.phonecontact;                  
                    const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                    const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                    const namess =RecAccountDtl.data.getSMAccount.name;
                    const MaxAcBals =RecAccountDtl.data.getSMAccount.MaxAcBal;
                    const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;
                    
                    const GrpNonLns = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true)
                      try {
                        await API.graphql(
                          graphqlOperation(createGroupNonLoans, {
                            input: {
                              grpContact: groupContacts,
                              recipientPhn: memberContacts,
                              receiverName:namess,
                              SenderName:grpNames,
                              amountSent: parseFloat(amounts).toFixed(0),

                              description: Desc,
                              memberId:route.params.ChamaNMember,
                              status: "AccountActive",
                              owner: userInfo.attributes.sub,
                            },
                          }),
                        );


                      } catch (error) {
                        if (error){
                          Alert.alert("Sending unsuccessful; Retry")
                          return
                        }
                      }
                      setIsLoading(false);
                      await updtSendrAc();
                    };
                  
                    

                    const updtSendrAc = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateGroup, {
                              input:{
                                grpContact:groupContacts,
                                ttlNonLonsSentChm: (parseFloat(ttlNonLonsSentChms)+parseFloat(amounts)).toFixed(0),
                                grpBal:(parseFloat(grpBals)-TotalTransacted).toFixed(0) 
                              }
                            })
                          )


                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
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
                            graphqlOperation(updateSMAccount, {
                              input:{
                                awsemail:memberContacts,
                                
                                balance:(parseFloat(RecUsrBal) + parseFloat(amounts)).toFixed(0)                              
                                
                                                                  
                                
                              }
                            })
                          )                              
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
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
                               
                                ttlNonLonssSentChm: parseFloat(amounts) + parseFloat(ttlNonLonssSentChms),
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
                    return;}
                      }
                      await updtChmMbr();
                      setIsLoading(false);
                    }

                    const updtChmMbr = async () =>{
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try{
                          await API.graphql(
                            graphqlOperation(updateChamaMembers, {
                              input:{
                                ChamaNMember: route.params.ChamaNMember,                                                      
                                NonLoanAcBal: (parseFloat(NonLoanAcBals) - parseFloat(amounts)).toFixed(0),
                                
                                
                              }
                            })
                          )
                          
                          
                      }
                      catch(error){
                        console.log(error)
                        if (error){Alert.alert("Error! Access denied!")
                    return;}
                      }
                      Alert.alert("Amount:Ksh. "+parseFloat(amounts).toFixed(2) );
                      Communications.textWithoutEncoding(phonecontact,'Hi '
                              + namess +  grpNames 
                              + ' group has sent you Ksh. ' + amounts
                             +'. For clarification call the group Admin: '
                            + userInfo.attributes.phone_number + '. Thank you. MiFedha');
                      setIsLoading(false);
                    }                                
                                          
                    
                    if(statuss !== "AccountActive"){Alert.alert('Sender account is inactive');
                    return;}
                    else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');
                    return;}
                    
                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs) ===0){Alert.alert('Member National ID be verified through deposit at MFNdogo');
                    return;}
                    else if (
                      (parseFloat(RecUsrBal) + parseFloat(amounts)) > parseFloat(MaxAcBals) 
                    ) {Alert.alert('Receiver Call customer care to have wallet capacity adjusted');
                    return;}
                    
                    else if (
                      parseFloat(grpBals) < TotalTransacted 
                    ) {Alert.alert("Cancelled."+ "Bal: "+ grpBals +". Deductable: " + TotalTransacted.toFixed(2) 
                    + ". "+ ((TotalTransacted) - parseFloat(grpBals)).toFixed(2) + ' more needed');
                    return;}
                    
                    else if(signitoryPWs !==SnderPW){Alert.alert('Wrong password');
                    return;}
                    else if(userInfo.attributes.sub !==SenderSub){Alert.alert('You are not the creator of this group');
                    return;}
                    
                    
                    
                     else {
                      GrpNonLns();
                    }                                                
                }       
                catch(e) {     
                  console.log(e) 
                  if (e){Alert.alert("Error! Access denied!")
  return;}                 
                }
                setIsLoading(false);
                }                    
                  await fetchRecUsrDtls();
        } catch (e) {
          console.log(e)
          if (e){Alert.alert("Error! Access denied!")
      return;}
        }
        setIsLoading(false);        
      };
      await fetchCompDtls();
    
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error! Access denied!")
      return;}
  };
      setIsLoading(false);
    }
    await fetchSenderUsrDtls();

    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error! Access denied!")
  return;}
    }
        
          setAmount("");
         
          
          setDesc("");
          setSnderPW("");
    setIsLoading(false);        
  };

  

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
              
            <Text style={styles.sendAmtText}>Amount Sent</Text>
          </View>


          <View style={styles.sendAmtView}>
            <TextInput
              value={SnderPW}
              onChangeText={setSnderPW}
              secureTextEntry = {true}
              style={styles.sendAmtInput}
              editable={true}></TextInput>
            <Text style={styles.sendAmtText}>Chama PassWord</Text>
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
            onPress={fetchChmMbrDtls}
            style={styles.sendAmtButton}>
            <Text style={styles.sendAmtButtonText}>Send</Text>
            {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
          </TouchableOpacity>

          
        </ScrollView>
      </View>
    </View>
  );
};

export default SMASendNonLns;