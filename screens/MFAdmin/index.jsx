import React from 'react';
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

const RegKFKubwa = props => {
  const navigation = useNavigation();

  const goToBuyFloat = () => {
    navigation.navigate('BuyFltFm');
  };

  const RegPwnBrkrss = () => {
    navigation.navigate('RegPwnBrkrs');
  };

  const AdjustUsrLimitsss = () => {
    navigation.navigate('AdjustUsrLimitss');
  };

  const DActvteMFAds = () => {
    navigation.navigate('DActvteMFAd');
  };

  const PwnBrkrRegss = () => {
    navigation.navigate('PwnBrkrRegss');
  };

  const ChamaRegss = () => {
    navigation.navigate('ChamaRegss');
  };

  const DActivateMFN = () => {
    navigation.navigate('DActvteMFN');
  };
  const DActivateMFK = () => {
    navigation.navigate('DActvteMFK');
  };

  const DActivateMFUsr = () => {
    navigation.navigate('DActvteMFUsr');
  };

  const UpdateMFAdminPWss = () => {
    navigation.navigate('UpdateMFAdminPWs');
  };
  const BLUsrsss = () => {
    navigation.navigate('BLUsrss');
  };

  const SendNonLonsRevSgnIns = () => {
    navigation.navigate('SendNonLonsRevSgnIn');
  };  

  const AddMFndogoss = () => {
    navigation.navigate('AddMFNdogos');
  };  

  const AddMFKubwass = () => {
    navigation.navigate('AddMFKubwas');
  };  

  const crtAdmin = () => {
    navigation.navigate('CrtAdmin');
  };



  
  return (
    <SafeAreaView>
     
        
          <View style={styles.adminImage}>

            <View style={styles.clientsView}>
              <Text style={styles.salesText}>Clients</Text>

              <View style={styles.viewForClientsAndTitle}>
                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>MFNdogo</Text>

                  <View style={styles.viewForClientsAndTitleMFNdogo}>
                   

                    <Pressable
                      onPress={DActivateMFN}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        DeReg
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={goToBuyFloat}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Buy Flt
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={AddMFndogoss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        Add
                      </Text>
                    </Pressable>
                  </View>
                </View>

            

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>MFKubwa</Text>

                  <View style={styles.viewForClientsPressables}>
                   

                    <Pressable
                      onPress={DActivateMFK}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        DeRegMFK
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={ChamaRegss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                        RegChm
                      </Text>
                    </Pressable>

                    <Pressable
                      onPress={AddMFKubwass}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                       Add
                      </Text>
                    </Pressable>
                  </View>
                </View>

                <View style={styles.viewForClientsCategories}>
                  <Text style={styles.salesPressableText}>Advocate</Text>

                  <View style={styles.viewForClientsPressables}>
                    

                    <Pressable
                      onPress={DActvteMFAds}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      DeRegMFAdv
                      </Text>
                      
                    </Pressable>

                    <Pressable
                      onPress={PwnBrkrRegss}
                      style={styles.ClientsPressables}>
                      <Text style={styles.clientsPressableText}>
                      RegPwnBrkr
                      </Text>
                      
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          
            <View style={styles.acEarningsView}>
            <Text style={styles.salesText}>Others</Text>

            <View style={styles.viewForAcEarningsPressables}>
              
              

              <Pressable
                onPress={UpdateMFAdminPWss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>UpdatePW</Text>
              </Pressable>
              <Pressable
                onPress={RegPwnBrkrss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>RegLner</Text>
              </Pressable>

              <Pressable
                onPress={SendNonLonsRevSgnIns}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>Reverse</Text>
              </Pressable>

             
              
            </View>
          </View>


          <View style={styles.acEarningsView}>
              <Text style={styles.salesText}>SM Users</Text>

              

                  <View style={styles.viewForAcEarningsPressables}>
                    
                    <Pressable
                      onPress={DActivateMFUsr}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>DActivtUsr</Text>
                    </Pressable>

                    <Pressable
                      onPress={BLUsrsss}
                      style={styles.earningsAcPressables}>
                      <Text style={styles.earningsAcPressableText}>
                        BLUsr
                      </Text>
                    </Pressable>

                    <Pressable
                onPress={AdjustUsrLimitsss}
                style={styles.earningsAcPressables}>
                <Text style={styles.earningsAcPressableText}>AdjUsrLim</Text>
              </Pressable>
                  </View>
                </View>

          
         

         
       
    </View> 
    </SafeAreaView>
  );
};

export default RegKFKubwa;