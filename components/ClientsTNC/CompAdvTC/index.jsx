import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {View, Text,   ScrollView, Pressable} from 'react-native';

import {  graphqlOperation, API,Auth, signOu} from 'aws-amplify';
import {StyleSheet, Dimensions} from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface SMAccount {
    SMAc: {
      AdvocateTC:string
    }}

const SMCvLnStts = (props:SMAccount) => {
   const {
      SMAc: {
        AdvocateTC
   }} = props ;

   const[isLoading, setIsLoading] = useState(false);
   const navigation = useNavigation();
   

   

const SgnOut = async () => {
  const UsrSgnOut = await Auth.signOut();
}

const CreateSMAcs = () => {
  navigation.navigate('MFAdvocateReg');
};
 


    return (
        
                  
                  
            <View style = {{marginTop:"10%"}}>

                  
                       
                      <View >
                      <Text style = {styles.ownerName}>                       
                       {/*loaner details */}   
                      {AdvocateTC}       
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

export default SMCvLnStts