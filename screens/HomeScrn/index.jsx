import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import { NavigationProps } from '../../types'; // Adjust the import path
import { generateClient } from 'aws-amplify/api';
import { getCompany } from '../../src/graphql/queries';

// Initialize the client
const client = generateClient();

const HomeScreen: React.FC<NavigationProps<'HomeScreen'>> = ({ navigation }) => {
  const [alert, setAlert] = useState<string>("");

  const getCompanyDetails = async () => {
    try {
      const response: any = await client.graphql({
        query: getCompany,
        variables: { AdminId: "BaruchHabaB'ShemAdonai2" }
      });
      setAlert(response.data.getCompany.alert);
    } catch (error) {
      console.log('Error fetching company details:', error);
    }
  };

  useEffect(() => {
    getCompanyDetails();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.image}>
        <View style={styles.viewForPressables1}>
          <TouchableOpacity
            onPress={() => navigation.navigate('WelcomePgss')}
            style={styles.loanFriendButton}
          >
            <Text style={styles.loanAFriendText}>Create Main Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewSmAcs')}
            style={styles.loanFriendButton}
          >
            <Text style={styles.loanAFriendText}>View Main Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewForPressables2}>
          <Text style={styles.title}>Life is helping out each other</Text>
        </View>

        <View style={styles.viewForPressables3}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LnsScreen')}
            style={styles.chamaLoanAndCreditSalesButton4}
          >
            <Text style={styles.ChamaLoanAndCreditSalesText4}>Pal-Pal Products</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChamaScreen')}
            style={styles.chamaLoanAndCreditSalesButton4}
          >
            <Text style={styles.ChamaLoanAndCreditSalesText4}>Chama Products</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CredSlsScreen')}
            style={styles.chamaLoanAndCreditSalesButton4}
          >
            <Text style={styles.ChamaLoanAndCreditSalesText4}>Business Products</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewForPressables5}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RequestLoansPage')}
            style={styles.chamaLoanAndCreditSalesButton4}
          >
            <Text style={styles.loanAFriendText2}>Request Loan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewForPressables6}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewAlertDtls')}
            style={styles.loanFriendButton2}
          >
            <Text style={styles.loanAFriendText3}>{alert}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
