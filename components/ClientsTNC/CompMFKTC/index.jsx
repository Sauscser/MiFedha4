import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';

import {  graphqlOperation, API,Auth, signOut} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Alert } from 'react-native';
import { getCompany } from '../../../src/graphql/queries';
import { useEffect } from 'react';


const MFKTC = props =>{
  const [Alrt, setAlrt] = useState ("")
   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   

   

const SgnOut = async () => {
  const UsrSgnOut = await Auth.signOut();
}

const route = useRoute();
const idz = route.params.id

const CreateSMAcs = () => {
  navigation.navigate('RegMFKbw', {idz});
};

const gtCompDtls = async () =>{
    
  try{
    const compDtls :any= await API.graphql(
      graphqlOperation(getCompany,{AdminId:"BaruchHabaB'ShemAdonai2"})
      );

      setAlrt(compDtls.data.getCompany.MFKubwaTC)
      
    }
    
    catch(e){
      console.log(e)
      if(e){
        Alert.alert("Check your internet")
        return;
    }
    }};

    useEffect(() => {
      gtCompDtls();
    }, []);
 


    return (
        
                  
                  
            <View style = {{marginTop:"10%"}}>

                  
<View >
                      
                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      {Alrt}       
                    </Text>
                    </View>
                     
                    <View style = {styles.viewForPressables2}>
                    <View>
                    <Pressable
                      onPress={CreateSMAcs}
                      style = {styles.loanFriendButton}
                      >            
                        <Text>Accept</Text>            
                    </Pressable>
                    </View>   
                    <View>
                    <Pressable
                      onPress={SgnOut}
                      style = {styles.loanFriendButton}>            
                        <Text>Decline</Text>            
                    </Pressable>  
                    </View>
                     
                    </View>
                      

      
            </View>
            
                
        
    );
}; 

export default MFKTC

