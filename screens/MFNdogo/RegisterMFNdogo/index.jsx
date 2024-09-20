import React, {useEffect, useState} from 'react';
import {Alert} from "react-native"

import {createAgent, updateCompany, updateSAgent, updateSMAccount} from '../../../src/graphql/mutations';

import {Auth,  graphqlOperation, API} from 'aws-amplify';


import {
  View,
  Text,
  
  
  TextInput,
  ScrollView,
  
  
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import { getCompany, getSAgent,  getSMAccount,  listSMAccounts } from '../../../src/graphql/queries';

  const RegisterKFNdgAcForm = props => {
  const [nationalId, setNationalid] = useState('');
  const [nam, setName] = useState("");
  const [phoneContact, setPhoneContact] = useState("");
  const[eml, setEml] =useState("");

  
  const [pword, setPW] = useState('');
  const [saRegNo, setSARegNo] = useState('');
  const [BkName, setBkName] = useState('');
  const [BkAcNu, setBkAcNu] = useState('');
  const[lat, setLat] = useState('');
  const[twn, settwn] = useState("");
  const[lon, setLon] = useState("");
  const[isLoading, setIsLoading]=useState(false);
  
  
   const gtMFKDtsl = async () =>{
     if(isLoading){
       return;
     }
     setIsLoading(true);
     const userInfo = await Auth.currentAuthenticatedUser();   
    
    try{
    const MFKb:any = await API.graphql(
    graphqlOperation(getSAgent, {saPhoneContact:saRegNo})
    );
    const actvMFNdogs = MFKb.data.getSAgent.actvMFNdog;
    const names = MFKb.data.getSAgent.name
    const mfnTtl = MFKb.data.getSAgent.mfnTtl;
    const offerStatus = MFKb.data.getSAgent.offerStatus
    

    const gtCompDtls = async () =>{
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try{
          const compDtls :any= await API.graphql(
            graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
          );
          const actvNdg = compDtls.data.getCompany.ttlKFNdgActv
          const maxMFNdogoss = compDtls.data.getCompany.maxMFNdogos

          const ChckPhnUse = async () => {
            try {
              const UsrDtlss:any = await API.graphql(
                graphqlOperation(listSMAccounts,
                  { filter: {
                      
                    awsemail: { eq: phoneContact}
                                  
                    }}
                )
              )
  
              const ChckUsrExistence = async () => {
                try {
                  const UsrDtls:any = await API.graphql(
                    graphqlOperation(getSMAccount, 
                      { 
                        awsemail:userInfo.attributes.email
                      }
                    )
                  )
                  const owner = UsrDtls.data.getSMAccount.owner
                  const nationalidssss = UsrDtls.data.getSMAccount.nationalid
                  const TtlClrdLonsAmtByrCovs = UsrDtls.data.getSMAccount.TtlClrdLonsAmtByrCov

                  
                      
                 

          const createNewMFN = async () => {
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try {
              await API.graphql(
                graphqlOperation(createAgent, {
                  input: {                    
                    phonecontact: phoneContact,
                    nationalid: nationalidssss,
                    name: nam,
                    ttlEarnings:0,
                    pw: pword,
                    email: eml,
                    sagentregno: saRegNo,
                    bankName:BkAcNu,
                    bkAcNo:BkName,
                    TtlFltIn: 0,
                    TtlFltOut: 0,
                    floatBal: 0,   
                    latitude: lat,
                    longitude: lon,              
                    agentEarningBal: 0,
                    MFNWithdrwlFee:0,
                    town:twn,      
                    owner:userInfo.attributes.sub,
                    status: 'AccountActive',

                  },
                }),
              );
        
              }
            
            catch (error) {
              if (error){
                Alert.alert("Application unsuccessful; Retry")
                return
              }
              
            }
            setIsLoading(false);
        await updtActAdm();
          }

          if (userInfo.attributes.sub !== owner)
                           {Alert.alert ("Please first create main account")}
                           else if(pword.length<8) {Alert.alert("Password is too short; at least eight characters");
        return;
      } 
      
      else if(0 >= TtlClrdLonsAmtByrCovs){
        Alert.alert("Please first purchase this account");
        return;
      } 

      
      else if((actvMFNdogs+1)>mfnTtl){
        Alert.alert("Exceeded MFNdogo slots; Open another MFKubwa account");
        return;
      }
      else{createNewMFN();}
          


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
                      ttlKFNdgActv:parseFloat(actvNdg) + 1,
                    }
                  })
                )
            }
            catch(error){if (error) {
              console.log(error)
              Alert.alert("Retry or update app or call customer care")
            }}
            setIsLoading(false);
            await updtSA();
          }
          
          const updtSA = async()=>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
                await API.graphql(
                  graphqlOperation(updateSAgent,{
                    input:{
                      saPhoneContact:saRegNo,
                      actvMFNdog:parseFloat(actvMFNdogs) + 1,
                    }
                  })
                )
            }
            catch(error){if (error) {
              console.log(error)
              Alert.alert("Retry or update app or call customer care")
              return;
            }}
            
            setIsLoading(false)
            await updtSMAc();
          }   

          const updtSMAc = async()=>{
            if(isLoading){
              return;
            }
            setIsLoading(true);
            try{
                await API.graphql(
                  graphqlOperation(updateSMAccount,{
                    input:{
                      awsemail:userInfo.attributes.email,
                      TtlClrdLonsAmtByrCov:parseFloat(TtlClrdLonsAmtByrCovs) - 1,
                    }
                  })
                )
            }
            catch(error){if (error) {
              console.log(error)
              Alert.alert("Retry or update app or call customer care")
              return;
            }}
            Alert.alert(" MFKubwa " +names+ " has registered MFNdogo "  +nam );
            setIsLoading(false)
          }   


          
        

  } catch (e) {
    if(e){Alert.alert("Retry or update app or call customer care")
  return}
    console.error(e);
  }
}


 if(UsrDtlss.data.listSMAccounts.items.length > 0){Alert.alert("This Phone number is in use in a Single Member Account")}
 else{
await ChckUsrExistence();}
    
    } catch (e) {
          if(e){Alert.alert("Retry or update app or call customer care")
        return}
          console.error(e);
        }
      }

      await ChckPhnUse();

      }
  
        catch(e){
          if (e){
            Alert.alert("Retry or update app or call customer care")
            return
          }
        
        }
        setIsLoading(false);
        };
        await gtCompDtls();       
  
      }
