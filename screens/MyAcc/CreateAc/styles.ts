import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: screenHeight, // Use screenHeight for full-screen background
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  loanTitleView: {
    backgroundColor: 'white',
    marginHorizontal: screenWidth * 0.15, // Convert percentage to pixels
    height: screenHeight * 0.07, // Convert percentage to pixels
    borderRadius: 5,
    marginTop: screenHeight * 0.02, // Convert percentage to pixels
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendLoanView: {
    backgroundColor: '#72ebd8',
    marginHorizontal: screenWidth * 0.05, // Convert percentage to pixels
    width: screenWidth * 0.9, // Adjust width to fit screen with margins
    height: screenHeight * 0.15, // Convert percentage to pixels
    borderRadius: 20,
    marginTop: screenHeight * 0.02, // Convert percentage to pixels
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendLoanText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', // Center text horizontally
    marginHorizontal: screenWidth * 0.1, // Convert percentage to pixels
  },
  sendLoanButton: {
    backgroundColor: 'white',
    marginHorizontal: screenWidth * 0.15, // Convert percentage to pixels
    height: screenHeight * 0.07, // Convert percentage to pixels
    borderRadius: 5,
    marginTop: screenHeight * 0.05, // Convert percentage to pixels
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: screenHeight * 0.05, // Add reasonable space from the bottom
  },
  sendLoanButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  sendLoanInput: {
    backgroundColor: 'white',
    width: '95%',
    height: screenHeight * 0.06, // Convert percentage to pixels
    borderRadius: 5,
    marginTop: screenHeight * 0.02, // Convert percentage to pixels
    paddingHorizontal: 10, // Add padding for better text input
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
});

export default styles;
