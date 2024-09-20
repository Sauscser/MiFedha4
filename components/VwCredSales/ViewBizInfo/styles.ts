import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        margin: 25,
        
    },

    image: {
        width:'100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        alignItems: 'center',
        borderRadius: 20,   
        

    },
    ownerName: {
        fontSize: 13,
        fontWeight: '900',
        color: '#ad1c65'
    },

    ownerContact: {
        fontSize: 13,
        fontWeight: '900',
        color: '#981658'
    },

    amountoffered: {
        fontSize: 13,
        fontWeight: '900',
        color: '#88124e',
        
    },

    repaymentPeriod: {
        fontSize: 13,
        fontWeight: '900',
        color: '#7b0e45'
    },

    interest: {
        fontSize: 13,
        fontWeight: '900',
        color: '#69093a'
    },

    subTitle: {
        fontSize: 25,
        fontWeight: '900',
        color: '#88124e',
        marginTop:"5%",
        textDecorationLine: "underline"
    },   

    loanerotherdescriptions: {
        fontSize: 13,
        fontWeight: '900',
        color: '#420423'
    }, 

    loanAdvert: {
        fontSize:35,
        justifyContent: 'center',
        color: 'blue',
        
        top: 2
    }

});
export default styles