catch(e){
  console.log(e)
  if(e) {Alert.alert("Retry or update app or call customer care");
return;
}
}
    setNationalid('');
    setPW('');
    setName('');
    setEml("");
    setLat("");
    setLon("");
    setBkAcNu("");
    setBkName("");
    setPhoneContact('');
    setSARegNo('');
    settwn("")
  };

  useEffect(() =>{
    const BkNames=BkName
      if(!BkNames && BkNames!=="")
      {
        setBkName("");
        return;
      }
      setBkName(BkNames);
      }, [BkName]
       );

       useEffect(() =>{
        const BkAcNus=BkAcNu
          if(!BkAcNus && BkAcNus!=="")
          {
            setBkAcNu("");
            return;
          }
          setBkAcNu(BkAcNus);
          }, [BkAcNu]
           );

           useEffect(() =>{
            const natId=nationalId
              if(!natId && natId!=="")
              {
                setNationalid("");
                return;
              }
              setNationalid(natId);
              }, [nationalId]
               );

       useEffect(() =>{
        const twns=twn
          if(!twns && twns!=="")
          {
            settwn("");
            return;
          }
          settwn(twns);
          }, [twn]
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
            const phn=phoneContact
              if(!phn && phn!=="")
              {
                setPhoneContact("");
                return;
              }
              setPhoneContact(phn);
              }, [phoneContact]
               );
  
               useEffect(() =>{
                const name=nam
                  if(!name && name!=="")
                  {
                    setName("");
                    return;
                  }
                  setName(name);
                  }, [nam]
                   );

                   useEffect(() =>{
                    const email=eml
                      if(!email && email!=="")
                      {
                        setEml("");
                        return;
                      }
                      setEml(email);
                      }, [eml]
                       );
                  
                       useEffect(() =>{
                        const lati=lat
                          if(!lati && lati!=="")
                          {
                            setLat("");
                            return;
                          }
                          setLat(lati);
                          }, [lat]
                           );
                  
                           useEffect(() =>{
                            const long=lon
                              if(!long && long!=="")
                              {
                                setLon("");
                                return;
                              }
                              setLon(long);
                              }, [lon]
                               );
                  
                               
                    
                                   useEffect(() =>{
                                    const saRN=saRegNo
                                      if(!saRN && saRN!=="")
                                      {
                                        setSARegNo("");
                                        return;
                                      }
                                      setSARegNo(saRN);
                                      }, [saRegNo]
                                       );


  return (
    <View>
      <View
        
        style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill Details Below</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
            placeholder="+2547xxxxxxxx"
              value={saRegNo}
              onChangeText={setSARegNo}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFKubwa Phone number</Text>
          </View>
          
          <View style={styles.sendLoanView}>
            <TextInput
            placeholder={"+2547xxxxxxxx"}
              value={phoneContact}
              onChangeText={setPhoneContact}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Phone</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={nam}
              onChangeText={setName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Name</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={BkAcNu}
              onChangeText={setBkAcNu}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Bank Name</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={BkName}
              onChangeText={setBkName}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Bank Ac Number</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={eml}
              onChangeText={setEml}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Email</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              secureTextEntry = {true}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Pass Word</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
            
              value={lat}
              onChangeText={setLat}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Location Latitude</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
            
              value={lon}
              onChangeText={setLon}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>Location Longitude</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
            
              value={twn}
              onChangeText={settwn}
              style={styles.sendLoanInput}
              editable={true}></TextInput>
            <Text style={styles.sendLoanText}>MFNdogo Nearby Town</Text>
          </View>

          <TouchableOpacity
            onPress={gtMFKDtsl}
            style={styles.sendLoanButton}>
            <Text style={styles.sendLoanButtonText}>
              Click to Create Account
            </Text>
            {isLoading && <ActivityIndicator color={'blue'} size = "large" />}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterKFNdgAcForm;