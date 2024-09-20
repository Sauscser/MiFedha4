import React, {useEffect, useState} from 'react';

import {createChamaMembers,  updateCompany, updateGroup} from '../../../src/graphql/mutations';
import { getCompany, getGroup, getSMAccount, listSMAccounts, } from '../../../src/graphql/queries';
import {Auth, graphqlOperation, API} from 'aws-amplify';

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


const AddChmMmbrs = (props) => {

  

  


  const navigation = useNavigation();

  const [ChmPhn, setChmPhn] = useState('');

  const [phoneContacts, setPhoneContacts] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [SubFreq, setSubFreq] = useState('');
  const [SubAmt, setSubAmt] = useState('');
  const [lateSub, setlateSub] = useState('');

  const [MmbaID, setMmbaID] = useState('');
  const ChmPhnNphoneContacts = MmbaID+ChmPhn



  const ChckUsrExistence2 = async () => {
    const userInfo = await Auth.currentAuthenticatedUser();
    try {
      const UsrDtls3:any = await API.graphql(
        graphqlOperation(listSMAccounts,
          { filter: 
            {
              and:{
                awsemail: { eq: phoneContacts},
                
            }                          
            }}
        )
      )

      const ChckAdmDtls = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        try {
          const UsrDtls2:any = await API.graphql(
            graphqlOperation(getSMAccount, { awsemail:userInfo.attributes.email }),
                        
            )
  
            
            const pw = UsrDtls2.data.getSMAccount.pw;

      const ChckUsrExistence = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
      
     
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(getSMAccount, { awsemail:phoneContacts}),
                        
          )

          const nationalidsss = UsrDtls.data.getSMAccount.nationalid;
          const namess = UsrDtls.data.getSMAccount.name;
          
        
          const gtCompDtls = async () =>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
              const compDtlsz :any= await API.graphql(
                graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
                );
                const ttlActiveChmUserss = compDtlsz.data.getCompany.ttlActiveChmUsers;
                
                const gtChmDtls = async () =>{
                  if(isLoading){
                    return;
                  }
                  setIsLoading(true);
                  try{
                    const compDtls :any= await API.graphql(
                      graphqlOperation(getGroup,{grpContact:ChmPhn})
                      );
                      const ttlGrpMemberss = compDtls.data.getGroup.ttlGrpMembers;  
                      const grpNames = compDtls.data.getGroup.grpName; 
                      const owners = compDtls.data.getGroup.owner;   
                      const regNos = compDtls.data.getGroup.regNo;   
                      const signitoryPWs = compDtls.data.getGroup.signitoryPW;    
                      const signitory2Subs = compDtls.data.getGroup.signitory2Sub;  
                      const objectionStatus =compDtls.data.getGroup.objectionStatus;
                      const Admin1 = compDtls.data.getGroup.Admin1;      
                      const Admin2 = compDtls.data.getGroup.Admin2;
                      const Admin3 = compDtls.data.getGroup.Admin3;
                      const Admin4 = compDtls.data.getGroup.Admin4;
                      const Admin5 = compDtls.data.getGroup.Admin5;
                      const Admin6 = compDtls.data.getGroup.Admin6;
                      const Admin7 = compDtls.data.getGroup.Admin7;
                      const Admin8 = compDtls.data.getGroup.Admin8;
                      const Admin9 = compDtls.data.getGroup.Admin9;
                      const Admin10 = compDtls.data.getGroup.Admin10;
                      const Admin11 = compDtls.data.getGroup.Admin11;
                      const Admin12 = compDtls.data.getGroup.Admin12;
                      const Admin13 = compDtls.data.getGroup.Admin13;
                      const Admin14 = compDtls.data.getGroup.Admin14;
                      const Admin15 = compDtls.data.getGroup.Admin15;
                      const Admin16 = compDtls.data.getGroup.Admin16;
                      const Admin17 = compDtls.data.getGroup.Admin17;
                      const Admin18 = compDtls.data.getGroup.Admin18;
                      const Admin19 = compDtls.data.getGroup.Admin19;
                      const Admin20 = compDtls.data.getGroup.Admin20;  
                      const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)   
                    
                      const CrtChm = async () => {
                        if(isLoading){
                          return;
                        }
                        setIsLoading(true);
                        try {
                          await API.graphql(
                          graphqlOperation(createChamaMembers, {
                          input: {
                            MembaId:MmbaID,
                            groupContact: ChmPhn,
                            memberContact: phoneContacts,
                            regNo:regNos,
                            ChamaNMember:ChmPhnNphoneContacts,
                            memberNatId: nationalidsss,
                            memberChmBenefit:0,
                            GrossLnsGvn:0,
                            LonAmtGven: 0,
                            AmtRepaid:0,
                            LnBal: 0,
                            NonLoanAcBal: 0,
                            ttlNonLonAcBal: 0,
                            timeCrtd:daysUpToDate,
                            subscribedAmt:0,
                            groupName:grpNames,
                            memberName:namess,
                            AcStatus: "AccountActive",
                            loanStatus: "NoLoan",
                            blStatus: "AccountNotBL",
                            owner: owners,
                            totalSubAmt:0,
                            subscriptionFrequency: SubFreq,
                  subscriptionAmt: SubAmt,
                  lateSubscriptionPenalty:lateSub,
                  ttlLateSubs:0
                            
                                  },
                                }),
                              );
                              
                            } catch (error) {
                              if (error){
                                console.log(Error)
                                Alert.alert("Error! Access denied!")
                                return}
                            
                            }
                            await updtActAdm();
                            setIsLoading(false);
                            
                          };
                          
          
                     if (pword !== pw)
                          {Alert.alert("Wrong Admin password");
                        return;
                      } 

                      else  if (userInfo.attributes.sub !== owners 
                        && signitory2Subs !== userInfo.attributes.sub
                        &&Admin1 !== userInfo.attributes.email
                      &&
                      Admin2 !== userInfo.attributes.email 
                      &&
                      Admin3 !== userInfo.attributes.email
                      &&
                      Admin4 !== userInfo.attributes.email 
                      &&
                      Admin5 !== userInfo.attributes.email
                      &&
                      Admin6 !== userInfo.attributes.email 
                      &&
                      Admin7 !== userInfo.attributes.email
                      &&
                      Admin8 !== userInfo.attributes.email 
                      &&
                      Admin9 !== userInfo.attributes.email
                      &&
                      Admin10 !== userInfo.attributes.email 
                      &&
                      Admin11 !== userInfo.attributes.email
                      &&
                      Admin12 !== userInfo.attributes.email 
                      &&
                      Admin13 !== userInfo.attributes.email
                      &&
                      Admin14 !== userInfo.attributes.email 
                      &&
                      Admin14 !== userInfo.attributes.email
                      &&
                      Admin15 !== userInfo.attributes.email 
                      &&
                      Admin16 !== userInfo.attributes.email
                      &&
                      Admin17 !== userInfo.attributes.email 
                      &&
                      Admin18 !== userInfo.attributes.email
                      &&
                      Admin19 !== userInfo.attributes.email 
                      &&
                      Admin20 !== userInfo.attributes.email)
                      {Alert.alert("You are neither the author nor signatory nor admin of this Group")
                      return;}
                      
                      else if (objectionStatus === "Objected")
                      {Alert.alert ("Group account is locked by the admin")}
                      else if (UsrDtls3.data.listSMAccounts.items.length <1) {
                        Alert.alert("Member first create main account");
                       
                      }
                      else {
                        CrtChm();
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
                                      ttlActiveChmUsers:parseFloat(ttlActiveChmUserss) + 1,
                                    }
                                  })
                                )
                            }
                            catch(error){
                              if(error){
                                console.log(Error)
                                Alert.alert("Error! Access denied!")
                                return;
                            }
                            }
                            await updtChm();
                            
                            setIsLoading(false);
                          }                       
                          const updtChm = async()=>{
                            if(isLoading){
                              return;
                            }
                            setIsLoading(true);
                            try{
                                await API.graphql(
                                  graphqlOperation(updateGroup,{
                                    input:{
                                      grpContact:ChmPhn,
                                      ttlGrpMembers:parseFloat(ttlGrpMemberss) + 1,
                                    }
                                  })
                                )
                            }
                            catch(error){
                              if(error){
                                console.log(Error)
                                Alert.alert("Error! Access denied!")
                                return;
                            }
                            }
                            Alert.alert("Congrats " + userInfo.username + ", You have added " + namess +" to " +grpNames)
                            setIsLoading(false);
                          }
                          
          
          
            }          
            
            
            catch(e){
              console.log(e)
              if(e){
                console.log(Error)
                Alert.alert("Error! Access denied!")
                return;
            }
            }
                        setIsLoading(false)
                        console.log(4)        
            };
              
               await gtChmDtls();

            
              
      }
      
      catch(e){
        console.log(e)
        if(e){
          console.log(Error)
          Alert.alert("Error! Access denied!")
          return;
      }
      }
      setIsLoading(false)
      console.log(3)         
      };
        
         await gtCompDtls();
        
        } catch (e) {
          console.error(e);
          if (e){
            console.log(Error)
            Alert.alert("Retry or update app or call customer care")
        return}
        }
        setIsLoading(false)
        
        console.log(2)
      }
      await ChckUsrExistence()

    } catch (e) {
      console.error(e);
      if (e){
        console.log(Error)
        Alert.alert("Retry or update app or call customer care")
    return}
    }
    setIsLoading(false)
    
    console.log(2)
  }
  await ChckAdmDtls()

    } catch (e) {
      console.error(e);
      if (e){
        console.log(Error)
        Alert.alert("Retry or update app or call customer care")
    return}
    }
    console.log(1)
    setIsLoading(false)
                  setChmPhn('');
                  setPW('');
                  setPhoneContacts("")
                  setChmDesc("")
                  setChmNm("")
                  setMmbaID("")
                  setSubAmt("");
                  setSubFreq("");
                  setlateSub("")
      }

      
    
      useEffect(() =>{
        const lateSubs=lateSub
          if(!lateSubs && lateSubs!=="")
          {
            setlateSub("");
            return;
          }
          setlateSub(lateSubs);
          }, [lateSub]
           );

           useEffect(() =>{
            const SubAmts=SubAmt
              if(!SubAmts && SubAmts!=="")
              {
                setSubAmt("");
                return;
              }
              setSubAmt(SubAmts);
              }, [SubAmt]
               );
           
           useEffect(() =>{
        const SubFreqs=SubFreq
          if(!SubFreqs && SubFreqs!=="")
          {
            setSubFreq("");
            return;
          }
          setSubFreq(SubFreqs);
          }, [SubFreq]
           );

  
    
      useEffect(() =>{
        const MmbaIDs=MmbaID
          if(!MmbaIDs && MmbaIDs!=="")
          {
            setMmbaID("");
            return;
          }
          setMmbaID(MmbaIDs);
          }, [MmbaID]
           );
           
           useEffect(() =>{
        const phoneContactss=phoneContacts
          if(!phoneContactss && phoneContactss!=="")
          {
            setPhoneContacts("");
            return;
          }
          setPhoneContacts(phoneContactss);
          }, [phoneContacts]
           );

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms!=="")
          {
            setChmNm("");
            return;
          }
          setChmNm(ChmNms);
          }, [ChmNm]
           );

           useEffect(() =>{
            const ChmDescs=ChmDesc
              if(!ChmDescs && ChmDescs!=="")
              {
                setChmDesc("");
                return;
              }
              setChmDesc(ChmDescs);
              }, [ChmDesc]
               );

useEffect(() =>{
  const ChmPhns=ChmPhn
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [ChmPhn]
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
                    <Text style={styles.title}>Fill Chama Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="+2547xxxxxxxx"
                      value={ChmPhn}
                      onChangeText={setChmPhn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Chama Phone Number</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder="Member Email"
                      value={phoneContacts}
                      onChangeText={setPhoneContacts}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Member Email</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                     
                      value={MmbaID}
                      onChangeText={setMmbaID}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Member Chama Number</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder='Subscription Amount'
                     keyboardType='decimal-pad'
                     
                      value={SubAmt}
                      onChangeText={setSubAmt}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                   
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder='Subscription Frequency (Days)'
                     keyboardType='decimal-pad'
                     
                      value={SubFreq}
                      onChangeText={setSubFreq}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                    placeholder='Late Subscription Penalty'
                     keyboardType='decimal-pad'
                     
                      value={lateSub}
                      onChangeText={setlateSub}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>AdminMainAccountPassword</Text>
                  </View>

                  <TouchableOpacity
                    onPress={ChckUsrExistence2}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Add Chama Member
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default AddChmMmbrs;