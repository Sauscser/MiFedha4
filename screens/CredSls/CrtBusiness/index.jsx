import React, {useEffect, useState} from 'react';

import {createBizna, createChamaMembers, createGroup,   createPersonel,   updateCompany} from '../../../src/graphql/mutations';
import { getCompany, getSMAccount, listBiznas, listChamasRegConfirms, vwViaPhonss,  } from '../../../src/graphql/queries';
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



const CreateBiz = (props) => {

  

  const [ChmPhn, setChmPhn] = useState('');
  const [nam, setName] = useState(null);
 
  const [awsEmail, setAWSEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pword, setPW] = useState('');
  const [ChmNm, setChmNm] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [ChmRegNo, setChmRegNo] = useState('');
  const [MmbaID, setMmbaID] = useState('');
  const [Sign2Phn, setSign2Phn] = useState('');

  const WorkerID = "00001"+ChmPhn


  const fetchAcDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    const userInfo = await Auth.currentAuthenticatedUser();
   
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
      );

  
      const owners = accountDtl.data.getSMAccount.owner;
      const nationalid = accountDtl.data.getSMAccount.nationalid

      const ChckBizExistence = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        try {
          const UsrDtls:any = await API.graphql(
            graphqlOperation(listBiznas,
              { filter: 
                {
                  and:{
                    licenseNo: { eq: Sign2Phn},
                    status: {eq: "AccountActive"},
                    noBL: {gt: 0}
                    
                }                          
                }}
            )
          )

          const ChckBizExistence2 = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const UsrDtls2:any = await API.graphql(
                graphqlOperation(listBiznas,
                  { filter: 
                    {
                      and:{
                        email: { eq: userInfo.attributes.email},
                        status: {eq: "AccountActive"},
                        noBL: {gt: 0}
                        
                    }                          
                    }}
                )
              )

      const CreateNewSMAc = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        const userInfo = await Auth.currentAuthenticatedUser();
      
     
        try {
          await API.graphql(
          graphqlOperation(createBizna, {
          input: {
           
            BusKntct:ChmPhn,
            busName: ChmNm,
            pw: pword,
            email: userInfo.attributes.email,
            owner2email:userInfo.attributes.email,
            TtlEarnings: 0,
            earningsBal: 0,
            bizBeneficiary:userInfo.attributes.email,
            netEarnings:0,
            description: ChmDesc,
            licenseNo: Sign2Phn,
            bizType:"bizType",
            status: "AccountActive",
            owner: userInfo.attributes.sub,
            noBL:0,

            TtlActvLonsTmsLnrCredSlsB2B: 0,
            TtlActvLonsAmtLnrCredSlsB2B: 0,
            TtlBLLonsTmsLnrCredSlsB2B: 0,
            TtlBLLonsAmtLnrCredSlsB2B: 0,
            TtlClrdLonsTmsLnrCredSlsB2B: 0,
            TtlClrdLonsAmtLnrCredSlsB2B: 0,
            TtlActvLonsTmsLneeCredSlsB2B: 0,
            TtlActvLonsAmtLneeCredSlsB2B: 0,
            TtlBLLonsTmsLneeCredSlsB2B: 0,
            TtlBLLonsAmtLneeCredSlsB2B: 0,
            TtlClrdLonsTmsLneeCredSlsB2B: 0,
            TtlClrdLonsAmtLneeCredSlsB2B: 0,
          
            TtlActvLonsTmsLnrCredSlsB2P: 0,
            TtlActvLonsAmtLnrCredSlsB2P: 0,
            TtlBLLonsTmsLnrCredSlsB2P: 0,
            TtlBLLonsAmtLnrCredSlsB2P: 0,
            TtlClrdLonsTmsLnrCredSlsB2P: 0,
            TtlClrdLonsAmtLnrCredSlsB2P: 0,
            TtlActvLonsTmsLneeCredSlsP2B: 0,
            TtlActvLonsAmtLneeCredSlsP2B: 0,
            TtlBLLonsTmsLneeCredSlsP2B: 0,
            TtlBLLonsAmtLneeCredSlsP2B: 0,
            TtlClrdLonsTmsLneeCredSlsP2B: 0,
            TtlClrdLonsAmtLneeCredSlsP2B: 0,
            
            objectionStatus:"NotObjected",
            objOfficer: "None",
            objReason: "None",
            AdminNo:1,
            Admin1:userInfo.attributes.email,
            Admin2:"None",
            Admin3:"None",
            Admin4:"None",
            Admin5:"None",
            Admin6:"None",
            Admin7:"None",
            Admin8:"None",
            Admin9:"None",
            Admin10:"None",
            Admin11:"None",
            Admin12:"None",
            Admin13:"None",
            Admin14:"None",
            Admin15:"None",
            Admin16:"None",
            Admin17:"None",
            Admin18:"None",
            Admin19:"None",
            Admin20:"None",
            Admin21:"None",
            Admin22:"None",
            Admin23:"None",
            Admin24:"None",
            Admin25:"None",
            Admin26:"None",
            Admin27:"None",
            Admin28:"None",
            Admin29:"None",
            Admin30:"None",
            Admin31:"None",
            Admin32:"None",
            Admin33:"None",
            Admin34:"None",
            Admin35:"None",
            Admin36:"None",
            Admin37:"None",
            Admin38:"None",
            Admin39:"None",
            Admin40:"None",
            Admin41:"None",
            Admin42:"None",
            Admin43:"None",
            Admin44:"None",
            Admin45:"None",
            Admin46:"None",
            Admin47:"None",
            Admin48:"None",
            Admin49:"None",
            Admin50:"None",
                  },
                })
                
                ,
              );

              
              
            } catch (error) {
              if (error){
                Alert.alert("Creation unsuccessful; Retry")
                return
              }
            
            }
            await onCreateNewSMAc();
            
                     };

                     const onCreateNewSMAc = async () => {
                      if(isLoading){
                        return;
                      }
                      setIsLoading(true);
                      try {
                        await API.graphql(
                        graphqlOperation(createPersonel, {
                        input: {
                          BusinessRegNo: ChmPhn,
                          phoneKontact:userInfo.attributes.email,
                          name: userInfo.username,
                          workerId: WorkerID,
                          workId:"00001",
                          email: userInfo.attributes.email,
                          nationalid:nationalid,
                          BiznaName:ChmNm,
                          ownrsss: owners,
                                },
                              }),
                            );
                            
                          } catch (error) {
                            if (error){
                              Alert.alert("Error: possible this Business Phone exists here")
                              return
                            }
                          
                          }
                          Alert.alert("Business and owner accounts successfully created")
                          
                          setIsLoading(false);
                          
                          
                        };

                     if (pword.length < 8)
          {Alert.alert("password is too short; at least eight characters");
        
      } 
      
     else if (userInfo.attributes.sub !== owners)
    {Alert.alert ("Please first create main account")}

    else if (UsrDtls.data.listBiznas.items.length > 0)
    {Alert.alert ("This license number is blacklisted by one of your clients")}

    else if (UsrDtls2.data.listBiznas.items.length> 0)
    {Alert.alert ("You have a business blacklisted by one of your clients")}


    else{
                           await CreateNewSMAc();}

                          } catch (e) {
                            if(e){Alert.alert("Retry or update app or call customer care")
                          return}
                            
                          }
                                    
                        }
                        
                        await ChckBizExistence2 ();
                      
                      } catch (e) {
                            if(e){Alert.alert("Retry or update app or call customer care")
                          return}
                            
                          }
                                    
                        }
                        
                        await ChckBizExistence ();
                      
                      }

        catch (e) {
          console.log(e)
          if (e){Alert.alert("Check your Details")
          return;}
              
         }       
         setIsLoading(false);
         setChmPhn('');
         setPW('');
         setAWSEmail("")
         setChmDesc("")
         setChmNm("")
         setChmRegNo("")
         setMmbaID("")
         setSign2Phn(""); 
      }; 
          
    
      useEffect(() =>{
        const MmbaIDs=MmbaID
          if(!MmbaIDs && MmbaIDs !=="")
          {
            setMmbaID("");
            return;
          }
          setMmbaID(MmbaIDs);
          }, [MmbaID]
           );
           
           useEffect(() =>{
        const ChmRegNos=ChmRegNo
          if(!ChmRegNos && ChmRegNos !=="")
          {
            setChmRegNo("");
            return;
          }
          setChmRegNo(ChmRegNos);
          }, [ChmRegNo]
           );
           
           useEffect(() =>{
        const awsEmails=awsEmail
          if(!awsEmails && awsEmails !=="")
          {
            setAWSEmail("");
            return;
          }
          setAWSEmail(awsEmails);
          }, [awsEmail]
           );

      useEffect(() =>{
        const ChmNms=ChmNm
          if(!ChmNms && ChmNms !=="")
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

         useEffect(() =>{
          const Sign2Phns=Sign2Phn
            if(!Sign2Phns && Sign2Phns !=="")
            {
              setSign2Phn("");
              return;
            }
            setSign2Phn(Sign2Phns);
            }, [Sign2Phn]
             );

        
          return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
           
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Business Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                     placeholder="+2547xxxxxxxx"
                      value={ChmPhn}
                      onChangeText={setChmPhn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Phone</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={ChmNm}
                      onChangeText={setChmNm}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Name</Text>
                  </View>

                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={Sign2Phn}
                      onChangeText={setSign2Phn}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Registration/License Number</Text>
                  </View>

        
                  <View style={styles.sendLoanView}>
                    <TextInput
                      value={pword}
                      onChangeText={setPW}
                      secureTextEntry = {true}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Pass Word</Text>
                  </View>

                  <View style={styles.sendAmtViewDesc}>
                    <TextInput
                      value={ChmDesc}
                      multiline={true}
                      onChangeText={setChmDesc}
                      style={styles.sendAmtInputDesc}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Business Description</Text>
                  </View>

        
                  <TouchableOpacity
                    onPress={fetchAcDtls}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText}>
                      Click to Register Business
                    </Text>
                    {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default CreateBiz;