import React, {useState, useEffect} from 'react';
import {View, Text,   FlatList, Alert} from 'react-native';

import { API, graphqlOperation, Auth } from 'aws-amplify';
import ChamReminfo from "../../../../../components/Chama/ChmActivities/ChmRemit/VwChama";
import styles from './styles';

import { useRoute } from '@react-navigation/native';
import { getCompany, getGroup,  vwChamaMemberssss } from '../../../../../src/graphql/queries';
import { updateCompany, updateGroup } from '../../../../../src/graphql/mutations';

const FetchSMCovLns = props => {

    const[LnerPhn, setLnerPhn] = useState(null);
    const [loading, setLoading] = useState(false);
    const [Chm, setChm] = useState([]);

    const route = useRoute();
   

        const fetchChm = async () => {
            setLoading(true);
            try {
              const Lonees:any = await API.graphql(graphqlOperation(vwChamaMemberssss, 
                { grpContact: route.params.grpContact,
                  sortDirection: 'DESC',
                  limit: 100,
                  
                }
                  ));
              setChm(Lonees.data.VwChamaMemberssss.items);

              const fetchUsrDtls = async () => {
                try {
                        const MFNDtls: any = await API.graphql(
                            graphqlOperation(getGroup, {grpContact: route.params.grpContact}
                        ),);
          
                        const grpBals = MFNDtls.data.getGroup.grpBal;
                        
                        const fetchCompDtls = async () => {
                          try {
                                  const MFNDtls: any = await API.graphql(
                                      graphqlOperation(getCompany, {AdminId: "BaruchHabaB'ShemAdonai2"}
                                  ),);
                  
                                  const companyEarningBals = MFNDtls.data.getCompany.companyEarningBal;
                                  const companyEarnings = MFNDtls.data.getCompany.companyEarning;
                                  const enquiryFees = MFNDtls.data.getCompany.enquiryFee;
                                  
                                  
                                              const updtActAdm = async()=>{
                                                
                                                try{
                                                    await API.graphql(
                                                      graphqlOperation(updateCompany,{
                                                        input:{
                                                          AdminId:"BaruchHabaB'ShemAdonai2",
                                                          companyEarningBal:parseFloat(companyEarningBals) + parseFloat(enquiryFees),
                                                          companyEarning:parseFloat(companyEarnings) + parseFloat(enquiryFees),
                                                        }
                                                      })
                                                    )
                                                }
                                                catch(error){
                                                  if(error){
                                                    Alert.alert("Check your internet connection")
                                                    return;
                                                }
                                                }
                                                updtUsrAc();
                                                
                                              }
          
                                              const updtUsrAc = async()=>{
                                                
                                                try{
                                                    await API.graphql(
                                                      graphqlOperation(updateGroup,{
                                                        input:{
                                                          grpContact: route.params.grpContact,
                                                          grpBal:parseFloat(grpBals) - parseFloat(enquiryFees),
                                                        }
                                                      })
                                                    )
                                                }
                                                catch(error){
                                                  if(error){
                                                    Alert.alert("Retry or update app or call customer care")
                                                    return;
                                                }
                                                }
                                                                                                    
                                              }
                          
          
          
                          
          
                  if(parseFloat(grpBals) < parseFloat(enquiryFees) ){
                      Alert.alert("Account Balance is very little");
                    }
                    else{
                        
                      await updtActAdm();
                        }
                        
                          }
                      catch (e)
                      {
                        if(e){
                          Alert.alert("Chama does not exist does not exist; otherwise check internet connection");
                          return;
                        }
                          console.log(e)
                         
                          
                      }    
          
              
                       }
                       await fetchCompDtls();
          
                      }
          
                      catch (e)
                      {
                        if(e){
                          Alert.alert("Chama does not exist; otherwise check internet connection");
                          return;
                        }
                          console.log(e)
                         
                          
                      }    
          
                      
                       }

                       await fetchUsrDtls();
            } catch (e) {
              console.log(e);
            } finally {
              setLoading(false);
            }
          };
        
          useEffect(() => {
            fetchChm();
          }, []) 

  return (
    <View style={styles.root}>
      <FlatList
      style= {{width:"100%"}}
        data={Chm}
        renderItem={({item}) => <ChamReminfo ChamaRemitDtls={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchChm}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{alignItems: 'center'}}
        ListHeaderComponent={() => (
          <>
            
            <Text style={styles.label}> Chama Remittance to Members</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMCovLns;