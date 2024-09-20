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
import { TouchableOpacity } from 'react-native-gesture-handler';

const MyAccount = props => {
  const navigation = useNavigation();

  const SMDpsitsss = () => {
    navigation.navigate('ElimDpstss');
  };

  const ViewNonLnsRecs = () => {
    navigation.navigate('ViewNonLnsRecs');
  };

  const ViewNonLnsSents = () => {
    navigation.navigate('ViewNonLnsSents');
  };

  const Vw2DelLnReqs = () => {
    navigation.navigate('Vw2DelLnReqs');
  };

  const SearchUser = () => {
    navigation.navigate('VwMakeLnReq');
  };

  const goToCreateSMAc = () => {
    navigation.navigate('CreateSMAc');
  };

  const SMWthdrwlsss = () => {
    navigation.navigate('ElimWthdrwlss');
  };

  const goWithdrwMny = () => {
    navigation.navigate('SMWthdFm');
  };

  const goToSMASndnonln = () => {
    navigation.navigate('Vw2SelectChmBeneficiary');
  };

  const UpdateSMPWss = () => {
    navigation.navigate('UpdateSMPWs');
  };

  const ViewSmAcss = () => {
    navigation.navigate('ElimAcs');
  };

  const LoanAds = () => {
    navigation.navigate('LoanAds');
  };

  const UpdateMainAc = () => {
    navigation.navigate('UpdateMainAc');
  };

  const PayPalDposit = () => {
    navigation.navigate('VwAcBfDpst');
  };

  const VwPlLn2Remove = () => {
    navigation.navigate('VwPlLn2Remove');
  };

  return (
    <SafeAreaView>
      <View
        
        style={styles.image}>

<View style={styles.accountView}>
          <Text style={styles.accountText}>Account</Text>

          <View style={styles.viewForSalesPressables}>
            

            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>User Deposit</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={PayPalDposit} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Make</Text>
            </Pressable>
            <Pressable onPress={SMDpsitsss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
            </View>
            </View>

            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}></Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={UpdateMainAc} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Update Account</Text>
            </Pressable>
            <Pressable onPress={goToSMASndnonln} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Send Cash</Text>
            </Pressable>
            </View>
            </View>

            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>View Cash Sent to Pals</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={ViewNonLnsSents} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Sent</Text>
            </Pressable>
            <Pressable onPress={ViewNonLnsRecs} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Rec</Text>
            </Pressable>
            </View>
            </View>
          </View>
        </View>
        <View style={styles.accountView}>
          <Text style={styles.accountText}>MyMoney</Text>

          <View style={styles.viewForSalesPressables}>
            
            

            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>Withdrawals</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={goWithdrwMny} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Make</Text>
            </Pressable>
            <Pressable onPress={SMWthdrwlsss} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>View</Text>
            </Pressable>
            </View>
            </View>

            
            
            
            <Pressable onPress={SearchUser} style={styles.acPressables}>
              <Text style={styles.acPressableText}>Search Pal</Text>
            </Pressable>

            
           
          



            <View style={styles.acPressables}>
            <View >
            <Text style={styles.acPressableText}>Loan Adverts</Text>
            </View>
            <View style = {{flexDirection:"row"}}>
            <Pressable onPress={LoanAds} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Make</Text>
            </Pressable>
            <Pressable onPress={VwPlLn2Remove} style={styles.acNonLnsPressables}>
              <Text style={styles.acPressableText}>Delete</Text>
            </Pressable>
            </View>
            </View>
           
          </View>
        </View>


      </View>
    </SafeAreaView>
  );
};

export default MyAccount;