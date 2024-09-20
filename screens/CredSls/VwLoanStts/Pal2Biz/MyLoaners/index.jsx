import React, {useState, useRef,useEffect} from 'react';
import {View, Text, ImageBackground, Pressable, FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../../components/VwCredSales/CrdStatus/Pal/Pal2BizLoaners";
import styles from './styles';
import { getCompany, getSMAccount, listCovCreditSellers, listPersonels, listSMLoansCovereds } from '../../../../../src/graphql/queries';
import { updateCompany, updateSMAccount } from '../../../../../src/graphql/mutations';
import { TextInput } from 'react-native-gesture-handler';


const FetchSMCovLns = props => {

   
    const [loading, setLoading] = useState(false);
    const [Loanees, setLoanees] = useState([]);
    const [Loaneesz, setLoaneesz] = useState([]);
    const [itemPrys, setitemPrys] = useState("");

   

        const fetchUsrDtls = async () => {
          const userInfo = await Auth.currentAuthenticatedUser();
              
        
          try {
                  const MFNDtls: any = await API.graphql(
                      graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}
                  ),);
    
                  const balances = MFNDtls.data.getSMAccount.balance;
                  const owner = MFNDtls.data.getSMAccount.owner; 

                  const fetchPersonels = async () => {
                    setLoading(true);
                    try {
                      const Lonees:any = await API.graphql(graphqlOperation(listPersonels, 
                        {
                                
                                
                              
                              filter:{
                                and :{
                                  phoneKontact:{eq:userInfo.attributes.email},
                                  BusinessRegNo: {eq:itemPrys},
                                }
                              },
                              
                            }
                      
                          ));
                      setLoaneesz(Lonees.data.listPersonels.items);
                  
                  
                  const fetchLoanees = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(listCovCreditSellers, 
                {
                        
                        
                      
                      filter:{
                        and :{
                      lonBala:{gt:0},
                      buyerContact: {eq:itemPrys},
                      lnType:{eq:"Pal2Biz"},
                        }
                       
                      },
                      
                  
                    }
              
                  ));
              setLoanees(Lonees.data.listCovCreditSellers.items);

          
                      }
          
                      catch (e)
                      {
                        if(e){
                          console.log(e)
                        }
                         
                      }    
          
                      
                      
                       }
                       if (userInfo.attributes.sub!==owner) {
                        Alert.alert("Please first create a main account")
                        return;
                      }  else {
                       await fetchLoanees();}

                      }
          
                      catch (e)
                      {
                        if(e){
                          console.log(e)
                        }
                          
                         
                          
                      }    
          
                      
                      
                       }
                       
                       await fetchPersonels();
            } catch (e) {
            console.log(e);
            } finally {
            setLoading(false);
            setitemPrys("");
            }
            };
            
            useEffect(() => {
            fetchUsrDtls();
            }, [])   

            useEffect(() =>{
              const itemPryss=itemPrys
                if(!itemPryss && itemPryss!=="")
                {
                  setitemPrys("");
                  return;
                }
                setitemPrys(itemPryss);
                }, [itemPrys]
                 );


  return (
    <View style={styles.image}>

    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
      data={Loanees}
      renderItem={({item}) => <LnerStts Loanee={item} />}
      keyExtractor={(item, index) => index.toString()}
      onRefresh={fetchUsrDtls}
      refreshing={loading}
      showsVerticalScrollIndicator={false}
      ListHeaderComponentStyle={{alignItems: 'center'}}
      ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> Business Loaners</Text>
            <Text style={styles.label2}> (Fill below and swipe here to filter)</Text>
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

export default FetchSMCovLns;