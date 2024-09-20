import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/core';

import {
    createCvrdGroupLoans,
  createFloatAdd,
  createSMAccount,
  createSMLoansCovered,
  updateAdvocate,
  updateAgent,
  updateChamaMembers,
  updateCompany,
  updateGroup,
  
  updateReqLoanChama,
  
  updateSAgent,
  updateSMAccount,
  
} from '../../../../../src/graphql/mutations';

import {API, Auth, graphqlOperation, DataStore} from 'aws-amplify';
import {
  getAgent,
  getCompany,
  getSMAccount,
  getSAgent,
  getAdvocate,
  getGroup,
  
  getChamaMembers,
  getReqLoanChama,
} from '../../../../../src/graphql/queries';

import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import { parse } from 'expo-linking';

const ChmCovLns = props => {
  const [ChmPhn, setChmPhn] = useState('');
  const [RecNatId, setRecNatId] = useState('');
  const [RecPhn, setRecPhn] = useState('');
  const [SnderPW, setSnderPW] = useState("");
  const [RepaymtPeriod, setRepaymtPeriod] = useState("");
  const [amount, setAmount] = useState("");
  const [AmtExp, setAmtExp] = useState("");
 
  const[isLoading, setIsLoading] = useState(false);
  const [RecAccCode, setRecAccCode] = useState("");
  const [SendrPhn, setSendrPhn] = useState(null);
  const [MmbrId, setMmbrId] = useState('');
  
  
  const route = useRoute();

  
  


    
    const fetchChmLoanReq = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);

      const userInfo = await Auth.currentAuthenticatedUser();
      try {
          const ChmMbrtDtlz:any = await API.graphql(
              graphqlOperation(getReqLoanChama, {id: route.params.id}),
              );
              const loaneeEmail =ChmMbrtDtlz.data.getReqLoanChama.loaneeEmail;
              const groupContacts =ChmMbrtDtlz.data.getReqLoanChama.chamaPhone;
              const memberContacts =ChmMbrtDtlz.data.getReqLoanChama.loaneePhone;
              const amount =ChmMbrtDtlz.data.getReqLoanChama.amount;
              const AmtExp =ChmMbrtDtlz.data.getReqLoanChama.repaymentAmt;
              const RepaymtPeriod =ChmMbrtDtlz.data.getReqLoanChama.repaymentPeriod;
              const loaneeMemberId =ChmMbrtDtlz.data.getReqLoanChama.loaneeMemberId;
              const advLicNo =ChmMbrtDtlz.data.getReqLoanChama.advLicNo;
              const description =ChmMbrtDtlz.data.getReqLoanChama.description;
              const defaultPenalty =ChmMbrtDtlz.data.getReqLoanChama.defaultPenalty;
              const statusNumber =ChmMbrtDtlz.data.getReqLoanChama.statusNumber;
              const AdvEmail =ChmMbrtDtlz.data.getReqLoanChama.AdvEmail;
              const dfltDeadLn =ChmMbrtDtlz.data.getReqLoanChama.dfltDeadLn;
              const installmentAmount =ChmMbrtDtlz.data.getReqLoanChama.installmentAmount;
              const paymentFrequency =ChmMbrtDtlz.data.getReqLoanChama.paymentFrequency;
              
              const status =ChmMbrtDtlz.data.getReqLoanChama.status;

              const ChmNMmbrPhns = loaneeMemberId+groupContacts

              const today = new Date();
              let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
              let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
              let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
              let years = (today.getFullYear() < 10 ? '0' : '') + today.getFullYear();
              let months = (today.getMonth() < 10 ? '0' : '') + today.getMonth();
              let months2 = parseFloat(months)
              let days = (today.getDate() < 10 ? '0' : '') + today.getDate();
              
              const now:any = years+ "-"+ "0"+months2 +"-"+ days+"T"+hours + ':' + minutes + ':' + seconds;

              const curYrs = parseFloat(years)*365;
              const curMnths = (months2)*30.4375;
              const daysUpToDate = curYrs + curMnths + parseFloat(days)
                         
              const fetchAdminDtls = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try {
                    const RecAccountDtl:any = await API.graphql(
                        graphqlOperation(getSMAccount, {awsemail: userInfo.attributes.email}),
                        );
                        const pwscz =RecAccountDtl.data.getSMAccount.pw;
                        
                        
                        const fetchChmMbrDtls = async () => {
      if(isLoading){
        return;
      }
      setIsLoading(true);
      try {
          const ChmMbrtDtl:any = await API.graphql(
              graphqlOperation(getChamaMembers, {ChamaNMember: ChmNMmbrPhns}),
              );

              
              const GrossLnsGvns =ChmMbrtDtl.data.getChamaMembers.GrossLnsGvn;
              const LonAmtGvens =ChmMbrtDtl.data.getChamaMembers.LonAmtGven;
              const LnBals =ChmMbrtDtl.data.getChamaMembers.LnBal;
              const AmtRepaids =ChmMbrtDtl.data.getChamaMembers.AmtRepaid;
              const NonLoanAcBal =ChmMbrtDtl.data.getChamaMembers.NonLoanAcBal;
                         


  const fetchSenderUsrDtls = async () => {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    try {
      const accountDtl:any = await API.graphql(
        graphqlOperation(getGroup, {grpContact: groupContacts}),
      );

      const grpBals =accountDtl.data.getGroup.grpBal;
      const signitoryPWs =accountDtl.data.getGroup.signitoryPW;
      const statuss =accountDtl.data.getGroup.status;
      
      const TtlActvLonsTmsLnrChmCovs =accountDtl.data.getGroup.TtlActvLonsTmsLnrChmCov;
      const TtlActvLonsAmtLnrChmCovs =accountDtl.data.getGroup.TtlActvLonsAmtLnrChmCov;
      const grpNames =accountDtl.data.getGroup.grpName;
  
      const SenderSub =accountDtl.data.getGroup.owner;
      
      const fetchCompDtls = async () => {
        if(isLoading){
          return;
        }
        setIsLoading(true);
        try {
          const CompDtls:any = await API.graphql(
            graphqlOperation(getCompany, {
              AdminId: "BaruchHabaB'ShemAdonai2",
            }),
          );
          
          const userLoanTransferFees = CompDtls.data.getCompany.userLoanTransferFee;
          const AdvComs = CompDtls.data.getCompany.AdvCom;
          const CoverageFees = CompDtls.data.getCompany.CoverageFee;
          const AdvCompanyComs = CompDtls.data.getCompany.AdvCompanyCom;
          const AdvCovFee =(parseFloat(CoverageFees)*parseFloat(AdvComs))
          const CompCovFee = parseFloat(CoverageFees)*parseFloat(AdvCompanyComs);
          const AdvCovAmt =AdvCovFee*parseFloat(amount)
          const CompCovAmt = CompCovFee*parseFloat(amount)
          const ttlCovFeeAmount = parseFloat(CoverageFees)*parseFloat(amount)                
          
          const TotalTransacted = parseFloat(amount) + ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount);             
          const ttlCompCovEarningss = CompDtls.data.getCompany.ttlCompCovEarnings;
          const companyEarningBals = CompDtls.data.getCompany.companyEarningBal;
          const companyEarnings = CompDtls.data.getCompany.companyEarning;
          const AdvEarningBals = CompDtls.data.getCompany.AdvEarningBal;
          const AdvEarnings = CompDtls.data.getCompany.AdvEarning;          
          const ttlChmLnsInAmtCovs = CompDtls.data.getCompany.ttlChmLnsInAmtCov;          
          const ttlChmLnsInTymsCovs = CompDtls.data.getCompany.ttlChmLnsInTymsCov;            
          const maxInterestGrps = CompDtls.data.getCompany.maxInterestGrp;  
          const IntAmt = parseFloat(AmtExp) - (parseFloat(amount) + 
                parseFloat(userLoanTransferFees)*parseFloat(amount) + ttlCovFeeAmount)
          const Interest = (((parseFloat(AmtExp) - parseFloat(amount))*100)/(parseFloat(amount) *parseFloat(RepaymtPeriod))).toFixed(2);     
          const maxBLss = CompDtls.data.getCompany.maxBLs;
         
          const MaxSMInterest = (parseFloat(amount) +  
          (parseFloat(userLoanTransferFees)*parseFloat(amount) 
          + ttlCovFeeAmount) )*parseFloat(maxInterestGrps)*parseFloat(RepaymtPeriod);
          
          
          const ActualMaxSMInterest = parseFloat(AmtExp) - (parseFloat(amount) +  parseFloat(userLoanTransferFees)*parseFloat(amount) + 
          ttlCovFeeAmount)

          const TransCost = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) 
          
          
          
          

          const TtlTransCost2 =  parseFloat(userLoanTransferFees)*parseFloat(amount) +  parseFloat(amount)
          const amtrpayable2 = parseFloat(amount)*Math.pow((1 + parseFloat(AmtExp)/100), RepaymtPeriod/parseFloat(paymentFrequency))
          const amtrpayable = parseFloat(amount)*Math.pow((1 + parseFloat(AmtExp)/100), RepaymtPeriod/parseFloat(paymentFrequency))
          const TotalAmtExp = ttlCovFeeAmount + parseFloat(userLoanTransferFees)*parseFloat(amount) + amtrpayable;
          const TotalAmtExp2 =  (parseFloat(userLoanTransferFees)*parseFloat(amount)) + amtrpayable2;
          const TtlTransCost = (ttlCovFeeAmount + (parseFloat(userLoanTransferFees)*parseFloat(amount))) +  parseFloat(amount)

          const AllTtlTrnsCst = TtlTransCost + MaxSMInterest;

          console.log(TotalAmtExp)
          console.log(TtlTransCost)
          console.log (amtrpayable)

          

   

              const fetchRecUsrDtls = async () => {
                if(isLoading){
                  return;
                }
                setIsLoading(true);
                try {
                    const RecAccountDtl:any = await API.graphql(
                        graphqlOperation(getSMAccount, {awsemail: loaneeEmail}),
                        );
                        const RecUsrBal =RecAccountDtl.data.getSMAccount.balance;
                        const usrNoBL =RecAccountDtl.data.getSMAccount.MaxTymsBL;
                        const usrAcActvSttss =RecAccountDtl.data.getSMAccount.acStatus; 
                        const recAcptncCode =RecAccountDtl.data.getSMAccount.loanAcceptanceCode; 
                        const TtlActvLonsTmsLnrCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLnrCov; 
                        const TtlActvLonsTmsLneeCovss =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeCov;
                        const TtlActvLonsTmsLneeChmCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsTmsLneeChmCov;
                        const TtlActvLonsAmtLneeChmCovs =RecAccountDtl.data.getSMAccount.TtlActvLonsAmtLneeChmCov;
                        const namess =RecAccountDtl.data.getSMAccount.name;
                        const ttlDpstSMs =RecAccountDtl.data.getSMAccount.ttlDpstSM;
                        const TtlWthdrwnSMs =RecAccountDtl.data.getSMAccount.TtlWthdrwnSM;
                        const MaxAcBals =RecAccountDtl.data.getSMAccount.MaxAcBal;
                        const DefaultPenaltyRate = parseFloat(defaultPenalty)/parseFloat(AmtRepaids) *100;
                        const RecomDfltPnltyRate = (parseFloat(AmtRepaids)*20) / 100;
                          console.log (memberContacts)

                        const sendSMLn = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createCvrdGroupLoans, {
                                input: {
                                    loanID:route.params.id,
                                    grpContact: groupContacts,
                                    loaneePhn: loaneeEmail,
                                    loanerLoanee:groupContacts+memberContacts,
                                    loanerLoaneeAdv:  groupContacts+memberContacts+"None" ,  
                                    repaymentPeriod: RepaymtPeriod,
                                    amountGiven: parseFloat(amount).toFixed(0),
                                    amountExpectedBack: TotalAmtExp2.toFixed(0),
                                    amountExpectedBackWthClrnc: TotalAmtExp2.toFixed(0),
                                    amountRepaid: 0,
                                    DefaultPenaltyChm:defaultPenalty,
                                    DefaultPenaltyChm2: 0,
                                    timeExpBack: parseFloat(RepaymtPeriod) + daysUpToDate,
                                    timeExpBack2: 61 + daysUpToDate,
                                    crtnDate: daysUpToDate,
                                    description: description,
                                    lonBala: TotalAmtExp2.toFixed(0),
                                    advRegNu: "None",
                                    loaneeName: namess,
                                    dfltDeadLn: dfltDeadLn,
                                    LoanerName: grpNames,
                                    memberId: ChmNMmbrPhns,
                                    status: "LoanActive",
                                    lnType: "GrpLn",
                                    interest: AmtExp,
                                    dfltUpdate: daysUpToDate,
                                    owner: userInfo.attributes.sub,
                                    advEmail:"None",
                                    blOfficer:"None",
                                    installmentAmount:installmentAmount,
                                    paymentFrequency:paymentFrequency
                                },
                              }),
                            );


                          } catch (error) {
                            if (error){
                              console.log(error)
                              Alert.alert("Loaning unsuccessful; enter details correctly")
                              return}
                          }
                          setIsLoading(false);
                          await updatMmbr();
                        };

                        const updatMmbr = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(updateChamaMembers, {
                                input: {
                                  ChamaNMember: ChmNMmbrPhns,
                                  LonAmtGven: (parseFloat(LonAmtGvens) + parseFloat(amount)).toFixed(0),
                                  GrossLnsGvn: (parseFloat(GrossLnsGvns) + TotalAmtExp2).toFixed(0),
                                  LnBal: (parseFloat(LnBals) + TotalAmtExp2).toFixed(0),                                  
                                  loanStatus:"LoanActive",                                    
                                  blStatus: "AccountNotBL",
                               
                                
                                },
                              }),
                            );


                          } catch (error) {
                            if(error){
                              Alert.alert("Error! Access denied!")
                              
                          
                          return;}
                          }
                          setIsLoading(false);
                          await updtSendrAc();
                        };
                        
                        const updtSendrAc = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateGroup, {
                                  input:{
                                    grpContact:groupContacts,
                                    TtlActvLonsTmsLnrChmCov: parseFloat(TtlActvLonsTmsLnrChmCovs)+1,
                                    TtlActvLonsAmtLnrChmCov: (parseFloat(TtlActvLonsAmtLnrChmCovs) + TotalAmtExp2).toFixed(0),
                                                                              
                                    grpBal:(parseFloat(grpBals)-TtlTransCost2).toFixed(0) 
                                   
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
                            if (error){Alert.alert("Error! Access denied!")
                            return;}
                          }
                          setIsLoading(false);
                          await updtRecAc();
                        }
                        const updtRecAc = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateSMAccount, {
                                  input:{
                                    awsemail:loaneeEmail,
                                    TtlActvLonsTmsLneeChmCov: parseFloat(TtlActvLonsTmsLneeChmCovs) +1 ,
                                    TtlActvLonsAmtLneeChmCov: (parseFloat(TtlActvLonsAmtLneeChmCovs)+ TotalAmtExp).toFixed(0),
                                    balance:(parseFloat(RecUsrBal) + parseFloat(amount)).toFixed(0) ,
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                    loanAcceptanceCode:"None"                                
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error! Access denied!")
                            return;}
                          }
                          setIsLoading(false);
                          await updtComp();
                        }

                        const updtComp = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input:{
                                    AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                        
                                    ttlCompCovEarnings: parseFloat(ttlCompCovEarningss),
                                    AdvEarningBal: parseFloat(AdvEarningBals),                                                                                                                                                     
                                    AdvEarning: parseFloat(AdvEarnings),
                                    companyEarningBal: parseFloat(companyEarningBals) + parseFloat(userLoanTransferFees)*parseFloat(amount),
                                    companyEarning:  parseFloat(companyEarnings) + parseFloat(userLoanTransferFees)*parseFloat(amount),                                                    
                                    
                                    ttlChmLnsInAmtCov: TotalAmtExp2 + parseFloat(ttlChmLnsInAmtCovs),
                                   
                                    ttlChmLnsInTymsCov: 1 + parseFloat(ttlChmLnsInTymsCovs),
                                          
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Error! Access denied!")
                        return;}
                          }
                          setIsLoading(false);
                          await updtLnReq();
                        }
                        

                        const updtLnReq = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateReqLoanChama, {
                                  input:{
                                    id:route.params.id,                                                      
                                    status:"Approved"
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Error! Access denied!")
                        return;}
                          }
                          Alert.alert("Success. TransactionFee: "+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) 
                         
                          );
                          setIsLoading(false);
                          
                        }
                                              
                        
                        const fetchAdv = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
              
                            const AdvDtls:any = await API.graphql(
                              graphqlOperation(getAdvocate,
                                {advregnu: advLicNo}),
                                
                            );
                            const advTtlAern = AdvDtls.data.getAdvocate.TtlEarnings;
                            const advBl = AdvDtls.data.getAdvocate.advBal;
                            const advStts = AdvDtls.data.getAdvocate.status;
                            const namesssssss = AdvDtls.data.getAdvocate.name;
                            console.log(advLicNo)
                        
                        const sendSMLn2 = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(createCvrdGroupLoans, {
                                input: {
                                  loanID:route.params.id,
                                  grpContact: groupContacts,
                                    loaneePhn: loaneeEmail,
                                    loanerLoanee:groupContacts+memberContacts,
                                    loanerLoaneeAdv:  groupContacts+memberContacts+advLicNo ,  
                                    repaymentPeriod: RepaymtPeriod,
                                    amountGiven: parseFloat(amount).toFixed(0),
                                    amountExpectedBack: TotalAmtExp2.toFixed(0),
                                    amountExpectedBackWthClrnc: TotalAmtExp2.toFixed(0),
                                    amountRepaid: 0,
                                    DefaultPenaltyChm:defaultPenalty,
                                    DefaultPenaltyChm2:0,
                                    timeExpBack: parseFloat(RepaymtPeriod) + daysUpToDate,
                                    timeExpBack2: 61 + daysUpToDate,
                                    description: description,
                                    lonBala:TotalAmtExp2.toFixed(0),
                                    advRegNu: advLicNo,
                                    loaneeName:namess,
                                    crtnDate:daysUpToDate,
                                    dfltDeadLn:dfltDeadLn,
                                    LoanerName:grpNames,
                                    memberId:ChmNMmbrPhns,
                                    status: "LoanActive",
                                    interest:AmtExp,
                                    dfltUpdate: daysUpToDate,
                                    lnType:"GrpLn",
                                    owner: userInfo.attributes.sub,
                                    blOfficer:"None",
                                    advEmail:AdvEmail,
                                    installmentAmount:installmentAmount,
                                    paymentFrequency:paymentFrequency

                                },
                              }),
                            );


                          } catch (error) {
                            if (error){
                              
                              return}
                          }
                          setIsLoading(false);
                          await updatMmbr2();
                        };

                        sendSMLn2();

                        const updatMmbr2 = async () => {
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try {
                            await API.graphql(
                              graphqlOperation(updateChamaMembers, {
                                input: {
                                  ChamaNMember: ChmNMmbrPhns,
                                  LonAmtGven: (parseFloat(LonAmtGvens) + parseFloat(amount)).toFixed(0),
                                  GrossLnsGvn: (parseFloat(GrossLnsGvns) + TotalAmtExp).toFixed(0),
                                  LnBal: (parseFloat(LnBals) + TotalAmtExp).toFixed(0),                                  
                                  loanStatus:"LoanActive",                                    
                                  blStatus: "AccountNotBL",
                                
                                },
                              }),
                            );


                          } catch (error) {
                            if(error){
                              Alert.alert("Error! Access denied!")
                              
                          
                          return;}
                          }
                          setIsLoading(false);
                          await updtSendrAc2();
                        };
                        
                        const updtSendrAc2 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateGroup, {
                                  input:{
                                    grpContact:groupContacts,
                                    TtlActvLonsTmsLnrChmCov: parseFloat(TtlActvLonsTmsLnrChmCovs)+1,
                                    TtlActvLonsAmtLnrChmCov: (parseFloat(TtlActvLonsAmtLnrChmCovs) + TotalAmtExp).toFixed(0),
                                                                              
                                    grpBal:(parseFloat(grpBals)-TtlTransCost).toFixed(0) 
                                   
                                    
                                  }
                                })
                              )


                          }
                          catch(error){
                            if (error){Alert.alert("Error! Access denied!")
                            return;}
                          }
                          setIsLoading(false);
                          await updtRecAc2();
                        }
                        const updtRecAc2 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateSMAccount, {
                                  input:{
                                    awsemail:loaneeEmail,
                                    TtlActvLonsTmsLneeChmCov: parseFloat(TtlActvLonsTmsLneeChmCovs) +1 ,
                                    TtlActvLonsAmtLneeChmCov: (parseFloat(TtlActvLonsAmtLneeChmCovs)+ TotalAmtExp).toFixed(0),
                                    balance:(parseFloat(RecUsrBal) + parseFloat(amount)).toFixed(0) ,
                                    loanStatus:"LoanActive",                                    
                                    blStatus: "AccountNotBL",
                                    loanAcceptanceCode:"None"                                
                                    
                                  }
                                })
                              )                              
                          }
                          catch(error){
                            console.log(error)
                            if (error){Alert.alert("Error! Access denied!")
                            return;}
                          }
                          setIsLoading(false);
                          await updtComp2();
                        }

                        const updtComp2 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateCompany, {
                                  input:{
                                    AdminId: "BaruchHabaB'ShemAdonai2",                                                      
                                        
                                    ttlCompCovEarnings:CompCovAmt + parseFloat(ttlCompCovEarningss),
                                    AdvEarningBal:AdvCovAmt + parseFloat(AdvEarningBals),                                                                                                                                                     
                                    AdvEarning:AdvCovAmt + parseFloat(AdvEarnings),
                                    companyEarningBal:CompCovAmt + parseFloat(companyEarningBals) + parseFloat(userLoanTransferFees)*parseFloat(amount),
                                    companyEarning: CompCovAmt + parseFloat(companyEarnings) + parseFloat(userLoanTransferFees)*parseFloat(amount),                                                    
                                    
                                    ttlChmLnsInAmtCov: TotalAmtExp + parseFloat(ttlChmLnsInAmtCovs),
                                   
                                    ttlChmLnsInTymsCov: 1 + parseFloat(ttlChmLnsInTymsCovs),
                                          
                                    
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Error! Access denied!")
                        return;}
                          }
                          setIsLoading(false);
                          await updtAdv2();
                        }
                        const updtAdv2 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(true);
                          try{
                              await API.graphql(
                                graphqlOperation(updateAdvocate, {
                                  input:{
                                    advregnu: advLicNo,
                                    advBal: (AdvCovAmt + parseFloat(advBl)).toFixed(0) ,
                                    TtlEarnings:(AdvCovAmt + parseFloat(advTtlAern)).toFixed(0),                                 
                                    
                                  }
                                })
                              )
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Error! Access denied!")
      return;}
                          }
                          

                          await updtLnReq2();
                          setIsLoading(false);
                        }

                        const updtLnReq2 = async () =>{
                          if(isLoading){
                            return;
                          }
                          setIsLoading(false);
                          
                          try{
                              await API.graphql(
                                graphqlOperation(updateReqLoanChama, {
                                  input:{
                                    id:route.params.id,                                                      
                                    status:"Approved"
                                  }
                                })
                              )
                              
                              
                          }
                          catch(error){
                            console.log(error);
                            if (error){Alert.alert("Error! Access denied!")
                        return;}
                          }
                          Alert.alert("Success. TransactionFee: "+ (parseFloat(userLoanTransferFees)*parseFloat(amount)).toFixed(2) + ". AdvocateFee "+ttlCovFeeAmount.toFixed(2)
                         
                          );
                          setIsLoading(false);
                          
                        }
                                              
                        
                    }       
                    catch(e) {    
                      console.log(e); 
                      if (e){console.log(e)
      return;}                 
                    }
                    setIsLoading(false);
                    }                    
                              
                    if (parseFloat(usrNoBL) > parseFloat(maxBLss)){Alert.alert('Unsuccessful....Apologies. Liase with the Loaned');
                      return;
                    }
                        
                    else if(parseFloat(ttlDpstSMs) === 0 && parseFloat(TtlWthdrwnSMs)===0){Alert.alert('Loanee National ID be verified through deposit at MFNdogo');}

                    

                    else if((parseFloat(RecUsrBal) + parseFloat(amount)) > parseFloat(MaxAcBals))
                    {Alert.alert('Loanee call customer care to have wallet capacity adjusted');
                      return;
                    }

                    

                    
                    else if(userInfo.attributes.sub !==SenderSub){Alert.alert('You are not the Creator of this Chama');
                    return;}
                        else if(statuss !== "AccountActive"){Alert.alert('Sender account is inactive');
                        return;}

                        else if(statusNumber === 0 && advLicNo != "None"){Alert.alert('Advocate has not yet witnessed');                  
              }
                    
                        else if(status === "Approved"){Alert.alert('Loan already granted');
                        return;}
                        else if(groupContacts === memberContacts){Alert.alert('You cannot Loan Yourself');
                        return;}
                        else if(usrAcActvSttss !== "AccountActive"){Alert.alert('Receiver account is inactive');
                        return;}
                        
                        else if (
                          parseFloat(grpBals) < TtlTransCost 
                        ) {Alert.alert("Cancelled."+ "Bal: "+ grpBals +". Deductable: " + TtlTransCost.toFixed(2) 
                        + ". "+ ((TtlTransCost) - parseFloat(grpBals)).toFixed(2) + ' more needed');
                        return;}
                        
                        
                        else if(SnderPW !==pwscz){Alert.alert('Wrong password');
                        return;}

                        else if (advLicNo === "None") { sendSMLn()}
                                                                 
            
                                                 else {
                                                  await fetchAdv();
                        }  
                      

            }
            catch (e){
              console.log(e);
              if (e){Alert.alert("Error! Access denied!")
      return;}
            }
            setIsLoading(false);
          }
          
          await fetchRecUsrDtls();

          
        
        } catch (e) {
          console.log(e);
          if (e){Alert.alert("Error! Access denied!")
      return;}
        } 
        setIsLoading(false);       
      };
      await fetchCompDtls();
    
      
    } catch (e) {
      console.log(e)
      if (e){Alert.alert("Error! Access denied!")
      return;}
  };
      setIsLoading(false);
      
      
}
await fetchSenderUsrDtls();

} catch (e) {
  console.log(e)
  if (e){Alert.alert("Error! Access denied!")
  return;}
};
  setIsLoading(false);
  
  
}
await fetchChmMbrDtls();

} catch (e) {
  console.log(e)
  if (e){Alert.alert("Error! Access denied!")
  return;}
};
  setIsLoading(false);
  
  
}
await fetchAdminDtls();

} catch (e) {
  console.log(e);
  if (e){Alert.alert("Error! Access denied!")
return;}
}
setAmount("");
      

