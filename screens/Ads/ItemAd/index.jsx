import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Auth, graphqlOperation, API } from 'aws-amplify';
import { createSokoAd } from '../../../src/graphql/mutations';
import { getBizna, getSMAccount, listPersonels } from '../../../src/graphql/queries';
import styles from './styles';

// Define the GraphQLResult type
type GraphQLResult<T> = {
  data: T;
  errors?: any;
};

const CreateBiz = () => {
  const [ChmPhn, setChmPhn] = useState('');
  const [awsEmail, setAWSEmail] = useState('');
  const [pword, setPW] = useState('');
  const [ChmDesc, setChmDesc] = useState('');
  const [itemPrys, setitemPrys] = useState('');
  const [lnPrsntg, setlnPrsntg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const showAlert = (message: string) => {
    Alert.alert("Error", message);
  };

  const fetchUserData = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const compDtls = await API.graphql(graphqlOperation(getSMAccount, { awsemail: userInfo.attributes.email })) as GraphQLResult<{ getSMAccount: { owner: string } }>;

      const owner = compDtls.data.getSMAccount.owner;

      const checkPersonelExistence = async () => {
        try {
          const UsrDtls = await API.graphql(graphqlOperation(listPersonels, {
            filter: {
              phoneKontact: { eq: userInfo.attributes.email },
              BusinessRegNo: { eq: ChmPhn }
            }
          })) as GraphQLResult<{ listPersonels: { items: any[] } }>;

          const checkBizna = async () => {
            try {
              const compDtls = await API.graphql(graphqlOperation(getBizna, { BusKntct: ChmPhn })) as GraphQLResult<{ getBizna: { pw: string } }>;
              const pws = compDtls.data.getBizna.pw;

              const createNewSMAc = async () => {
                try {
                  await API.graphql(graphqlOperation(createSokoAd, {
                    input: {
                      sokokntct: ChmPhn,
                      sokoname: awsEmail,
                      sokoprice: parseFloat(itemPrys),
                      sokolnprcntg: parseFloat(lnPrsntg),
                      sokodesc: ChmDesc,
                      owner: userInfo.attributes.sub,
                    }
                  }));

                  if (pword !== pws) {
                    showAlert("Wrong Business password");
                  } else if (UsrDtls.data.listPersonels.items.length < 1) {
                    showAlert("You do not work here");
                  } else {
                    Alert.alert("Success", "Advert successfully Published");
                  }
                } catch (error) {
                  console.error(error);
                  showAlert("Failed to create advertisement. Please try again.");
                }
              };

              await createNewSMAc();
            } catch (error) {
              console.error(error);
              showAlert("Failed to fetch business data.");
            }
          };

          await checkBizna();
        } catch (error) {
          console.error(error);
          showAlert("Failed to check personnel existence.");
        }
      };

      if (userInfo.attributes.sub !== owner) {
        showAlert("Access denied");
      } else {
        await checkPersonelExistence();
      }
    } catch (error) {
      console.error(error);
      showAlert("Failed to fetch user data.");
    } finally {
      setIsLoading(false);
      resetForm();
    }
  };

  const resetForm = () => {
    setChmPhn('');
    setPW('');
    setAWSEmail('');
    setChmDesc('');
    setitemPrys('');
    setlnPrsntg('');
  };

  return (
    <View>
      <View style={styles.image}>
        <ScrollView>
          <View style={styles.loanTitleView}>
            <Text style={styles.title}>Fill Ad Details Below</Text>
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={ChmPhn}
              onChangeText={setChmPhn}
              style={styles.sendLoanInput}
              placeholder="Business Phone"
            />
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              keyboardType='decimal-pad'
              value={itemPrys}
              onChangeText={setitemPrys}
              style={styles.sendLoanInput}
              placeholder="Item Price"
            />
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              keyboardType='decimal-pad'
              value={lnPrsntg}
              onChangeText={setlnPrsntg}
              style={styles.sendLoanInput}
              placeholder="Discount Percentage"
            />
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={awsEmail}
              onChangeText={setAWSEmail}
              style={styles.sendLoanInput}
              placeholder="Item Name"
            />
          </View>

          <View style={styles.sendAmtViewDesc}>
            <TextInput
              value={ChmDesc}
              onChangeText={setChmDesc}
              style={styles.sendAmtInputDesc}
              multiline={true}
              placeholder="Item Desc"
            />
          </View>

          <View style={styles.sendLoanView}>
            <TextInput
              value={pword}
              onChangeText={setPW}
              secureTextEntry={true}
              style={styles.sendLoanInput}
              placeholder="Business PassWord"
            />
          </View>

          <TouchableOpacity
            onPress={fetchUserData}
            style={styles.sendLoanButton}
          >
            <Text style={styles.sendLoanButtonText}>Click to Advertise</Text>
            {isLoading && <ActivityIndicator size="large" color="blue" />}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default CreateBiz;
