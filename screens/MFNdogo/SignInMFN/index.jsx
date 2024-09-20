import React, {useEffect, useState} from 'react';

import {createCompany} from '../../../src/graphql/mutations';
import { getAgent, getBankAdmin, getCompany, getSAgent} from '../../../src/graphql/queries';
import {graphqlOperation, API} from 'aws-amplify';

import {useNavigation} from '@react-navigation/native';


import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
 
} from 'react-native';
import styles from './styles';



const MFNSignIn = (props) => {  
  const navigation = useNavigation();

  const [town, settown] = useState("");
  



  const moveToMFNHm = () => {
    navigation.navigate("SearchMFNsssss", {town});
  
            settown("");
            
      
    
             }

             
  
                 useEffect(() =>{
                  const towns=town
                    if(!towns && towns!=="")
                    {
                      settown("");
                      return;
                    }
                    settown(towns);
                    }, [town]
                     );



         return (
            <View>
              <View
                 style={styles.image}>
                <ScrollView>
                  <View style={styles.loanTitleView}>
                    <Text style={styles.title}>Fill Details Below</Text>
                  </View>
        
                  <View style={styles.sendLoanView}>
                    <TextInput
                    
                      value={town}
                      onChangeText={settown}
                      style={styles.sendLoanInput}
                      editable={true}></TextInput>
                    <Text style={styles.sendLoanText}>Town</Text>
                    <Text style={styles.sendLoanText2}>(Enter part or full name)</Text>
                  </View>
        
                  
                  <TouchableOpacity
                    onPress={moveToMFNHm}
                    style={styles.sendLoanButton}>
                    <Text style={styles.sendLoanButtonText2}>
                      Find convenient MFNdogo
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          );
        };
        
        export default MFNSignIn;