import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Button } from 'react-native';

import useCachedResources from '../../hooks/useCachedResources';
import useColorScheme from '../../hooks/useColorScheme';
import RootNav from '../../navigation/RootNav';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from '../../src/aws-exports';
Amplify.configure(awsconfig);

function Greeting() {
  const { user } = useAuthenticator();
  return (
    <View style={{ padding: 10, backgroundColor: '#f8f8f8' }}>
      <Text style={{ fontSize: 18 }}>Welcome, {user?.username}!</Text>
    </View>
  );
}

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Greeting />
          <RootNav colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);
