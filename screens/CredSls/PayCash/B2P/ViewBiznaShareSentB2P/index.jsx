import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import NonLnSent from "../../../../../components/MyAc/ViewSentNonLns";
import styles from './styles';
import { getBizna, getCompany, getSMAccount,   listBizSls,   listBiznas,   listPersonels,   vwMyRecMny, vwMyRecMny7, vwMySntMny7 } from '../../../../../src/graphql/queries';
import { updateCompany, updateSMAccount } from '../../../../../src/graphql/mutations';
import { TextInput } from 'react-native-gesture-handler';

const FetchSMNonLnsSnt = props => {

    
    const [loading, setLoading] = useState(false);
    const [Recvrs, setRecvrs] = useState([]);
    const [itemPrys, setitemPrys] = useState('');
    const[isLoading, setIsLoading] = useState(false);
   
    

        const fetchLoanees = async () => {
            
        if(isLoading){
          return;
        }
        setIsLoading(true);
      
        const userInfo = await Auth.currentAuthenticatedUser();
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listPersonels, 
              {
                filter: {
                  
                  phoneKontact: { eq: userInfo.attributes.email},
                  BusinessRegNo:{eq: itemPrys}
                                
                  }
                    }
               
                  ));
                  
                  
                  const fetchLoanees2 = async () => {
            
                    if(isLoading){
                      return;
                    }
                    setIsLoading(true);
                  
                    const userInfo = await Auth.currentAuthenticatedUser();
                        try {
                          const Lonees:any = await API.graphql(graphqlOperation(vwMySntMny7, 
                          {
                            
                            senderPhn:itemPrys   ,                                         
                            sortDirection: 'DESC',
                            limit: 100,
                                }
                           
                              ));
                              setRecvrs(Lonees.data.VwMySntMny7.items);
                   
                        } catch (e) {
                          console.log(e);
                        } finally {
                          setIsLoading(false);
                          
                        }
                      };   
                            
                              
              
                      if(parseFloat(Lonees.data.vwMySntMny7.items.length) < 1 )
                      {
                          Alert.alert("Sorry no money received from business yet");
                          return;
                        }
                        else{
                            
                          await fetchLoanees2();
                            }
                            
                              
                         
            } catch (e) {
              console.log(e);
            } finally {
              setIsLoading(false);
              setitemPrys("")
            }
          };
        
          useEffect(() => {
            fetchLoanees();
          }, [])

  return (

    <View style={styles.image}>
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Recvrs}
        renderItem={({item}) => <NonLnSent SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchLoanees}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            
            <Text style={styles.label2}> (Please swipe down to load)</Text>
            <Text style={styles.label}> Money Sent from the business</Text>
          </>
        )}
      />
    </View>
    <View style={styles.sendLoanView}>
                    <TextInput
                       placeholder='Enter Business Phone'
                      value={itemPrys}
                      onChangeText={setitemPrys}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
             
    </View>
    </View>
  );
};

export default FetchSMNonLnsSnt;