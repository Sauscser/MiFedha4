import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  
  Pressable,
  
  SafeAreaView,
  ScrollView,
  
} from 'react-native';
import styles from './styles';

const MyLoanAccount = props => {
  const navigation = useNavigation();
  const[id, setID] =useState("")
  const[ChamaNMember, setChamaNMember] =useState("")


  const CreateChmss = () => {
    navigation.navigate('CreateChms');
  };

  
  
  const AddChmMembrssss = () => {
    navigation.navigate('AddChmMembrsss');
  };
  
  const MmbrSndChmsss = () => {
    navigation.navigate('MmbrSndChmss');
  };

  const SgnIn2RemoveMmbrss = () => {
  navigation.navigate('RemoveChmMbrs', {id});
  };

  const SgnIn2BLCovss = () => {
    navigation.navigate('SgnIn2BLCovs');
  };

  const SgnIn2BLNonCovss = () => {
    navigation.navigate('SgnIn2BLNonCovs');
  };

  const DissolveChmss = () => {
    navigation.navigate('DissolveChms');
  };

  const UpdateChmss = () => {
    navigation.navigate('UpdateChms');
  };

  const ChmSignInsss = () => {
    navigation.navigate('ChmSignInss');
  };
  const ChmLnsRec = () => {
    navigation.navigate('ChmLnsRec');
  };
  const ChmLnsSent = () => {
    navigation.navigate('ChmLnsRec', );
  };
  const ChmLnsRecNonCovss = () => {
    navigation.navigate('ElimChmVwNonCvLns');
  };

  const ChamSignIn3ss = () => {
    navigation.navigate('ChamSignIn3s');
  };

  const ChamSignIn4ss = () => {
    navigation.navigate('ChamSignIn4s');
  };

  const ChmSignIn5ss = () => {
    navigation.navigate('ChmSignIn5s');
  };

  const ChmSignIn6ss = () => {
    navigation.navigate('ChmSignIn6s');
  };

  const ChamaSndMbrMneyss = () => {
    navigation.navigate('SndMbrsMnys', {id});
  };

  const ChmMmbrContriss = () => {
    navigation.navigate('ElimChmVwCntrMembrs');
  };

  const ChmMmbrMmbrsss = () => {
    navigation.navigate('ElimChmVwMbrshpMembrs');
  };
  const Vw2RpyCovss = () => {
    navigation.navigate('ElimRpyChmCvs');
  };

  const Vw2RpyNonCovs = () => {
    navigation.navigate('ElimRpyChmNonCvs');
  };

  const ChamaMmbrRemtss = () => {
    navigation.navigate('ElimChmVwRmtncMembrs');
  };

  const SignitoryWthdrwFndssss = () => {
    navigation.navigate('SignitoryWthdrwFndsss');
  };

  const SgnIn2VwChmDpstsss = () => {
    navigation.navigate('SgnIn2VwChmDpstss');
  };

  const SgnIn2VwChmWthdrwlsss = () => {
    navigation.navigate('SgnIn2VwChmWthdrwlss');
  };

  const Sgn2CnfrmWthdrwlssss = () => {
    navigation.navigate('Sgn2CnfrmWthdrwlsss');
  };

  

  const VwGrp2LnCov = () => {
    navigation.navigate('VwGrp2LnCov');
  };

  const UpdateChmAc = () => {
    navigation.navigate('UpdateChmAc');
  };


  return (
    <SafeAreaView>
      <ScrollView>
          <View style={styles.adminImage}>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Chama Loan</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  
                  <Pressable onPress={VwGrp2LnCov}
                  
                  style={styles.viewForClientsPressables}>
                    <Text style={styles.salesPressableText}>Give Loan</Text>
                  </Pressable>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  
                  <Pressable onPress={ChmSignInsss}
                  
                  style={styles.viewForClientsPressables}>
                    <Text style={styles.salesPressableText}>Group Status</Text>
                  </Pressable>
                </View>

                <View style={styles.viewForClientsCategories}>
                  
                  <Pressable onPress={ChmLnsRec}
                  
                  style={styles.viewForClientsPressables}>
                    <Text style={styles.salesPressableText}>Member Status</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}></Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Registration</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={AddChmMembrssss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Reg</Text>
                    </Pressable>

                    <Pressable
                      onPress={SgnIn2RemoveMmbrss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        De-Reg
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Chama Remittance</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ChamSignIn4ss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Chama</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChamaMmbrRemtss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Member
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Membership</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={ChmSignIn6ss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Chama</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChmMmbrMmbrsss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      Member
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

        <View style={styles.clientsView2}>
              <Text style={styles.salesText}>Chama Account</Text>

              <View style={styles.viewForClientsAndTitle}>
              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Account</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={CreateChmss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Create</Text>
                    </Pressable>

                    <Pressable
                      onPress={DissolveChmss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Dissolve
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Account</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={UpdateChmAc}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Update</Text>
                    </Pressable>

                    <Pressable
                      onPress={ChamSignIn3ss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        View
                      </Text>
                    </Pressable>
                  </View>
                </View>


                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Signatory Works</Text>

                  <View style={styles.viewForClientsPressables}>

                    <View style={styles.ClientsPressablesLnStts}>

                      <View style={styles.viewForClientsCategoriesChama2}>
                      <Text style={styles.salesPressableText}>Withdrwls</Text>
                      </View>

                    <View style={styles.viewForClientsCategoriesChama4}>
                    <Pressable
                      onPress={Sgn2CnfrmWthdrwlssss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>Confirm</Text>
                    </Pressable>

                    <Pressable
                      onPress={SignitoryWthdrwFndssss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>
                      Execute
                      </Text>
                    </Pressable>
                    </View>
                    </View>

                    <View style={styles.ClientsPressablesLnStts}>

                      <View style={styles.viewForClientsCategoriesChama2}>
                      <Text style={styles.salesPressableText}>View</Text>
                      </View>

                    <View style={styles.viewForClientsCategoriesChama4}>
                    <Pressable
                      onPress={SgnIn2VwChmDpstsss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>Deposits</Text>
                    </Pressable>

                    <Pressable
                      onPress={SgnIn2VwChmWthdrwlsss}
                      style={styles.viewForClientsCategoriesChama3}>
                      <Text style={styles.clientsPressableTextStts}>
                      Wthdrwls
                      </Text>
                    </Pressable>
                    </View>
                    </View>
                    
                  </View>
                </View>

                
              </View>
            </View>

            
            

          
    </View> 
    </ScrollView>
    </SafeAreaView> 
    
  );
};

export default MyLoanAccount;