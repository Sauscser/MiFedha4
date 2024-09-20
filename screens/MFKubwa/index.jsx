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

const KFKubwaScreen = props => {
  const navigation = useNavigation();

  

  const ApplyMFKubwa = () => {
    navigation.navigate('ApplyMFKubwa');
  };

  

  const UpdtMFKPWss = () => {
    navigation.navigate('UpdtMFKPWs');
  };

  const RegMFKbwsz = () => {
    navigation.navigate('VwCompMFKTC');}

    const RegMFKbws = () => {
      navigation.navigate('VwToRegMFK');}

    

      const MFKWthdrwss = () => {
        navigation.navigate('MFKWthdrws');
  };

  const VwMFKAcSgnInss = () => {
    navigation.navigate('VwMFKAcSgnIns');}

    const VwMFKWthdrwlsSgnInss = () => {
      navigation.navigate('VwMFKWthdrwlsSgnIns');
    };
    const MFKVwMFNSgnInsss = () => {
      navigation.navigate('MFKVwMFNSgnInss');
    };

    const UpdateMFKComss = () => {
      navigation.navigate('UpdateMFKComs');
    };
  
    

  return (
    <SafeAreaView>
      <View
        
        style={styles.kfkubwaimage}>
        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}>My MFNdogos</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={MFKVwMFNSgnInsss}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>View</Text>
            </Pressable>

          </View>
        </View>

        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}>My Account</Text>

          <View style={styles.viewForkfkubwaPressables}>
            <Pressable
              onPress={UpdtMFKPWss}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>UpdateAc</Text>
            </Pressable>

            <Pressable
              onPress={VwMFKAcSgnInss}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>ViewAc</Text>
            </Pressable>

            <Pressable
              onPress={RegMFKbws}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>CreateAc</Text>
            </Pressable>

            <Pressable
              onPress={ApplyMFKubwa}
              style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Apply4Ac</Text>
            </Pressable>

          </View>
        </View>

        <View style={styles.kfkubwaMainView}>
          <Text style={styles.kfkubwaText}> Earnings</Text>

          <View style={styles.viewForkfkubwaPressables}>
            

            <Pressable onPress={MFKWthdrwss} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>Withdraw</Text>
            </Pressable>

            <Pressable onPress={VwMFKWthdrwlsSgnInss} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>My Withdrawals</Text>
            </Pressable>

            <Pressable onPress={UpdateMFKComss} style={styles.kfkubwaView}>
              <Text style={styles.kfkubwaPressableText}>UpdtCom</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KFKubwaScreen;