import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { generateClient } from 'aws-amplify/api';
import { getSMAccount, listSMAccounts } from '../../../src/graphql/queries';
import LnerStts from "../../../components/MyAc/ViewAc";
import styles from './styles';
import { getCurrentUser } from 'aws-amplify/auth';

// Initialize the client
const client = generateClient();

const FetchSMNonCovLns = () => {
  const [LneePhn, setLneePhn] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Loanees, setLoanees] = useState([]);

  const fetchUsrDtls = async () => {
    setLoading(true);
    try {
      const user = await getCurrentUser();
      const email = user.signInDetails?.email;

      if (!email) {
        throw new Error('User email not found.');
      }

      const MFNDtls: any = await client.graphql({
        query: getSMAccount,
        variables: { awsemail: email },
      });

      const balances = MFNDtls.data.getSMAccount.balance;
      const owner = MFNDtls.data.getSMAccount.owner;

      const fetchLoanees = async () => {
        try {
          const Lonees: any = await client.graphql({
            query: listSMAccounts,
            variables: {
              filter: {
                and: {
                  awsemail: { eq: email },
                  acStatus: { eq: "AccountActive" },
                },
              },
            },
          });
          setLoanees(Lonees.data.listSMAccounts.items);
        } catch (e) {
          console.log(e);
        } finally {
          setLoading(false);
        }
      };

      if (user.userId !== owner) {
        Alert.alert("Please first create a main account");
        return;
      } else {
        await fetchLoanees();
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Please first create a main account on the home page");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsrDtls();
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        style={{ width: "100%" }}
        data={Loanees}
        renderItem={({ item }) => <LnerStts SMAc={item} />}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={fetchUsrDtls}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={{ alignItems: 'center' }}
        ListHeaderComponent={() => (
          <>
            <Text style={styles.label}>My Account</Text>
            <Text style={styles.label2}> (Please swipe down to load)</Text>
          </>
        )}
      />
    </View>
  );
};

export default FetchSMNonCovLns;
