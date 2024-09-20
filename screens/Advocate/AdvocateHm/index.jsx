import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

const KFAdvHome = props => {
  const navigation = useNavigation();

 
  const MFAdvocateRegs = () => {
    navigation.navigate('VwCompMFAdvTC');
  };

  const WithdwAdvss = () => {
    navigation.navigate('WithdwAdvs');
  };

  
    const UpdtMFAdvPWss = () => {
      navigation.navigate('UpdtMFAdvPWs');
  
  };

  const EntrAdvLoc = () => {
    navigation.navigate('EntrAdvLoc');

};



  const AdvVwCrdSlsSgnInss = () => {
    navigation.navigate('VwAdvCrdSlrCovLnss');
  };
  const AdvVwSMSgnInss = () => {
    navigation.navigate('VwAdvSMCovLnss');
  };
  const AdvWthdrwlSgnInss = () => {
    navigation.navigate('AdvWthdrwlSgnIns');
  };
  const AdvVwAcSgnInss = () => {
    navigation.navigate('AdvVwAcSgnIns');
  };
  const AdvVwChmSgnInss = () => {
    navigation.navigate('VwAdvChamaCovLnss');
  };

  const Vw2ApprovePPReq = () => {
    navigation.navigate('Vw2ApprovePPReq');
  };
  const Vw2ApproveChmReq = () => {
    navigation.navigate('Vw2ApproveChmReq');
  };
  const Vw2ApproveBizReq = () => {
    navigation.navigate('Vw2ApproveBizReq');
  };

  return (
    
      <SafeAreaView
        
        style={styles.floatimage}>
        
        <View style={styles.floatMainView}>
          <Text style={styles.floatText}> View</Text>

          <View style={styles.viewForFloatPressables}>
          <Pressable
              onPress={AdvVwChmSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>Group Loans</Text>
            </Pressable>
            
            <Pressable
              onPress={AdvVwCrdSlsSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>CredSls</Text>
            </Pressable>

            <Pressable onPress={AdvVwSMSgnInss} style={styles.floatView}>
              <Text style={styles.floatPressableText2}>PalLoans</Text>
            </Pressable>

            <Pressable
              onPress={AdvWthdrwlSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText2}>My Withdrwls</Text>
            </Pressable>

            

            
          </View>
        </View>
        
        <View style={styles.floatMainView}>
          <Text style={styles.floatText}>My Account</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={UpdtMFAdvPWss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>UpdateAc</Text>
            </Pressable>

            <Pressable
              onPress={AdvVwAcSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>ViewAc</Text>
            </Pressable>
            <Pressable
              onPress={MFAdvocateRegs}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>CreateAc</Text>
            </Pressable>

            <Pressable
              onPress={EntrAdvLoc}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>SearchAdvocate</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.floatMainView}>
          <Text style={styles.floatText}>Witness</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={Vw2ApprovePPReq}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>PalPal</Text>
            </Pressable>

            <Pressable
              onPress={Vw2ApproveChmReq}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>Groups</Text>
            </Pressable>
            <Pressable
              onPress={Vw2ApproveBizReq}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>CredSales</Text>
            </Pressable>

            
          </View>
        </View>

        <View style={styles.floatMainView}>
          <Text style={styles.floatText}>Withdrawals</Text>

          <View style={styles.viewForFloatPressables}>
            <Pressable
              onPress={WithdwAdvss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>Make</Text>
            </Pressable>

            <Pressable
              onPress={AdvWthdrwlSgnInss}
              style={styles.floatView}>
              <Text style={styles.floatPressableText}>View</Text>
            </Pressable>
           

            
          </View>
        </View>

       
      </SafeAreaView>
    
  );
};

export default KFAdvHome;