setAmtExp("");

setSnderPW("");
setRepaymtPeriod("");
setRecAccCode("");

setChmPhn("")
setMmbrId("")
setIsLoading(false);        
};


     useEffect(() =>{
      const SnderNatIds=MmbrId
        if(!SnderNatIds && SnderNatIds!=="")
        {
          setMmbrId("");
          return;
        }
        setMmbrId(SnderNatIds);
        }, [MmbrId]
         );

useEffect(() =>{
  const RecPhns=RecPhn
    if(!RecPhns && RecPhns!=="")
    {
      setRecPhn("");
      return;
    }
    setRecPhn(RecPhns);
    }, [RecPhn]
     );
     
     useEffect(() =>{
  const ChmPhns=ChmPhn
    if(!ChmPhns && ChmPhns!=="")
    {
      setChmPhn("");
      return;
    }
    setChmPhn(ChmPhns);
    }, [ChmPhn]
     );

     useEffect(() =>{
      const amt=amount
        if(!amt && amt!=="")
        {
          setAmount("");
          return;
        }
        setAmount(amt);
        }, [amount]
         );

         useEffect(() =>{
          const RecNatIds=RecNatId
            if(!RecNatIds && RecNatIds!=="")
            {
              setRecNatId("");
              return;
            }
            setRecNatId(RecNatIds);
            }, [RecNatId]
             );

             

                 useEffect(() =>{
                  const AmtExpss=AmtExp
                    if(!AmtExpss && AmtExpss!=="")
                    {
                      setAmtExp("");
                      return;
                    }
                    setAmtExp(AmtExpss);
                    }, [AmtExp]
                     );

                     

                         useEffect(() =>{
                          const SnderPWss=SnderPW
                            if(!SnderPWss && SnderPWss!=="")
                            {
                              setSnderPW("");
                              return;
                            }
                            setSnderPW(SnderPWss);
                            }, [SnderPW]
                             );

                             useEffect(() =>{
                              const RepaymtPeriods=RepaymtPeriod
                                if(!RepaymtPeriods && RepaymtPeriods!=="")
                                {
                                  setRepaymtPeriod("");
                                  return;
                                }
                                setRepaymtPeriod(RepaymtPeriods);
                                }, [RepaymtPeriod]
                                 );

                                 useEffect(() =>{
                                  const RecAccCodes=RecAccCode
                                    if(!RecAccCodes && RecAccCodes!=="")
                                    {
                                      setRecAccCode("");
                                      return;
                                    }
                                    setRecAccCode(RecAccCodes);
                                    }, [RecAccCode]
                                     );

  return (
    
      <View style={styles.image}>
        <ScrollView >
         
         <View style={styles.amountTitleView}>
           <Text style={styles.title}>Enter Password</Text>
         </View>


         <View style={styles.sendAmtView}>
           <TextInput
           placeholder='Admin Main Account PassWord'
             value={SnderPW}
             multiline={false}             
             secureTextEntry = {true}
             onChangeText={setSnderPW}
             style={styles.sendAmtInput}
             editable={true}></TextInput>           
         </View>



         <TouchableOpacity
           onPress={fetchChmLoanReq}
           style={styles.sendAmtButton}>
           <Text style={styles.sendAmtButtonText}>Click to loan</Text>
           {isLoading && <ActivityIndicator size = "large" color = "blue"/>}
         </TouchableOpacity>

         
       </ScrollView>
      </View>
             
    
  );
};

export default ChmCovLns;