import React, { useState } from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { createSMAccount, updateCompany } from '../../../src/graphql/mutations';
import { getCompany, listSMAccounts } from '../../../src/graphql/queries';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';

// Define types for GraphQL responses
type SMAccount = {
  nationalid: string;
  awsemail: string;
  // Include other relevant fields
};

type ListSMAccountsResponse = {
  listSMAccounts: {
    items: SMAccount[];
  };
};

type GetCompanyResponse = {
  getCompany: {
    ttlActiveUsers: number;
  };
};

const CreateAcForm = () => {
  const navigation = useNavigation();
  const [nationalId, setNationalId] = useState('');
  const [pword, setPW] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle account creation
  const handleCreateAccount = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      // Check if the National ID already exists
      const { data: UsrDtls } = await API.graphql(
        graphqlOperation(listSMAccounts, {
          filter: { nationalid: { eq: nationalId } }
        })
      ) as { data: ListSMAccountsResponse };

      // Check if the email already exists
      const { data: UsrDtlsz } = await API.graphql(
        graphqlOperation(listSMAccounts, {
          filter: { awsemail: { eq: userInfo.attributes.email } }
        })
      ) as { data: ListSMAccountsResponse };

      // Validate inputs
      if (pword.length < 8) {
        Alert.alert("Password too short", "Password must be at least 8 characters.");
        return;
      }
      if (UsrDtls.listSMAccounts.items.length > 0) {
        Alert.alert("Duplicate National ID", "National ID already exists.");
        return;
      }
      if (UsrDtlsz.listSMAccounts.items.length > 0) {
        Alert.alert("Duplicate Email", "Email already exists.");
        return;
      }

      // Get company details
      const { data: compDtls } = await API.graphql(
        graphqlOperation(getCompany, { AdminId: "BaruchHabaB'ShemAdonai2" })
      ) as { data: GetCompanyResponse };

      const actvSMUsrs = compDtls.getCompany.ttlActiveUsers;

      // Create new SM account
      await API.graphql(
        graphqlOperation(createSMAccount, {
          input: {
            nationalid: nationalId,
            name: userInfo.username,
            phonecontact: userInfo.attributes.phone_number,
            awsemail: userInfo.attributes.email,
            balance: 0,
            p2pchmBenefits: 0,
            pw: pword,
            nationality: "Kenyan",
            MFKubwaCost: 0,
            MFKubwaNetCost: 0,
            MFNdogoDue: 0,
            MFNdogoNet: 0,
            beneficiary: userInfo.attributes.email,
            beneficiaryAmt: 0,
            loanAcceptanceCode: userInfo.attributes.email,
            ttlDpstSM: 0,
            TtlWthdrwnSM: 0,
            TtlActvLonsTmsLnrCov: 0,
            TtlActvLonsTmsLneeCov: 0,
            TtlActvLonsAmtLnrCov: 0,
            TtlActvLonsAmtLneeCov: 0,
            TtlBLLonsTmsLnrCov: 0,
            TtlBLLonsTmsLneeCov: 0,
            TtlBLLonsAmtLnrCov: 0,
            TtlBLLonsAmtLneeCov: 0,
            TtlClrdLonsTmsLnrCov: 0,
            TtlClrdLonsTmsLneeCov: 0,
            TtlClrdLonsAmtLnrCov: 0,
            TtlClrdLonsAmtLneeCov: 0,
            TtlActvLonsTmsLneeChmCov: 0,
            TtlActvLonsAmtLneeChmCov: 0,
            TtlBLLonsTmsLneeChmCov: 0,
            TtlBLLonsAmtLneeChmCov: 0,
            TtlClrdLonsTmsLneeChmCov: 0,
            TtlClrdLonsAmtLneeChmCov: 0,
            TtlActvLonsTmsSllrCov: 0,
            TtlActvLonsTmsByrCov: 0,
            TtlActvLonsAmtSllrCov: 0,
            TtlActvLonsAmtByrCov: 0,
            TtlBLLonsTmsSllrCov: 0,
            TtlBLLonsTmsByrCov: 0,
            TtlBLLonsAmtSllrCov: 0,
            TtlBLLonsAmtByrCov: 0,
            TtlClrdLonsTmsSllrCov: 0,
            TtlClrdLonsTmsByrCov: 0,
            TtlClrdLonsAmtSllrCov: 0,
            TtlClrdLonsAmtByrCov: 0,
            TtlActvLonsTmsLnrNonCov: 0,
            TtlActvLonsTmsLneeNonCov: 0,
            TtlActvLonsAmtLnrNonCov: 0,
            TtlActvLonsAmtLneeNonCov: 0,
            TtlBLLonsTmsLnrNonCov: 0,
            TtlBLLonsTmsLneeNonCov: 0,
            TtlBLLonsAmtLnrNonCov: 0,
            TtlBLLonsAmtLneeNonCov: 0,
            TtlClrdLonsTmsLnrNonCov: 0,
            TtlClrdLonsTmsLneeNonCov: 0,
            TtlClrdLonsAmtLnrNonCov: 0,
            TtlClrdLonsAmtLneeNonCov: 0,
            TtlActvLonsTmsLneeChmNonCov: 0,
            TtlActvLonsAmtLneeChmNonCov: 0,
            TtlBLLonsTmsLneeChmNonCov: 0,
            TtlBLLonsAmtLneeChmNonCov: 0,
            TtlClrdLonsTmsLneeChmNonCov: 0,
            TtlClrdLonsAmtLneeChmNonCov: 0,
            TtlActvLonsTmsSllrNonCov: 0,
            TtlActvLonsTmsByrNonCov: 0,
            TtlActvLonsAmtSllrNonCov: 0,
            TtlActvLonsAmtByrNonCov: 0,
            TtlBLLonsTmsSllrNonCov: 0,
            TtlBLLonsTmsByrNonCov: 0,
            TtlBLLonsAmtSllrNonCov: 0,
            TtlBLLonsAmtByrNonCov: 0,
            TtlClrdLonsTmsSllrNonCov: 0,
            TtlClrdLonsTmsByrNonCov: 0,
            TtlClrdLonsAmtSllrNonCov: 0,
            TtlClrdLonsAmtByrNonCov: 0,
            TtlActvLonsTmsLnrCredSlsP2P: 0,
            TtlActvLonsAmtLnrCredSlsP2P: 0,
            TtlBLLonsTmsLnrCredSlsP2P: 0,
            TtlBLLonsAmtLnrCredSlsP2P: 0,
            TtlClrdLonsTmsLnrCredSlsP2P: 0,
            TtlClrdLonsAmtLnrCredSlsP2P: 0,
            TtlActvLonsTmsLnrCredSlsP2B: 0,
            TtlActvLonsAmtLnrCredSlsP2B: 0,
            TtlBLLonsTmsLnrCredSlsP2B: 0,
            TtlBLLonsAmtLnrCredSlsP2B: 0,
            TtlClrdLonsTmsLnrCredSlsP2B: 0,
            TtlClrdLonsAmtLnrCredSlsP2B: 0,
            TtlActvLonsTmsLneeB2P: 0,
            TtlActvLonsAmtLneeB2P: 0,
            TtlBLLonsTmsLneeB2P: 0,
            TtlBLLonsAmtLneeB2P: 0,
            TtlClrdLonsTmsLneeB2P: 0,
            TtlClrdLonsAmtLneeB2P: 0,
            ttlActiveSMUsers: actvSMUsrs + 1
          }
        }
      ));

      
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "There was an error creating the account.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.image}>
        <View style={styles.loanTitleView}>
          <Text style={styles.title}>Create SM Account</Text>
        </View>

        <TextInput
          style={styles.sendLoanInput}
          placeholder="Enter National ID"
          value={nationalId}
          onChangeText={setNationalId}
        />
        <TextInput
          style={styles.sendLoanInput}
          placeholder="Enter Password"
          secureTextEntry
          value={pword}
          onChangeText={setPW}
        />

        <TouchableOpacity
          style={styles.sendLoanButton}
          onPress={handleCreateAccount}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Text style={styles.sendLoanButtonText}>Create Account</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CreateAcForm;
