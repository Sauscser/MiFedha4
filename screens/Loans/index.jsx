import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const MyLoanAccount = props => {
  const navigation = useNavigation();
  const [id, setId] = useState("");
  
  const ChmNMmbrPhns = id;
  const ChmNMmbrPhnss = id;
 

  const Vw2RpyCovss = () => {
    navigation.navigate('ElimRpyChmCvs');
  };

  const Vw2RpyNonCovss = () => {
    navigation.navigate('ElimRpyChmNonCvs');
  };

  const SIBiz2Pal2Repay = () => {
    navigation.navigate('SIBiz2Pal2Repay');
  };

  const Vw2RpyP2P = () => {
    navigation.navigate('Vw2RpyP2P');
  };

  const SignIn2GrntLnReq = () => {
    navigation.navigate('SignIn2GrntLnReq');
  };

  const PalVw2GrantLnReq2 = () => {
    navigation.navigate('PalVw2GrantLnReq2');
  };
  

  const Vw2BLPal2Pal = () => {
    navigation.navigate('Vw2BLPal2Pal');
  };

  const VwP2PMyLoaners = () => {
    navigation.navigate('VwP2PMyLoaners');
  };
  const VwP2PMyLoanees = () => {
    navigation.navigate('VwP2PMyLoanees');
  };

  const VwB2PMyLoaners = () => {
    navigation.navigate('VwB2PMyLoaners');
  };

  const ViewMyNonCovLoaneess = () => {
    navigation.navigate('ElimLnsNonCvLnees');
  };

  const ViewMyNonCovLoanersss = () => {
    navigation.navigate('ElimLnsNonCvLnrs');
  };

  const SISgnInToBLB2P = () => {
    navigation.navigate('SISgnInToBLB2P');
  };

  const SI2VwB2PLoanees = () => {
    navigation.navigate('SI2VwB2PLoanees');
  };

  const PalLnStsB2PLnee = () => {
    navigation.navigate('PalLnStsB2PLnee');
  };

  const Vw2BLCovSMLnss = () => {
    navigation.navigate("Vw2BLCovSMLns", {ChmNMmbrPhns});
  };

  const Vw2BLSMNonCovss = () => {
    navigation.navigate("Vw2BLSMNonCovs", {ChmNMmbrPhnss});
  };

  const ViewNonLnsSntSMss = () => {
    navigation.navigate('ElimLPSMSents');
  };

  const ViewNonLnsRecSMss = () => {
    navigation.navigate('ElimLPSMRecs');
  };

  const ViewNonLnsRecCredSlrss = () => {
    navigation.navigate('SnIn2VwCrdSlLPs');
  };


  const ViewNonLnsSntCredSlrss = () => {
    navigation.navigate('ElimLPCredSents');
  };

  const ViewNonLnsSntChmss = () => {
    navigation.navigate('ElimLPChmSents');
  };

  const ChamaSignIn2VwLnRpymntss = () => {
    navigation.navigate('ChamaSignIn2VwLnRpymnts');
  };

  const Vw2RepyCredSlsCovLnss = () => {
    navigation.navigate('ElimRpyCredCovs');
  };

  const Vw2RepyCredSlsNonCovLnss = () => {
    navigation.navigate('ElimRpyCredNonCovs');
  };


  

  

  return (
   
      
      <SafeAreaView>
     
        
          
        <View style={styles.adminImage}>
          
          


            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Loans </Text>
              <View style={styles.viewForClientsAndTitle}>

              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Grant Loan Requests</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SignIn2GrntLnReq}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}> Biz2Pal</Text>
                    </Pressable>

                    <Pressable
                      onPress={PalVw2GrantLnReq2}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                     Pal2Pal
                      </Text>
                    </Pressable>
                  </View>
                </View>


              <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>BizLoanStatus</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={SI2VwB2PLoanees}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>Company Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={VwB2PMyLoaners}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      Loaning Companies
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>PalLoanStatus</Text>

                  <View style={styles.viewForClientsPressables}>
                    <Pressable
                      onPress={VwP2PMyLoanees}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>My Loanees</Text>
                    </Pressable>

                    <Pressable
                      onPress={VwP2PMyLoaners}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      My Loaners
                      </Text>
                    </Pressable>
                  </View>
                </View>

               

                


              </View>
            </View>


     
     </View>
    
    </SafeAreaView>

   
  );
};

export default MyLoanAccount;