import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import NonLnSent from "../../../../components/MyAc/VwDeposits";
import styles from './styles';

import {  getBizna, getSMAccount, vwMyUsrDposits, vwMyUsrWthdrwls } from '../../../../src/graphql/queries';
import { TextInput } from 'react-native-gesture-handler';

const FetchSMNonLnsSnt = props => {

   
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const [BizPhone, setBizPhone] = useState("");

    const [ownr, setownr] = useState("");

    
      
      const fetchUsrDtls = async () => {

      const userInfo = await Auth.currentAuthenticatedUser();
      try {
              const MFNDtls: any = await API.graphql(
                  graphqlOperation(getBizna, {BusKntct: BizPhone}
              ),);

              
              const owner = MFNDtls.data.getBizna.owner;
              
          const fetchLoanees = async () => {
          
            setLoading(true);
          
            try {
              const Lonees:any = await API.graphql(graphqlOperation(vwMyUsrDposits, 
                { 
                      depositerid: BizPhone,
                      sortDirection: "DESC",
                      limit:100
                      
                    }
               
                  ))
                  setRecvrs(Lonees.data.VwMyUsrDposits.items);
                  console.log(Lonees)
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };
        
          if (userInfo.attributes.sub!==owner) {
            Alert.alert("You are not the owner of the Business")
            return;
          }  else {
           await fetchLoanees();}
} catch (e) {
console.log(e);
} finally {
setLoading(false);
setBizPhone("");
}
};

useEffect(() => {
fetchUsrDtls();
}, [])   

useEffect(() =>{
  const BizPhones=BizPhone
    if(!BizPhones && BizPhones!=="")
    {
      setBizPhone("");
      return;
    }
    setBizPhone(BizPhones);
    }, [BizPhone]
     );

  return (
    <View style={styles.image}>

    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Recvrs}
        renderItem={({item}) => <NonLnSent SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchUsrDtls}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> Business Deposits</Text>
            <Text style={styles.label2}> (Fill below and swipe here to filter)</Text>
          </>
        )}
      />

</View>

<View style={styles.sendLoanView}>
                    <TextInput
                                         placeholder='Enter Business Phone'
                     
                      value={BizPhone}
                      onChangeText={setBizPhone}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
             
    </View>
    </View>
  );
};

export default FetchSMNonLnsSnt;