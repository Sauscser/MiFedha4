/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSMAccount = /* GraphQL */ `subscription OnCreateSMAccount(
  $filter: ModelSubscriptionSMAccountFilterInput
  $owner: String
) {
  onCreateSMAccount(filter: $filter, owner: $owner) {
    nationalid
    name
    phonecontact
    awsemail
    balance
    p2pchmBenefits
    pw
    nationality
    MFKubwaCost
    MFKubwaNetCost
    MFNdogoDue
    MFNdogoNet
    beneficiary
    beneficiaryAmt
    loanAcceptanceCode
    ttlDpstSM
    TtlWthdrwnSM
    TtlActvLonsTmsLnrCov
    TtlActvLonsTmsLneeCov
    TtlActvLonsAmtLnrCov
    TtlActvLonsAmtLneeCov
    TtlBLLonsTmsLnrCov
    TtlBLLonsTmsLneeCov
    TtlBLLonsAmtLnrCov
    TtlBLLonsAmtLneeCov
    TtlClrdLonsTmsLnrCov
    TtlClrdLonsTmsLneeCov
    TtlClrdLonsAmtLnrCov
    TtlClrdLonsAmtLneeCov
    TtlActvLonsTmsLneeChmCov
    TtlActvLonsAmtLneeChmCov
    TtlBLLonsTmsLneeChmCov
    TtlBLLonsAmtLneeChmCov
    TtlClrdLonsTmsLneeChmCov
    TtlClrdLonsAmtLneeChmCov
    TtlActvLonsTmsSllrCov
    TtlActvLonsTmsByrCov
    TtlActvLonsAmtSllrCov
    TtlActvLonsAmtByrCov
    TtlBLLonsTmsSllrCov
    TtlBLLonsTmsByrCov
    TtlBLLonsAmtSllrCov
    TtlBLLonsAmtByrCov
    TtlClrdLonsTmsSllrCov
    TtlClrdLonsTmsByrCov
    TtlClrdLonsAmtSllrCov
    TtlClrdLonsAmtByrCov
    TtlActvLonsTmsLnrNonCov
    TtlActvLonsTmsLneeNonCov
    TtlActvLonsAmtLnrNonCov
    TtlActvLonsAmtLneeNonCov
    TtlBLLonsTmsLnrNonCov
    TtlBLLonsTmsLneeNonCov
    TtlBLLonsAmtLnrNonCov
    TtlBLLonsAmtLneeNonCov
    TtlClrdLonsTmsLnrNonCov
    TtlClrdLonsTmsLneeNonCov
    TtlClrdLonsAmtLnrNonCov
    TtlClrdLonsAmtLneeNonCov
    TtlActvLonsTmsLneeChmNonCov
    TtlActvLonsAmtLneeChmNonCov
    TtlBLLonsTmsLneeChmNonCov
    TtlBLLonsAmtLneeChmNonCov
    TtlClrdLonsTmsLneeChmNonCov
    TtlClrdLonsAmtLneeChmNonCov
    TtlActvLonsTmsSllrNonCov
    TtlActvLonsTmsByrNonCov
    TtlActvLonsAmtSllrNonCov
    TtlActvLonsAmtByrNonCov
    TtlBLLonsTmsSllrNonCov
    TtlBLLonsTmsByrNonCov
    TtlBLLonsAmtSllrNonCov
    TtlBLLonsAmtByrNonCov
    TtlClrdLonsTmsSllrNonCov
    TtlClrdLonsTmsByrNonCov
    TtlClrdLonsAmtSllrNonCov
    TtlClrdLonsAmtByrNonCov
    TtlActvLonsTmsLnrCredSlsP2P
    TtlActvLonsAmtLnrCredSlsP2P
    TtlBLLonsTmsLnrCredSlsP2P
    TtlBLLonsAmtLnrCredSlsP2P
    TtlClrdLonsTmsLnrCredSlsP2P
    TtlClrdLonsAmtLnrCredSlsP2P
    TtlActvLonsTmsLnrCredSlsP2B
    TtlActvLonsAmtLnrCredSlsP2B
    TtlBLLonsTmsLnrCredSlsP2B
    TtlBLLonsAmtLnrCredSlsP2B
    TtlClrdLonsTmsLnrCredSlsP2B
    TtlClrdLonsAmtLnrCredSlsP2B
    TtlActvLonsTmsLneeB2P
    TtlActvLonsAmtLneeB2P
    TtlBLLonsTmsLneeB2P
    TtlBLLonsAmtLneeB2P
    TtlClrdLonsLneeB2P
    TtlClrdLonsAmtLneeB2P
    TtlActvLonsTmsLneeP2P
    TtlActvLonsAmtLneeP2P
    TtlBLLonsTmsLneeP2P
    TtlBLLonsAmtLneeP2P
    TtlClrdLonsLneeP2P
    TtlClrdLonsAmtLneeP2P
    TtlActvLonsTmsLnrP2P
    TtlActvLonsAmtLnrP2P
    TtlBLLonsTmsLnrP2P
    TtlBLLonsAmtLnrP2P
    TtlClrdLonsLnrP2P
    TtlClrdLonsAmtLnrP2P
    ttlNonLonsRecSM
    ttlNonLonsSentSM
    ttlNonLonsRecChm
    ttlNonLonsSentChm
    MaxTymsBL
    MaxTymsIHvBL
    MaxAcBal
    TymsIHvGivnLn
    TymsMyLnClrd
    DefaultPenaltySM
    loanStatus
    acStatus
    deActvtnReason
    blStatus
    loanLimit
    nonLonLimit
    withdrawalLimit
    depositLimit
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSMAccountSubscriptionVariables,
  APITypes.OnCreateSMAccountSubscription
>;
export const onUpdateSMAccount = /* GraphQL */ `subscription OnUpdateSMAccount(
  $filter: ModelSubscriptionSMAccountFilterInput
  $owner: String
) {
  onUpdateSMAccount(filter: $filter, owner: $owner) {
    nationalid
    name
    phonecontact
    awsemail
    balance
    p2pchmBenefits
    pw
    nationality
    MFKubwaCost
    MFKubwaNetCost
    MFNdogoDue
    MFNdogoNet
    beneficiary
    beneficiaryAmt
    loanAcceptanceCode
    ttlDpstSM
    TtlWthdrwnSM
    TtlActvLonsTmsLnrCov
    TtlActvLonsTmsLneeCov
    TtlActvLonsAmtLnrCov
    TtlActvLonsAmtLneeCov
    TtlBLLonsTmsLnrCov
    TtlBLLonsTmsLneeCov
    TtlBLLonsAmtLnrCov
    TtlBLLonsAmtLneeCov
    TtlClrdLonsTmsLnrCov
    TtlClrdLonsTmsLneeCov
    TtlClrdLonsAmtLnrCov
    TtlClrdLonsAmtLneeCov
    TtlActvLonsTmsLneeChmCov
    TtlActvLonsAmtLneeChmCov
    TtlBLLonsTmsLneeChmCov
    TtlBLLonsAmtLneeChmCov
    TtlClrdLonsTmsLneeChmCov
    TtlClrdLonsAmtLneeChmCov
    TtlActvLonsTmsSllrCov
    TtlActvLonsTmsByrCov
    TtlActvLonsAmtSllrCov
    TtlActvLonsAmtByrCov
    TtlBLLonsTmsSllrCov
    TtlBLLonsTmsByrCov
    TtlBLLonsAmtSllrCov
    TtlBLLonsAmtByrCov
    TtlClrdLonsTmsSllrCov
    TtlClrdLonsTmsByrCov
    TtlClrdLonsAmtSllrCov
    TtlClrdLonsAmtByrCov
    TtlActvLonsTmsLnrNonCov
    TtlActvLonsTmsLneeNonCov
    TtlActvLonsAmtLnrNonCov
    TtlActvLonsAmtLneeNonCov
    TtlBLLonsTmsLnrNonCov
    TtlBLLonsTmsLneeNonCov
    TtlBLLonsAmtLnrNonCov
    TtlBLLonsAmtLneeNonCov
    TtlClrdLonsTmsLnrNonCov
    TtlClrdLonsTmsLneeNonCov
    TtlClrdLonsAmtLnrNonCov
    TtlClrdLonsAmtLneeNonCov
    TtlActvLonsTmsLneeChmNonCov
    TtlActvLonsAmtLneeChmNonCov
    TtlBLLonsTmsLneeChmNonCov
    TtlBLLonsAmtLneeChmNonCov
    TtlClrdLonsTmsLneeChmNonCov
    TtlClrdLonsAmtLneeChmNonCov
    TtlActvLonsTmsSllrNonCov
    TtlActvLonsTmsByrNonCov
    TtlActvLonsAmtSllrNonCov
    TtlActvLonsAmtByrNonCov
    TtlBLLonsTmsSllrNonCov
    TtlBLLonsTmsByrNonCov
    TtlBLLonsAmtSllrNonCov
    TtlBLLonsAmtByrNonCov
    TtlClrdLonsTmsSllrNonCov
    TtlClrdLonsTmsByrNonCov
    TtlClrdLonsAmtSllrNonCov
    TtlClrdLonsAmtByrNonCov
    TtlActvLonsTmsLnrCredSlsP2P
    TtlActvLonsAmtLnrCredSlsP2P
    TtlBLLonsTmsLnrCredSlsP2P
    TtlBLLonsAmtLnrCredSlsP2P
    TtlClrdLonsTmsLnrCredSlsP2P
    TtlClrdLonsAmtLnrCredSlsP2P
    TtlActvLonsTmsLnrCredSlsP2B
    TtlActvLonsAmtLnrCredSlsP2B
    TtlBLLonsTmsLnrCredSlsP2B
    TtlBLLonsAmtLnrCredSlsP2B
    TtlClrdLonsTmsLnrCredSlsP2B
    TtlClrdLonsAmtLnrCredSlsP2B
    TtlActvLonsTmsLneeB2P
    TtlActvLonsAmtLneeB2P
    TtlBLLonsTmsLneeB2P
    TtlBLLonsAmtLneeB2P
    TtlClrdLonsLneeB2P
    TtlClrdLonsAmtLneeB2P
    TtlActvLonsTmsLneeP2P
    TtlActvLonsAmtLneeP2P
    TtlBLLonsTmsLneeP2P
    TtlBLLonsAmtLneeP2P
    TtlClrdLonsLneeP2P
    TtlClrdLonsAmtLneeP2P
    TtlActvLonsTmsLnrP2P
    TtlActvLonsAmtLnrP2P
    TtlBLLonsTmsLnrP2P
    TtlBLLonsAmtLnrP2P
    TtlClrdLonsLnrP2P
    TtlClrdLonsAmtLnrP2P
    ttlNonLonsRecSM
    ttlNonLonsSentSM
    ttlNonLonsRecChm
    ttlNonLonsSentChm
    MaxTymsBL
    MaxTymsIHvBL
    MaxAcBal
    TymsIHvGivnLn
    TymsMyLnClrd
    DefaultPenaltySM
    loanStatus
    acStatus
    deActvtnReason
    blStatus
    loanLimit
    nonLonLimit
    withdrawalLimit
    depositLimit
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSMAccountSubscriptionVariables,
  APITypes.OnUpdateSMAccountSubscription
>;
export const onDeleteSMAccount = /* GraphQL */ `subscription OnDeleteSMAccount(
  $filter: ModelSubscriptionSMAccountFilterInput
  $owner: String
) {
  onDeleteSMAccount(filter: $filter, owner: $owner) {
    nationalid
    name
    phonecontact
    awsemail
    balance
    p2pchmBenefits
    pw
    nationality
    MFKubwaCost
    MFKubwaNetCost
    MFNdogoDue
    MFNdogoNet
    beneficiary
    beneficiaryAmt
    loanAcceptanceCode
    ttlDpstSM
    TtlWthdrwnSM
    TtlActvLonsTmsLnrCov
    TtlActvLonsTmsLneeCov
    TtlActvLonsAmtLnrCov
    TtlActvLonsAmtLneeCov
    TtlBLLonsTmsLnrCov
    TtlBLLonsTmsLneeCov
    TtlBLLonsAmtLnrCov
    TtlBLLonsAmtLneeCov
    TtlClrdLonsTmsLnrCov
    TtlClrdLonsTmsLneeCov
    TtlClrdLonsAmtLnrCov
    TtlClrdLonsAmtLneeCov
    TtlActvLonsTmsLneeChmCov
    TtlActvLonsAmtLneeChmCov
    TtlBLLonsTmsLneeChmCov
    TtlBLLonsAmtLneeChmCov
    TtlClrdLonsTmsLneeChmCov
    TtlClrdLonsAmtLneeChmCov
    TtlActvLonsTmsSllrCov
    TtlActvLonsTmsByrCov
    TtlActvLonsAmtSllrCov
    TtlActvLonsAmtByrCov
    TtlBLLonsTmsSllrCov
    TtlBLLonsTmsByrCov
    TtlBLLonsAmtSllrCov
    TtlBLLonsAmtByrCov
    TtlClrdLonsTmsSllrCov
    TtlClrdLonsTmsByrCov
    TtlClrdLonsAmtSllrCov
    TtlClrdLonsAmtByrCov
    TtlActvLonsTmsLnrNonCov
    TtlActvLonsTmsLneeNonCov
    TtlActvLonsAmtLnrNonCov
    TtlActvLonsAmtLneeNonCov
    TtlBLLonsTmsLnrNonCov
    TtlBLLonsTmsLneeNonCov
    TtlBLLonsAmtLnrNonCov
    TtlBLLonsAmtLneeNonCov
    TtlClrdLonsTmsLnrNonCov
    TtlClrdLonsTmsLneeNonCov
    TtlClrdLonsAmtLnrNonCov
    TtlClrdLonsAmtLneeNonCov
    TtlActvLonsTmsLneeChmNonCov
    TtlActvLonsAmtLneeChmNonCov
    TtlBLLonsTmsLneeChmNonCov
    TtlBLLonsAmtLneeChmNonCov
    TtlClrdLonsTmsLneeChmNonCov
    TtlClrdLonsAmtLneeChmNonCov
    TtlActvLonsTmsSllrNonCov
    TtlActvLonsTmsByrNonCov
    TtlActvLonsAmtSllrNonCov
    TtlActvLonsAmtByrNonCov
    TtlBLLonsTmsSllrNonCov
    TtlBLLonsTmsByrNonCov
    TtlBLLonsAmtSllrNonCov
    TtlBLLonsAmtByrNonCov
    TtlClrdLonsTmsSllrNonCov
    TtlClrdLonsTmsByrNonCov
    TtlClrdLonsAmtSllrNonCov
    TtlClrdLonsAmtByrNonCov
    TtlActvLonsTmsLnrCredSlsP2P
    TtlActvLonsAmtLnrCredSlsP2P
    TtlBLLonsTmsLnrCredSlsP2P
    TtlBLLonsAmtLnrCredSlsP2P
    TtlClrdLonsTmsLnrCredSlsP2P
    TtlClrdLonsAmtLnrCredSlsP2P
    TtlActvLonsTmsLnrCredSlsP2B
    TtlActvLonsAmtLnrCredSlsP2B
    TtlBLLonsTmsLnrCredSlsP2B
    TtlBLLonsAmtLnrCredSlsP2B
    TtlClrdLonsTmsLnrCredSlsP2B
    TtlClrdLonsAmtLnrCredSlsP2B
    TtlActvLonsTmsLneeB2P
    TtlActvLonsAmtLneeB2P
    TtlBLLonsTmsLneeB2P
    TtlBLLonsAmtLneeB2P
    TtlClrdLonsLneeB2P
    TtlClrdLonsAmtLneeB2P
    TtlActvLonsTmsLneeP2P
    TtlActvLonsAmtLneeP2P
    TtlBLLonsTmsLneeP2P
    TtlBLLonsAmtLneeP2P
    TtlClrdLonsLneeP2P
    TtlClrdLonsAmtLneeP2P
    TtlActvLonsTmsLnrP2P
    TtlActvLonsAmtLnrP2P
    TtlBLLonsTmsLnrP2P
    TtlBLLonsAmtLnrP2P
    TtlClrdLonsLnrP2P
    TtlClrdLonsAmtLnrP2P
    ttlNonLonsRecSM
    ttlNonLonsSentSM
    ttlNonLonsRecChm
    ttlNonLonsSentChm
    MaxTymsBL
    MaxTymsIHvBL
    MaxAcBal
    TymsIHvGivnLn
    TymsMyLnClrd
    DefaultPenaltySM
    loanStatus
    acStatus
    deActvtnReason
    blStatus
    loanLimit
    nonLonLimit
    withdrawalLimit
    depositLimit
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSMAccountSubscriptionVariables,
  APITypes.OnDeleteSMAccountSubscription
>;
export const onCreateSMLoansCovered = /* GraphQL */ `subscription OnCreateSMLoansCovered(
  $filter: ModelSubscriptionSMLoansCoveredFilterInput
  $owner: String
) {
  onCreateSMLoansCovered(filter: $filter, owner: $owner) {
    loanID
    loaneeid
    loaneePhn
    loanerLoanee
    loanerLoaneeAdv
    loanerPhn
    advregnu
    loanerId
    amountgiven
    amountexpected
    amountExpectedBackWthClrnc
    dfltUpdate
    dfltDeadLn
    amountrepaid
    lonBala
    interest
    lnType
    loaneename
    loanername
    loanerEmail
    repaymentPeriod
    DefaultPenaltySM
    DefaultPenaltySM2
    timeExpBack
    crtnDate
    loaneeEmail
    timeExpBack2
    description
    status
    owner
    createdAt
    blOfficer
    advEmail
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSMLoansCoveredSubscriptionVariables,
  APITypes.OnCreateSMLoansCoveredSubscription
>;
export const onUpdateSMLoansCovered = /* GraphQL */ `subscription OnUpdateSMLoansCovered(
  $filter: ModelSubscriptionSMLoansCoveredFilterInput
  $owner: String
) {
  onUpdateSMLoansCovered(filter: $filter, owner: $owner) {
    loanID
    loaneeid
    loaneePhn
    loanerLoanee
    loanerLoaneeAdv
    loanerPhn
    advregnu
    loanerId
    amountgiven
    amountexpected
    amountExpectedBackWthClrnc
    dfltUpdate
    dfltDeadLn
    amountrepaid
    lonBala
    interest
    lnType
    loaneename
    loanername
    loanerEmail
    repaymentPeriod
    DefaultPenaltySM
    DefaultPenaltySM2
    timeExpBack
    crtnDate
    loaneeEmail
    timeExpBack2
    description
    status
    owner
    createdAt
    blOfficer
    advEmail
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSMLoansCoveredSubscriptionVariables,
  APITypes.OnUpdateSMLoansCoveredSubscription
>;
export const onDeleteSMLoansCovered = /* GraphQL */ `subscription OnDeleteSMLoansCovered(
  $filter: ModelSubscriptionSMLoansCoveredFilterInput
  $owner: String
) {
  onDeleteSMLoansCovered(filter: $filter, owner: $owner) {
    loanID
    loaneeid
    loaneePhn
    loanerLoanee
    loanerLoaneeAdv
    loanerPhn
    advregnu
    loanerId
    amountgiven
    amountexpected
    amountExpectedBackWthClrnc
    dfltUpdate
    dfltDeadLn
    amountrepaid
    lonBala
    interest
    lnType
    loaneename
    loanername
    loanerEmail
    repaymentPeriod
    DefaultPenaltySM
    DefaultPenaltySM2
    timeExpBack
    crtnDate
    loaneeEmail
    timeExpBack2
    description
    status
    owner
    createdAt
    blOfficer
    advEmail
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSMLoansCoveredSubscriptionVariables,
  APITypes.OnDeleteSMLoansCoveredSubscription
>;
export const onCreateCovCreditSeller = /* GraphQL */ `subscription OnCreateCovCreditSeller(
  $filter: ModelSubscriptionCovCreditSellerFilterInput
  $owner: String
) {
  onCreateCovCreditSeller(filter: $filter, owner: $owner) {
    loanID
    itemName
    interest
    loanerLoanee
    loanerLoaneeAdv
    buyerContact
    sellerContact
    buyerID
    advEmail
    buyerName
    SellerName
    sellerID
    amountSold
    dfltUpdate
    lnType
    dfltDeadLn
    amountexpectedBack
    amountExpectedBackWthClrnc
    amountRepaid
    repaymentPeriod
    giverStatus
    timeExpBack
    timeExpBack2
    lonBala
    crtnDate
    description
    status
    advregnu
    DefaultPenaltyCredSl
    DefaultPenaltyCredSl2
    owner
    createdAt
    blOfficer
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCovCreditSellerSubscriptionVariables,
  APITypes.OnCreateCovCreditSellerSubscription
>;
export const onUpdateCovCreditSeller = /* GraphQL */ `subscription OnUpdateCovCreditSeller(
  $filter: ModelSubscriptionCovCreditSellerFilterInput
  $owner: String
) {
  onUpdateCovCreditSeller(filter: $filter, owner: $owner) {
    loanID
    itemName
    interest
    loanerLoanee
    loanerLoaneeAdv
    buyerContact
    sellerContact
    buyerID
    advEmail
    buyerName
    SellerName
    sellerID
    amountSold
    dfltUpdate
    lnType
    dfltDeadLn
    amountexpectedBack
    amountExpectedBackWthClrnc
    amountRepaid
    repaymentPeriod
    giverStatus
    timeExpBack
    timeExpBack2
    lonBala
    crtnDate
    description
    status
    advregnu
    DefaultPenaltyCredSl
    DefaultPenaltyCredSl2
    owner
    createdAt
    blOfficer
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCovCreditSellerSubscriptionVariables,
  APITypes.OnUpdateCovCreditSellerSubscription
>;
export const onDeleteCovCreditSeller = /* GraphQL */ `subscription OnDeleteCovCreditSeller(
  $filter: ModelSubscriptionCovCreditSellerFilterInput
  $owner: String
) {
  onDeleteCovCreditSeller(filter: $filter, owner: $owner) {
    loanID
    itemName
    interest
    loanerLoanee
    loanerLoaneeAdv
    buyerContact
    sellerContact
    buyerID
    advEmail
    buyerName
    SellerName
    sellerID
    amountSold
    dfltUpdate
    lnType
    dfltDeadLn
    amountexpectedBack
    amountExpectedBackWthClrnc
    amountRepaid
    repaymentPeriod
    giverStatus
    timeExpBack
    timeExpBack2
    lonBala
    crtnDate
    description
    status
    advregnu
    DefaultPenaltyCredSl
    DefaultPenaltyCredSl2
    owner
    createdAt
    blOfficer
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCovCreditSellerSubscriptionVariables,
  APITypes.OnDeleteCovCreditSellerSubscription
>;
export const onCreateCvrdGroupLoans = /* GraphQL */ `subscription OnCreateCvrdGroupLoans(
  $filter: ModelSubscriptionCvrdGroupLoansFilterInput
  $owner: String
) {
  onCreateCvrdGroupLoans(filter: $filter, owner: $owner) {
    loanID
    grpContact
    loaneePhn
    repaymentPeriod
    loanerLoanee
    loanerLoaneeAdv
    amountGiven
    interest
    advEmail
    amountExpectedBack
    amountExpectedBackWthClrnc
    amountRepaid
    description
    dfltUpdate
    dfltDeadLn
    lonBala
    lnType
    memberId
    advRegNu
    loaneeName
    LoanerName
    timeExpBack
    timeExpBack2
    crtnDate
    status
    owner
    DefaultPenaltyChm
    DefaultPenaltyChm2
    createdAt
    blOfficer
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCvrdGroupLoansSubscriptionVariables,
  APITypes.OnCreateCvrdGroupLoansSubscription
>;
export const onUpdateCvrdGroupLoans = /* GraphQL */ `subscription OnUpdateCvrdGroupLoans(
  $filter: ModelSubscriptionCvrdGroupLoansFilterInput
  $owner: String
) {
  onUpdateCvrdGroupLoans(filter: $filter, owner: $owner) {
    loanID
    grpContact
    loaneePhn
    repaymentPeriod
    loanerLoanee
    loanerLoaneeAdv
    amountGiven
    interest
    advEmail
    amountExpectedBack
    amountExpectedBackWthClrnc
    amountRepaid
    description
    dfltUpdate
    dfltDeadLn
    lonBala
    lnType
    memberId
    advRegNu
    loaneeName
    LoanerName
    timeExpBack
    timeExpBack2
    crtnDate
    status
    owner
    DefaultPenaltyChm
    DefaultPenaltyChm2
    createdAt
    blOfficer
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCvrdGroupLoansSubscriptionVariables,
  APITypes.OnUpdateCvrdGroupLoansSubscription
>;
export const onDeleteCvrdGroupLoans = /* GraphQL */ `subscription OnDeleteCvrdGroupLoans(
  $filter: ModelSubscriptionCvrdGroupLoansFilterInput
  $owner: String
) {
  onDeleteCvrdGroupLoans(filter: $filter, owner: $owner) {
    loanID
    grpContact
    loaneePhn
    repaymentPeriod
    loanerLoanee
    loanerLoaneeAdv
    amountGiven
    interest
    advEmail
    amountExpectedBack
    amountExpectedBackWthClrnc
    amountRepaid
    description
    dfltUpdate
    dfltDeadLn
    lonBala
    lnType
    memberId
    advRegNu
    loaneeName
    LoanerName
    timeExpBack
    timeExpBack2
    crtnDate
    status
    owner
    DefaultPenaltyChm
    DefaultPenaltyChm2
    createdAt
    blOfficer
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCvrdGroupLoansSubscriptionVariables,
  APITypes.OnDeleteCvrdGroupLoansSubscription
>;
export const onCreateNonLoans = /* GraphQL */ `subscription OnCreateNonLoans(
  $filter: ModelSubscriptionNonLoansFilterInput
  $owner: String
) {
  onCreateNonLoans(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNonLoansSubscriptionVariables,
  APITypes.OnCreateNonLoansSubscription
>;
export const onUpdateNonLoans = /* GraphQL */ `subscription OnUpdateNonLoans(
  $filter: ModelSubscriptionNonLoansFilterInput
  $owner: String
) {
  onUpdateNonLoans(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNonLoansSubscriptionVariables,
  APITypes.OnUpdateNonLoansSubscription
>;
export const onDeleteNonLoans = /* GraphQL */ `subscription OnDeleteNonLoans(
  $filter: ModelSubscriptionNonLoansFilterInput
  $owner: String
) {
  onDeleteNonLoans(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNonLoansSubscriptionVariables,
  APITypes.OnDeleteNonLoansSubscription
>;
export const onCreateBizSlsReq = /* GraphQL */ `subscription OnCreateBizSlsReq(
  $filter: ModelSubscriptionBizSlsReqFilterInput
  $owner: String
) {
  onCreateBizSlsReq(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    attendingAdmin
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBizSlsReqSubscriptionVariables,
  APITypes.OnCreateBizSlsReqSubscription
>;
export const onUpdateBizSlsReq = /* GraphQL */ `subscription OnUpdateBizSlsReq(
  $filter: ModelSubscriptionBizSlsReqFilterInput
  $owner: String
) {
  onUpdateBizSlsReq(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    attendingAdmin
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBizSlsReqSubscriptionVariables,
  APITypes.OnUpdateBizSlsReqSubscription
>;
export const onDeleteBizSlsReq = /* GraphQL */ `subscription OnDeleteBizSlsReq(
  $filter: ModelSubscriptionBizSlsReqFilterInput
  $owner: String
) {
  onDeleteBizSlsReq(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    attendingAdmin
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBizSlsReqSubscriptionVariables,
  APITypes.OnDeleteBizSlsReqSubscription
>;
export const onCreateBizSls = /* GraphQL */ `subscription OnCreateBizSls(
  $filter: ModelSubscriptionBizSlsFilterInput
  $owner: String
) {
  onCreateBizSls(filter: $filter, owner: $owner) {
    saleId
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    attendingAdmin
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBizSlsSubscriptionVariables,
  APITypes.OnCreateBizSlsSubscription
>;
export const onUpdateBizSls = /* GraphQL */ `subscription OnUpdateBizSls(
  $filter: ModelSubscriptionBizSlsFilterInput
  $owner: String
) {
  onUpdateBizSls(filter: $filter, owner: $owner) {
    saleId
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    attendingAdmin
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBizSlsSubscriptionVariables,
  APITypes.OnUpdateBizSlsSubscription
>;
export const onDeleteBizSls = /* GraphQL */ `subscription OnDeleteBizSls(
  $filter: ModelSubscriptionBizSlsFilterInput
  $owner: String
) {
  onDeleteBizSls(filter: $filter, owner: $owner) {
    saleId
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    attendingAdmin
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBizSlsSubscriptionVariables,
  APITypes.OnDeleteBizSlsSubscription
>;
export const onCreateLoanRepayments = /* GraphQL */ `subscription OnCreateLoanRepayments(
  $filter: ModelSubscriptionLoanRepaymentsFilterInput
  $owner: String
) {
  onCreateLoanRepayments(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    loanId1
    loanId2
    loanId3
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLoanRepaymentsSubscriptionVariables,
  APITypes.OnCreateLoanRepaymentsSubscription
>;
export const onUpdateLoanRepayments = /* GraphQL */ `subscription OnUpdateLoanRepayments(
  $filter: ModelSubscriptionLoanRepaymentsFilterInput
  $owner: String
) {
  onUpdateLoanRepayments(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    loanId1
    loanId2
    loanId3
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLoanRepaymentsSubscriptionVariables,
  APITypes.OnUpdateLoanRepaymentsSubscription
>;
export const onDeleteLoanRepayments = /* GraphQL */ `subscription OnDeleteLoanRepayments(
  $filter: ModelSubscriptionLoanRepaymentsFilterInput
  $owner: String
) {
  onDeleteLoanRepayments(filter: $filter, owner: $owner) {
    id
    senderPhn
    recPhn
    RecName
    SenderName
    amount
    loanId1
    loanId2
    loanId3
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLoanRepaymentsSubscriptionVariables,
  APITypes.OnDeleteLoanRepaymentsSubscription
>;
export const onCreateSokoAd = /* GraphQL */ `subscription OnCreateSokoAd(
  $filter: ModelSubscriptionSokoAdFilterInput
  $owner: String
) {
  onCreateSokoAd(filter: $filter, owner: $owner) {
    id
    sokokntct
    sokoname
    sokoprice
    sokotown
    sokolnprcntg
    sokolpymntperiod
    sokodesc
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSokoAdSubscriptionVariables,
  APITypes.OnCreateSokoAdSubscription
>;
export const onUpdateSokoAd = /* GraphQL */ `subscription OnUpdateSokoAd(
  $filter: ModelSubscriptionSokoAdFilterInput
  $owner: String
) {
  onUpdateSokoAd(filter: $filter, owner: $owner) {
    id
    sokokntct
    sokoname
    sokoprice
    sokotown
    sokolnprcntg
    sokolpymntperiod
    sokodesc
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSokoAdSubscriptionVariables,
  APITypes.OnUpdateSokoAdSubscription
>;
export const onDeleteSokoAd = /* GraphQL */ `subscription OnDeleteSokoAd(
  $filter: ModelSubscriptionSokoAdFilterInput
  $owner: String
) {
  onDeleteSokoAd(filter: $filter, owner: $owner) {
    id
    sokokntct
    sokoname
    sokoprice
    sokotown
    sokolnprcntg
    sokolpymntperiod
    sokodesc
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSokoAdSubscriptionVariables,
  APITypes.OnDeleteSokoAdSubscription
>;
export const onCreateRafikiLnAd = /* GraphQL */ `subscription OnCreateRafikiLnAd(
  $filter: ModelSubscriptionRafikiLnAdFilterInput
  $owner: String
) {
  onCreateRafikiLnAd(filter: $filter, owner: $owner) {
    id
    rafikiName
    rafikicntct
    rafikiEmail
    AdvEmail
    advLicNo
    rafikiamnt
    defaultPenalty
    rafikidesc
    rafikiprcntg
    rafikirpymntperiod
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRafikiLnAdSubscriptionVariables,
  APITypes.OnCreateRafikiLnAdSubscription
>;
export const onUpdateRafikiLnAd = /* GraphQL */ `subscription OnUpdateRafikiLnAd(
  $filter: ModelSubscriptionRafikiLnAdFilterInput
  $owner: String
) {
  onUpdateRafikiLnAd(filter: $filter, owner: $owner) {
    id
    rafikiName
    rafikicntct
    rafikiEmail
    AdvEmail
    advLicNo
    rafikiamnt
    defaultPenalty
    rafikidesc
    rafikiprcntg
    rafikirpymntperiod
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRafikiLnAdSubscriptionVariables,
  APITypes.OnUpdateRafikiLnAdSubscription
>;
export const onDeleteRafikiLnAd = /* GraphQL */ `subscription OnDeleteRafikiLnAd(
  $filter: ModelSubscriptionRafikiLnAdFilterInput
  $owner: String
) {
  onDeleteRafikiLnAd(filter: $filter, owner: $owner) {
    id
    rafikiName
    rafikicntct
    rafikiEmail
    AdvEmail
    advLicNo
    rafikiamnt
    defaultPenalty
    rafikidesc
    rafikiprcntg
    rafikirpymntperiod
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRafikiLnAdSubscriptionVariables,
  APITypes.OnDeleteRafikiLnAdSubscription
>;
export const onCreateAgent = /* GraphQL */ `subscription OnCreateAgent(
  $filter: ModelSubscriptionAgentFilterInput
  $owner: String
) {
  onCreateAgent(filter: $filter, owner: $owner) {
    phonecontact
    sagentregno
    nationalid
    name
    ttlEarnings
    pw
    email
    TtlFltIn
    TtlFltOut
    floatBal
    latitude
    longitude
    agentEarningBal
    status
    bankName
    bkAcNo
    owner
    town
    MFNWithdrwlFee
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAgentSubscriptionVariables,
  APITypes.OnCreateAgentSubscription
>;
export const onUpdateAgent = /* GraphQL */ `subscription OnUpdateAgent(
  $filter: ModelSubscriptionAgentFilterInput
  $owner: String
) {
  onUpdateAgent(filter: $filter, owner: $owner) {
    phonecontact
    sagentregno
    nationalid
    name
    ttlEarnings
    pw
    email
    TtlFltIn
    TtlFltOut
    floatBal
    latitude
    longitude
    agentEarningBal
    status
    bankName
    bkAcNo
    owner
    town
    MFNWithdrwlFee
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAgentSubscriptionVariables,
  APITypes.OnUpdateAgentSubscription
>;
export const onDeleteAgent = /* GraphQL */ `subscription OnDeleteAgent(
  $filter: ModelSubscriptionAgentFilterInput
  $owner: String
) {
  onDeleteAgent(filter: $filter, owner: $owner) {
    phonecontact
    sagentregno
    nationalid
    name
    ttlEarnings
    pw
    email
    TtlFltIn
    TtlFltOut
    floatBal
    latitude
    longitude
    agentEarningBal
    status
    bankName
    bkAcNo
    owner
    town
    MFNWithdrwlFee
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAgentSubscriptionVariables,
  APITypes.OnDeleteAgentSubscription
>;
export const onCreateFloatPurchase = /* GraphQL */ `subscription OnCreateFloatPurchase(
  $filter: ModelSubscriptionFloatPurchaseFilterInput
  $owner: String
) {
  onCreateFloatPurchase(filter: $filter, owner: $owner) {
    agentphone
    amount
    transactId
    bankAdminID
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFloatPurchaseSubscriptionVariables,
  APITypes.OnCreateFloatPurchaseSubscription
>;
export const onUpdateFloatPurchase = /* GraphQL */ `subscription OnUpdateFloatPurchase(
  $filter: ModelSubscriptionFloatPurchaseFilterInput
  $owner: String
) {
  onUpdateFloatPurchase(filter: $filter, owner: $owner) {
    agentphone
    amount
    transactId
    bankAdminID
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFloatPurchaseSubscriptionVariables,
  APITypes.OnUpdateFloatPurchaseSubscription
>;
export const onDeleteFloatPurchase = /* GraphQL */ `subscription OnDeleteFloatPurchase(
  $filter: ModelSubscriptionFloatPurchaseFilterInput
  $owner: String
) {
  onDeleteFloatPurchase(filter: $filter, owner: $owner) {
    agentphone
    amount
    transactId
    bankAdminID
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFloatPurchaseSubscriptionVariables,
  APITypes.OnDeleteFloatPurchaseSubscription
>;
export const onCreateFloatAdd = /* GraphQL */ `subscription OnCreateFloatAdd(
  $filter: ModelSubscriptionFloatAddFilterInput
  $owner: String
) {
  onCreateFloatAdd(filter: $filter, owner: $owner) {
    id
    withdrawerid
    amount
    agentPhonecontact
    agentName
    userName
    saName
    saPhone
    sagentId
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFloatAddSubscriptionVariables,
  APITypes.OnCreateFloatAddSubscription
>;
export const onUpdateFloatAdd = /* GraphQL */ `subscription OnUpdateFloatAdd(
  $filter: ModelSubscriptionFloatAddFilterInput
  $owner: String
) {
  onUpdateFloatAdd(filter: $filter, owner: $owner) {
    id
    withdrawerid
    amount
    agentPhonecontact
    agentName
    userName
    saName
    saPhone
    sagentId
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFloatAddSubscriptionVariables,
  APITypes.OnUpdateFloatAddSubscription
>;
export const onDeleteFloatAdd = /* GraphQL */ `subscription OnDeleteFloatAdd(
  $filter: ModelSubscriptionFloatAddFilterInput
  $owner: String
) {
  onDeleteFloatAdd(filter: $filter, owner: $owner) {
    id
    withdrawerid
    amount
    agentPhonecontact
    agentName
    userName
    saName
    saPhone
    sagentId
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFloatAddSubscriptionVariables,
  APITypes.OnDeleteFloatAddSubscription
>;
export const onCreateFloatReduction = /* GraphQL */ `subscription OnCreateFloatReduction(
  $filter: ModelSubscriptionFloatReductionFilterInput
  $owner: String
) {
  onCreateFloatReduction(filter: $filter, owner: $owner) {
    id
    amount
    depositerid
    agContact
    agentName
    userName
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFloatReductionSubscriptionVariables,
  APITypes.OnCreateFloatReductionSubscription
>;
export const onUpdateFloatReduction = /* GraphQL */ `subscription OnUpdateFloatReduction(
  $filter: ModelSubscriptionFloatReductionFilterInput
  $owner: String
) {
  onUpdateFloatReduction(filter: $filter, owner: $owner) {
    id
    amount
    depositerid
    agContact
    agentName
    userName
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFloatReductionSubscriptionVariables,
  APITypes.OnUpdateFloatReductionSubscription
>;
export const onDeleteFloatReduction = /* GraphQL */ `subscription OnDeleteFloatReduction(
  $filter: ModelSubscriptionFloatReductionFilterInput
  $owner: String
) {
  onDeleteFloatReduction(filter: $filter, owner: $owner) {
    id
    amount
    depositerid
    agContact
    agentName
    userName
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFloatReductionSubscriptionVariables,
  APITypes.OnDeleteFloatReductionSubscription
>;
export const onCreateAgentWithdrawals = /* GraphQL */ `subscription OnCreateAgentWithdrawals(
  $filter: ModelSubscriptionAgentWithdrawalsFilterInput
  $owner: String
) {
  onCreateAgentWithdrawals(filter: $filter, owner: $owner) {
    id
    agentPhone
    bankAdminId
    bankName
    bkAcNo
    Amount
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAgentWithdrawalsSubscriptionVariables,
  APITypes.OnCreateAgentWithdrawalsSubscription
>;
export const onUpdateAgentWithdrawals = /* GraphQL */ `subscription OnUpdateAgentWithdrawals(
  $filter: ModelSubscriptionAgentWithdrawalsFilterInput
  $owner: String
) {
  onUpdateAgentWithdrawals(filter: $filter, owner: $owner) {
    id
    agentPhone
    bankAdminId
    bankName
    bkAcNo
    Amount
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAgentWithdrawalsSubscriptionVariables,
  APITypes.OnUpdateAgentWithdrawalsSubscription
>;
export const onDeleteAgentWithdrawals = /* GraphQL */ `subscription OnDeleteAgentWithdrawals(
  $filter: ModelSubscriptionAgentWithdrawalsFilterInput
  $owner: String
) {
  onDeleteAgentWithdrawals(filter: $filter, owner: $owner) {
    id
    agentPhone
    bankAdminId
    bankName
    bkAcNo
    Amount
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAgentWithdrawalsSubscriptionVariables,
  APITypes.OnDeleteAgentWithdrawalsSubscription
>;
export const onCreateSAgent = /* GraphQL */ `subscription OnCreateSAgent(
  $filter: ModelSubscriptionSAgentFilterInput
  $owner: String
) {
  onCreateSAgent(filter: $filter, owner: $owner) {
    saPhoneContact
    saNationalid
    name
    acChamp
    pw
    TtlEarnings
    actvMFNdog
    cost
    costBal
    mfnTtl
    offerStatus
    InctvMFNdog
    email
    saBalance
    bankName
    bkAcNo
    status
    owner
    MFKWithdrwlFee
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSAgentSubscriptionVariables,
  APITypes.OnCreateSAgentSubscription
>;
export const onUpdateSAgent = /* GraphQL */ `subscription OnUpdateSAgent(
  $filter: ModelSubscriptionSAgentFilterInput
  $owner: String
) {
  onUpdateSAgent(filter: $filter, owner: $owner) {
    saPhoneContact
    saNationalid
    name
    acChamp
    pw
    TtlEarnings
    actvMFNdog
    cost
    costBal
    mfnTtl
    offerStatus
    InctvMFNdog
    email
    saBalance
    bankName
    bkAcNo
    status
    owner
    MFKWithdrwlFee
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSAgentSubscriptionVariables,
  APITypes.OnUpdateSAgentSubscription
>;
export const onDeleteSAgent = /* GraphQL */ `subscription OnDeleteSAgent(
  $filter: ModelSubscriptionSAgentFilterInput
  $owner: String
) {
  onDeleteSAgent(filter: $filter, owner: $owner) {
    saPhoneContact
    saNationalid
    name
    acChamp
    pw
    TtlEarnings
    actvMFNdog
    cost
    costBal
    mfnTtl
    offerStatus
    InctvMFNdog
    email
    saBalance
    bankName
    bkAcNo
    status
    owner
    MFKWithdrwlFee
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSAgentSubscriptionVariables,
  APITypes.OnDeleteSAgentSubscription
>;
export const onCreateSAgentWithdrawals = /* GraphQL */ `subscription OnCreateSAgentWithdrawals(
  $filter: ModelSubscriptionSAgentWithdrawalsFilterInput
  $owner: String
) {
  onCreateSAgentWithdrawals(filter: $filter, owner: $owner) {
    id
    saId
    amount
    bankAdmnId
    bankName
    bkAcNo
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSAgentWithdrawalsSubscriptionVariables,
  APITypes.OnCreateSAgentWithdrawalsSubscription
>;
export const onUpdateSAgentWithdrawals = /* GraphQL */ `subscription OnUpdateSAgentWithdrawals(
  $filter: ModelSubscriptionSAgentWithdrawalsFilterInput
  $owner: String
) {
  onUpdateSAgentWithdrawals(filter: $filter, owner: $owner) {
    id
    saId
    amount
    bankAdmnId
    bankName
    bkAcNo
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSAgentWithdrawalsSubscriptionVariables,
  APITypes.OnUpdateSAgentWithdrawalsSubscription
>;
export const onDeleteSAgentWithdrawals = /* GraphQL */ `subscription OnDeleteSAgentWithdrawals(
  $filter: ModelSubscriptionSAgentWithdrawalsFilterInput
  $owner: String
) {
  onDeleteSAgentWithdrawals(filter: $filter, owner: $owner) {
    id
    saId
    amount
    bankAdmnId
    bankName
    bkAcNo
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSAgentWithdrawalsSubscriptionVariables,
  APITypes.OnDeleteSAgentWithdrawalsSubscription
>;
export const onCreatePersonel = /* GraphQL */ `subscription OnCreatePersonel(
  $filter: ModelSubscriptionPersonelFilterInput
  $owner: String
) {
  onCreatePersonel(filter: $filter, owner: $owner) {
    phoneKontact
    BusinessRegNo
    nationalid
    BiznaName
    name
    ownrsss
    email
    workerId
    workId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePersonelSubscriptionVariables,
  APITypes.OnCreatePersonelSubscription
>;
export const onUpdatePersonel = /* GraphQL */ `subscription OnUpdatePersonel(
  $filter: ModelSubscriptionPersonelFilterInput
  $owner: String
) {
  onUpdatePersonel(filter: $filter, owner: $owner) {
    phoneKontact
    BusinessRegNo
    nationalid
    BiznaName
    name
    ownrsss
    email
    workerId
    workId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePersonelSubscriptionVariables,
  APITypes.OnUpdatePersonelSubscription
>;
export const onDeletePersonel = /* GraphQL */ `subscription OnDeletePersonel(
  $filter: ModelSubscriptionPersonelFilterInput
  $owner: String
) {
  onDeletePersonel(filter: $filter, owner: $owner) {
    phoneKontact
    BusinessRegNo
    nationalid
    BiznaName
    name
    ownrsss
    email
    workerId
    workId
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePersonelSubscriptionVariables,
  APITypes.OnDeletePersonelSubscription
>;
export const onCreateBizna = /* GraphQL */ `subscription OnCreateBizna($filter: ModelSubscriptionBiznaFilterInput) {
  onCreateBizna(filter: $filter) {
    BusKntct
    busName
    pw
    TtlEarnings
    earningsBal
    bizBeneficiary
    netEarnings
    owner2email
    email
    licenseNo
    bizType
    status
    owner
    description
    createdAt
    noBL
    TtlActvLonsTmsLnrCredSlsB2B
    TtlActvLonsAmtLnrCredSlsB2B
    TtlBLLonsTmsLnrCredSlsB2B
    TtlBLLonsAmtLnrCredSlsB2B
    TtlClrdLonsTmsLnrCredSlsB2B
    TtlClrdLonsAmtLnrCredSlsB2B
    TtlActvLonsTmsLneeCredSlsB2B
    TtlActvLonsAmtLneeCredSlsB2B
    TtlBLLonsTmsLneeCredSlsB2B
    TtlBLLonsAmtLneeCredSlsB2B
    TtlClrdLonsTmsLneeCredSlsB2B
    TtlClrdLonsAmtLneeCredSlsB2B
    TtlActvLonsTmsLnrCredSlsB2P
    TtlActvLonsAmtLnrCredSlsB2P
    TtlBLLonsTmsLnrCredSlsB2P
    TtlBLLonsAmtLnrCredSlsB2P
    TtlClrdLonsTmsLnrCredSlsB2P
    TtlClrdLonsAmtLnrCredSlsB2P
    TtlActvLonsTmsLneeCredSlsP2B
    TtlActvLonsAmtLneeCredSlsP2B
    TtlBLLonsTmsLneeCredSlsP2B
    TtlBLLonsAmtLneeCredSlsP2B
    TtlClrdLonsTmsLneeCredSlsP2B
    TtlClrdLonsAmtLneeCredSlsP2B
    objectionStatus
    objOfficer
    objReason
    AdminNo
    Admin1
    Admin2
    Admin3
    Admin4
    Admin5
    Admin6
    Admin7
    Admin8
    Admin9
    Admin10
    Admin11
    Admin12
    Admin13
    Admin14
    Admin15
    Admin16
    Admin17
    Admin18
    Admin19
    Admin20
    Admin21
    Admin22
    Admin23
    Admin24
    Admin25
    Admin26
    Admin27
    Admin28
    Admin29
    Admin30
    Admin31
    Admin32
    Admin33
    Admin34
    Admin35
    Admin36
    Admin37
    Admin38
    Admin39
    Admin40
    Admin41
    Admin42
    Admin43
    Admin44
    Admin45
    Admin46
    Admin47
    Admin48
    Admin49
    Admin50
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBiznaSubscriptionVariables,
  APITypes.OnCreateBiznaSubscription
>;
export const onUpdateBizna = /* GraphQL */ `subscription OnUpdateBizna($filter: ModelSubscriptionBiznaFilterInput) {
  onUpdateBizna(filter: $filter) {
    BusKntct
    busName
    pw
    TtlEarnings
    earningsBal
    bizBeneficiary
    netEarnings
    owner2email
    email
    licenseNo
    bizType
    status
    owner
    description
    createdAt
    noBL
    TtlActvLonsTmsLnrCredSlsB2B
    TtlActvLonsAmtLnrCredSlsB2B
    TtlBLLonsTmsLnrCredSlsB2B
    TtlBLLonsAmtLnrCredSlsB2B
    TtlClrdLonsTmsLnrCredSlsB2B
    TtlClrdLonsAmtLnrCredSlsB2B
    TtlActvLonsTmsLneeCredSlsB2B
    TtlActvLonsAmtLneeCredSlsB2B
    TtlBLLonsTmsLneeCredSlsB2B
    TtlBLLonsAmtLneeCredSlsB2B
    TtlClrdLonsTmsLneeCredSlsB2B
    TtlClrdLonsAmtLneeCredSlsB2B
    TtlActvLonsTmsLnrCredSlsB2P
    TtlActvLonsAmtLnrCredSlsB2P
    TtlBLLonsTmsLnrCredSlsB2P
    TtlBLLonsAmtLnrCredSlsB2P
    TtlClrdLonsTmsLnrCredSlsB2P
    TtlClrdLonsAmtLnrCredSlsB2P
    TtlActvLonsTmsLneeCredSlsP2B
    TtlActvLonsAmtLneeCredSlsP2B
    TtlBLLonsTmsLneeCredSlsP2B
    TtlBLLonsAmtLneeCredSlsP2B
    TtlClrdLonsTmsLneeCredSlsP2B
    TtlClrdLonsAmtLneeCredSlsP2B
    objectionStatus
    objOfficer
    objReason
    AdminNo
    Admin1
    Admin2
    Admin3
    Admin4
    Admin5
    Admin6
    Admin7
    Admin8
    Admin9
    Admin10
    Admin11
    Admin12
    Admin13
    Admin14
    Admin15
    Admin16
    Admin17
    Admin18
    Admin19
    Admin20
    Admin21
    Admin22
    Admin23
    Admin24
    Admin25
    Admin26
    Admin27
    Admin28
    Admin29
    Admin30
    Admin31
    Admin32
    Admin33
    Admin34
    Admin35
    Admin36
    Admin37
    Admin38
    Admin39
    Admin40
    Admin41
    Admin42
    Admin43
    Admin44
    Admin45
    Admin46
    Admin47
    Admin48
    Admin49
    Admin50
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBiznaSubscriptionVariables,
  APITypes.OnUpdateBiznaSubscription
>;
export const onDeleteBizna = /* GraphQL */ `subscription OnDeleteBizna($filter: ModelSubscriptionBiznaFilterInput) {
  onDeleteBizna(filter: $filter) {
    BusKntct
    busName
    pw
    TtlEarnings
    earningsBal
    bizBeneficiary
    netEarnings
    owner2email
    email
    licenseNo
    bizType
    status
    owner
    description
    createdAt
    noBL
    TtlActvLonsTmsLnrCredSlsB2B
    TtlActvLonsAmtLnrCredSlsB2B
    TtlBLLonsTmsLnrCredSlsB2B
    TtlBLLonsAmtLnrCredSlsB2B
    TtlClrdLonsTmsLnrCredSlsB2B
    TtlClrdLonsAmtLnrCredSlsB2B
    TtlActvLonsTmsLneeCredSlsB2B
    TtlActvLonsAmtLneeCredSlsB2B
    TtlBLLonsTmsLneeCredSlsB2B
    TtlBLLonsAmtLneeCredSlsB2B
    TtlClrdLonsTmsLneeCredSlsB2B
    TtlClrdLonsAmtLneeCredSlsB2B
    TtlActvLonsTmsLnrCredSlsB2P
    TtlActvLonsAmtLnrCredSlsB2P
    TtlBLLonsTmsLnrCredSlsB2P
    TtlBLLonsAmtLnrCredSlsB2P
    TtlClrdLonsTmsLnrCredSlsB2P
    TtlClrdLonsAmtLnrCredSlsB2P
    TtlActvLonsTmsLneeCredSlsP2B
    TtlActvLonsAmtLneeCredSlsP2B
    TtlBLLonsTmsLneeCredSlsP2B
    TtlBLLonsAmtLneeCredSlsP2B
    TtlClrdLonsTmsLneeCredSlsP2B
    TtlClrdLonsAmtLneeCredSlsP2B
    objectionStatus
    objOfficer
    objReason
    AdminNo
    Admin1
    Admin2
    Admin3
    Admin4
    Admin5
    Admin6
    Admin7
    Admin8
    Admin9
    Admin10
    Admin11
    Admin12
    Admin13
    Admin14
    Admin15
    Admin16
    Admin17
    Admin18
    Admin19
    Admin20
    Admin21
    Admin22
    Admin23
    Admin24
    Admin25
    Admin26
    Admin27
    Admin28
    Admin29
    Admin30
    Admin31
    Admin32
    Admin33
    Admin34
    Admin35
    Admin36
    Admin37
    Admin38
    Admin39
    Admin40
    Admin41
    Admin42
    Admin43
    Admin44
    Admin45
    Admin46
    Admin47
    Admin48
    Admin49
    Admin50
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBiznaSubscriptionVariables,
  APITypes.OnDeleteBiznaSubscription
>;
export const onCreateBankAdmin = /* GraphQL */ `subscription OnCreateBankAdmin(
  $filter: ModelSubscriptionBankAdminFilterInput
  $owner: String
) {
  onCreateBankAdmin(filter: $filter, owner: $owner) {
    nationalid
    name
    phonecontact
    TtlEarnings
    pw
    BankAdmBal
    email
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBankAdminSubscriptionVariables,
  APITypes.OnCreateBankAdminSubscription
>;
export const onUpdateBankAdmin = /* GraphQL */ `subscription OnUpdateBankAdmin(
  $filter: ModelSubscriptionBankAdminFilterInput
  $owner: String
) {
  onUpdateBankAdmin(filter: $filter, owner: $owner) {
    nationalid
    name
    phonecontact
    TtlEarnings
    pw
    BankAdmBal
    email
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBankAdminSubscriptionVariables,
  APITypes.OnUpdateBankAdminSubscription
>;
export const onDeleteBankAdmin = /* GraphQL */ `subscription OnDeleteBankAdmin(
  $filter: ModelSubscriptionBankAdminFilterInput
  $owner: String
) {
  onDeleteBankAdmin(filter: $filter, owner: $owner) {
    nationalid
    name
    phonecontact
    TtlEarnings
    pw
    BankAdmBal
    email
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBankAdminSubscriptionVariables,
  APITypes.OnDeleteBankAdminSubscription
>;
export const onCreateAdvocate = /* GraphQL */ `subscription OnCreateAdvocate(
  $filter: ModelSubscriptionAdvocateFilterInput
  $owner: String
) {
  onCreateAdvocate(filter: $filter, owner: $owner) {
    advregnu
    nationalid
    pwd
    name
    phonecontact
    TtlEarnings
    advBal
    email
    bankName
    bkAcNo
    officeLoc
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAdvocateSubscriptionVariables,
  APITypes.OnCreateAdvocateSubscription
>;
export const onUpdateAdvocate = /* GraphQL */ `subscription OnUpdateAdvocate(
  $filter: ModelSubscriptionAdvocateFilterInput
  $owner: String
) {
  onUpdateAdvocate(filter: $filter, owner: $owner) {
    advregnu
    nationalid
    pwd
    name
    phonecontact
    TtlEarnings
    advBal
    email
    bankName
    bkAcNo
    officeLoc
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAdvocateSubscriptionVariables,
  APITypes.OnUpdateAdvocateSubscription
>;
export const onDeleteAdvocate = /* GraphQL */ `subscription OnDeleteAdvocate(
  $filter: ModelSubscriptionAdvocateFilterInput
  $owner: String
) {
  onDeleteAdvocate(filter: $filter, owner: $owner) {
    advregnu
    nationalid
    pwd
    name
    phonecontact
    TtlEarnings
    advBal
    email
    bankName
    bkAcNo
    officeLoc
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAdvocateSubscriptionVariables,
  APITypes.OnDeleteAdvocateSubscription
>;
export const onCreateAdvocateWithdrawals = /* GraphQL */ `subscription OnCreateAdvocateWithdrawals(
  $filter: ModelSubscriptionAdvocateWithdrawalsFilterInput
  $owner: String
) {
  onCreateAdvocateWithdrawals(filter: $filter, owner: $owner) {
    id
    bankAdmnId
    advregnu
    amount
    bankName
    bkAcNo
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAdvocateWithdrawalsSubscriptionVariables,
  APITypes.OnCreateAdvocateWithdrawalsSubscription
>;
export const onUpdateAdvocateWithdrawals = /* GraphQL */ `subscription OnUpdateAdvocateWithdrawals(
  $filter: ModelSubscriptionAdvocateWithdrawalsFilterInput
  $owner: String
) {
  onUpdateAdvocateWithdrawals(filter: $filter, owner: $owner) {
    id
    bankAdmnId
    advregnu
    amount
    bankName
    bkAcNo
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAdvocateWithdrawalsSubscriptionVariables,
  APITypes.OnUpdateAdvocateWithdrawalsSubscription
>;
export const onDeleteAdvocateWithdrawals = /* GraphQL */ `subscription OnDeleteAdvocateWithdrawals(
  $filter: ModelSubscriptionAdvocateWithdrawalsFilterInput
  $owner: String
) {
  onDeleteAdvocateWithdrawals(filter: $filter, owner: $owner) {
    id
    bankAdmnId
    advregnu
    amount
    bankName
    bkAcNo
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAdvocateWithdrawalsSubscriptionVariables,
  APITypes.OnDeleteAdvocateWithdrawalsSubscription
>;
export const onCreateCompany = /* GraphQL */ `subscription OnCreateCompany(
  $filter: ModelSubscriptionCompanyFilterInput
  $owner: String
) {
  onCreateCompany(filter: $filter, owner: $owner) {
    AdminId
    phoneContact
    companyEmail
    termsNconditions
    alert
    about
    policy
    privacy
    recom
    pw1
    pw2
    agentwithdrawalFee
    agentCom
    sagentCom
    companyCom
    AdvCom
    ChampCom
    AdvCompanyCom
    bankAdminCom
    sawithdrawalFee
    advuserwithdrawalFee
    bankAdmuserwithdrawalFee
    userLoanTransferFee
    userTransferFee
    chmMmbrTransferFee
    chmTransferFee
    biznaTransferFee
    palpalLnRpymntFee
    chmLnRpymntFee
    crdSllrLnRpymntFee
    biznaCredSaleFee
    biznaCashSaleFee
    dfltWaiverFee
    tenderingFee
    EmploymentFee
    userClearanceFee
    CoverageFee
    vat
    ttlvat
    enquiryFee
    UsrWthdrwlFees
    ttlNonLonssRecSM
    ttlNonLonssSentSM
    ttlNonLonssRecChm
    ttlNonLonssSentChm
    companyEarningBal
    companyEarning
    agentEarningBal
    agentEarning
    saEarningBal
    saEarning
    AdvEarningBal
    AdvEarning
    admEarningBal
    admEarning
    ttlUsrDep
    ttlUserWthdrwl
    agentFloatIn
    agentFloatOut
    ttlActiveUsers
    ttlInactvUsrs
    ttlBLUsrs
    ttlActiveChm
    ttlInactvChm
    ttlBLChm
    ttlActiveChmUsers
    ttlInactvChmUsrs
    ttlBLChmUsrs
    ttlKFNdgActv
    ttlKFNdgInActv
    ttlKNdgBLStts
    ttlKFKbwActv
    ttlKFKbwInActv
    ttlKKbwBLStts
    ttlKFAdvActv
    ttlKFAdvInActv
    ttlKAdvBLStts
    ttlKFAdmActv
    ttlKFAdmInActv
    ttlKAdmBLStts
    ttlSMLnsInAmtCov
    ttlChmLnsInAmtCov
    ttlSellerLnsInAmtCov
    ttlSMLnsInActvAmtCov
    ttlChmLnsInActvAmtCov
    ttlSellerLnsInActvAmtCov
    ttlSMLnsInClrdAmtCov
    ttlChmLnsInClrdAmtCov
    ttlSellerLnsInClrdAmtCov
    ttlSMLnsInBlAmtCov
    ttlChmLnsInBlAmtCov
    ttlSellerLnsInBlAmtCov
    ttlSMLnsInTymsCov
    ttlChmLnsInTymsCov
    ttlSellerLnsInTymsCov
    ttlSMLnsInActvTymsCov
    ttlChmLnsInActvTymsCov
    ttlSellerLnsInActvTymsCov
    ttlSMLnsInClrdTymsCov
    ttlChmLnsInClrdTymsCov
    ttlSellerLnsInClrdTymsCov
    ttlSMLnsInBlTymsCov
    ttlChmLnsInBlTymsCov
    ttlSellerLnsInBlTymsCov
    ttlCompTrnsfrEarningsCov
    ttlCompBLClrncEarningsCov
    ttlSMLnsInAmtNonCov
    ttlChmLnsInAmtNonCov
    ttlSellerLnsInAmtNonCov
    ttlSMLnsInActvAmtNonCov
    ttlChmLnsInActvAmtNonCov
    ttlSellerLnsInActvAmtNonCov
    ttlSMLnsInClrdAmtNonCov
    ttlChmLnsInClrdAmtNonCov
    ttlSellerLnsInClrdAmtNonCov
    ttlSMLnsInBlAmtNonCov
    ttlChmLnsInBlAmtNonCov
    ttlSellerLnsInBlAmtNonCov
    ttlSMLnsInTymsNonCov
    ttlChmLnsInTymsNonCov
    ttlSellerLnsInTymsNonCov
    ttlSMLnsInActvTymsNonCov
    ttlChmLnsInActvTymsNonCov
    ttlSellerLnsInActvTymsNonCov
    ttlSMLnsInClrdTymsNonCov
    ttlChmLnsInClrdTymsNonCov
    ttlSellerLnsInClrdTymsNonCov
    ttlSMLnsInBlTymsNonCov
    ttlChmLnsInBlTymsNonCov
    ttlSellerLnsInBlTymsNonCov
    ttlCompTrnsfrEarningsNonCov
    ttlCompBLClrncEarningsNonCov
    ttlCompCovEarnings
    maxInterestSM
    maxInterestPwnBrkr
    maxInterestCredSllr
    maxInterestGrp
    maxMFNdogos
    maxBLs
    owner
    totalLnsRecovered
    createdAt
    MFNdogoTC
    MFKubwaTC
    AdvocateTC
    BiznaTNC
    ChamaTNC
    PayPalTNC
    maxDfltPen
    bizBLNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCompanySubscriptionVariables,
  APITypes.OnCreateCompanySubscription
>;
export const onUpdateCompany = /* GraphQL */ `subscription OnUpdateCompany(
  $filter: ModelSubscriptionCompanyFilterInput
  $owner: String
) {
  onUpdateCompany(filter: $filter, owner: $owner) {
    AdminId
    phoneContact
    companyEmail
    termsNconditions
    alert
    about
    policy
    privacy
    recom
    pw1
    pw2
    agentwithdrawalFee
    agentCom
    sagentCom
    companyCom
    AdvCom
    ChampCom
    AdvCompanyCom
    bankAdminCom
    sawithdrawalFee
    advuserwithdrawalFee
    bankAdmuserwithdrawalFee
    userLoanTransferFee
    userTransferFee
    chmMmbrTransferFee
    chmTransferFee
    biznaTransferFee
    palpalLnRpymntFee
    chmLnRpymntFee
    crdSllrLnRpymntFee
    biznaCredSaleFee
    biznaCashSaleFee
    dfltWaiverFee
    tenderingFee
    EmploymentFee
    userClearanceFee
    CoverageFee
    vat
    ttlvat
    enquiryFee
    UsrWthdrwlFees
    ttlNonLonssRecSM
    ttlNonLonssSentSM
    ttlNonLonssRecChm
    ttlNonLonssSentChm
    companyEarningBal
    companyEarning
    agentEarningBal
    agentEarning
    saEarningBal
    saEarning
    AdvEarningBal
    AdvEarning
    admEarningBal
    admEarning
    ttlUsrDep
    ttlUserWthdrwl
    agentFloatIn
    agentFloatOut
    ttlActiveUsers
    ttlInactvUsrs
    ttlBLUsrs
    ttlActiveChm
    ttlInactvChm
    ttlBLChm
    ttlActiveChmUsers
    ttlInactvChmUsrs
    ttlBLChmUsrs
    ttlKFNdgActv
    ttlKFNdgInActv
    ttlKNdgBLStts
    ttlKFKbwActv
    ttlKFKbwInActv
    ttlKKbwBLStts
    ttlKFAdvActv
    ttlKFAdvInActv
    ttlKAdvBLStts
    ttlKFAdmActv
    ttlKFAdmInActv
    ttlKAdmBLStts
    ttlSMLnsInAmtCov
    ttlChmLnsInAmtCov
    ttlSellerLnsInAmtCov
    ttlSMLnsInActvAmtCov
    ttlChmLnsInActvAmtCov
    ttlSellerLnsInActvAmtCov
    ttlSMLnsInClrdAmtCov
    ttlChmLnsInClrdAmtCov
    ttlSellerLnsInClrdAmtCov
    ttlSMLnsInBlAmtCov
    ttlChmLnsInBlAmtCov
    ttlSellerLnsInBlAmtCov
    ttlSMLnsInTymsCov
    ttlChmLnsInTymsCov
    ttlSellerLnsInTymsCov
    ttlSMLnsInActvTymsCov
    ttlChmLnsInActvTymsCov
    ttlSellerLnsInActvTymsCov
    ttlSMLnsInClrdTymsCov
    ttlChmLnsInClrdTymsCov
    ttlSellerLnsInClrdTymsCov
    ttlSMLnsInBlTymsCov
    ttlChmLnsInBlTymsCov
    ttlSellerLnsInBlTymsCov
    ttlCompTrnsfrEarningsCov
    ttlCompBLClrncEarningsCov
    ttlSMLnsInAmtNonCov
    ttlChmLnsInAmtNonCov
    ttlSellerLnsInAmtNonCov
    ttlSMLnsInActvAmtNonCov
    ttlChmLnsInActvAmtNonCov
    ttlSellerLnsInActvAmtNonCov
    ttlSMLnsInClrdAmtNonCov
    ttlChmLnsInClrdAmtNonCov
    ttlSellerLnsInClrdAmtNonCov
    ttlSMLnsInBlAmtNonCov
    ttlChmLnsInBlAmtNonCov
    ttlSellerLnsInBlAmtNonCov
    ttlSMLnsInTymsNonCov
    ttlChmLnsInTymsNonCov
    ttlSellerLnsInTymsNonCov
    ttlSMLnsInActvTymsNonCov
    ttlChmLnsInActvTymsNonCov
    ttlSellerLnsInActvTymsNonCov
    ttlSMLnsInClrdTymsNonCov
    ttlChmLnsInClrdTymsNonCov
    ttlSellerLnsInClrdTymsNonCov
    ttlSMLnsInBlTymsNonCov
    ttlChmLnsInBlTymsNonCov
    ttlSellerLnsInBlTymsNonCov
    ttlCompTrnsfrEarningsNonCov
    ttlCompBLClrncEarningsNonCov
    ttlCompCovEarnings
    maxInterestSM
    maxInterestPwnBrkr
    maxInterestCredSllr
    maxInterestGrp
    maxMFNdogos
    maxBLs
    owner
    totalLnsRecovered
    createdAt
    MFNdogoTC
    MFKubwaTC
    AdvocateTC
    BiznaTNC
    ChamaTNC
    PayPalTNC
    maxDfltPen
    bizBLNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCompanySubscriptionVariables,
  APITypes.OnUpdateCompanySubscription
>;
export const onDeleteCompany = /* GraphQL */ `subscription OnDeleteCompany(
  $filter: ModelSubscriptionCompanyFilterInput
  $owner: String
) {
  onDeleteCompany(filter: $filter, owner: $owner) {
    AdminId
    phoneContact
    companyEmail
    termsNconditions
    alert
    about
    policy
    privacy
    recom
    pw1
    pw2
    agentwithdrawalFee
    agentCom
    sagentCom
    companyCom
    AdvCom
    ChampCom
    AdvCompanyCom
    bankAdminCom
    sawithdrawalFee
    advuserwithdrawalFee
    bankAdmuserwithdrawalFee
    userLoanTransferFee
    userTransferFee
    chmMmbrTransferFee
    chmTransferFee
    biznaTransferFee
    palpalLnRpymntFee
    chmLnRpymntFee
    crdSllrLnRpymntFee
    biznaCredSaleFee
    biznaCashSaleFee
    dfltWaiverFee
    tenderingFee
    EmploymentFee
    userClearanceFee
    CoverageFee
    vat
    ttlvat
    enquiryFee
    UsrWthdrwlFees
    ttlNonLonssRecSM
    ttlNonLonssSentSM
    ttlNonLonssRecChm
    ttlNonLonssSentChm
    companyEarningBal
    companyEarning
    agentEarningBal
    agentEarning
    saEarningBal
    saEarning
    AdvEarningBal
    AdvEarning
    admEarningBal
    admEarning
    ttlUsrDep
    ttlUserWthdrwl
    agentFloatIn
    agentFloatOut
    ttlActiveUsers
    ttlInactvUsrs
    ttlBLUsrs
    ttlActiveChm
    ttlInactvChm
    ttlBLChm
    ttlActiveChmUsers
    ttlInactvChmUsrs
    ttlBLChmUsrs
    ttlKFNdgActv
    ttlKFNdgInActv
    ttlKNdgBLStts
    ttlKFKbwActv
    ttlKFKbwInActv
    ttlKKbwBLStts
    ttlKFAdvActv
    ttlKFAdvInActv
    ttlKAdvBLStts
    ttlKFAdmActv
    ttlKFAdmInActv
    ttlKAdmBLStts
    ttlSMLnsInAmtCov
    ttlChmLnsInAmtCov
    ttlSellerLnsInAmtCov
    ttlSMLnsInActvAmtCov
    ttlChmLnsInActvAmtCov
    ttlSellerLnsInActvAmtCov
    ttlSMLnsInClrdAmtCov
    ttlChmLnsInClrdAmtCov
    ttlSellerLnsInClrdAmtCov
    ttlSMLnsInBlAmtCov
    ttlChmLnsInBlAmtCov
    ttlSellerLnsInBlAmtCov
    ttlSMLnsInTymsCov
    ttlChmLnsInTymsCov
    ttlSellerLnsInTymsCov
    ttlSMLnsInActvTymsCov
    ttlChmLnsInActvTymsCov
    ttlSellerLnsInActvTymsCov
    ttlSMLnsInClrdTymsCov
    ttlChmLnsInClrdTymsCov
    ttlSellerLnsInClrdTymsCov
    ttlSMLnsInBlTymsCov
    ttlChmLnsInBlTymsCov
    ttlSellerLnsInBlTymsCov
    ttlCompTrnsfrEarningsCov
    ttlCompBLClrncEarningsCov
    ttlSMLnsInAmtNonCov
    ttlChmLnsInAmtNonCov
    ttlSellerLnsInAmtNonCov
    ttlSMLnsInActvAmtNonCov
    ttlChmLnsInActvAmtNonCov
    ttlSellerLnsInActvAmtNonCov
    ttlSMLnsInClrdAmtNonCov
    ttlChmLnsInClrdAmtNonCov
    ttlSellerLnsInClrdAmtNonCov
    ttlSMLnsInBlAmtNonCov
    ttlChmLnsInBlAmtNonCov
    ttlSellerLnsInBlAmtNonCov
    ttlSMLnsInTymsNonCov
    ttlChmLnsInTymsNonCov
    ttlSellerLnsInTymsNonCov
    ttlSMLnsInActvTymsNonCov
    ttlChmLnsInActvTymsNonCov
    ttlSellerLnsInActvTymsNonCov
    ttlSMLnsInClrdTymsNonCov
    ttlChmLnsInClrdTymsNonCov
    ttlSellerLnsInClrdTymsNonCov
    ttlSMLnsInBlTymsNonCov
    ttlChmLnsInBlTymsNonCov
    ttlSellerLnsInBlTymsNonCov
    ttlCompTrnsfrEarningsNonCov
    ttlCompBLClrncEarningsNonCov
    ttlCompCovEarnings
    maxInterestSM
    maxInterestPwnBrkr
    maxInterestCredSllr
    maxInterestGrp
    maxMFNdogos
    maxBLs
    owner
    totalLnsRecovered
    createdAt
    MFNdogoTC
    MFKubwaTC
    AdvocateTC
    BiznaTNC
    ChamaTNC
    PayPalTNC
    maxDfltPen
    bizBLNo
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCompanySubscriptionVariables,
  APITypes.OnDeleteCompanySubscription
>;
export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup(
  $filter: ModelSubscriptionGroupFilterInput
  $owner: String
) {
  onCreateGroup(filter: $filter, owner: $owner) {
    grpContact
    regNo
    signitoryContact
    SignitoryNatid
    signitoryName
    grpName
    signitoryPW
    oprtnArea
    venture
    signitory2Sub
    WithdrawCnfrmtn
    WithdrawCnfrmtnAmt
    grpEmail
    grpBal
    ttlGrpMembers
    description
    withdrwlAmt
    ChmBenefits
    subscriptionFrequency
    subscriptionAmt
    lateSubscriptionPenalty
    objectionStatus
    objOfficer
    objReason
    AdminNo
    Admin1
    Admin2
    Admin3
    Admin4
    Admin5
    Admin6
    Admin7
    Admin8
    Admin9
    Admin10
    Admin11
    Admin12
    Admin13
    Admin14
    Admin15
    Admin16
    Admin17
    Admin18
    Admin19
    Admin20
    ttlNonLonsRecChm
    ttlNonLonsSentChm
    ttlDpst
    ttlWthdrwn
    tymsChmHvBL
    TtlActvLonsTmsLnrChmCov
    TtlActvLonsAmtLnrChmCov
    TtlBLLonsTmsLnrChmCov
    TtlBLLonsAmtLnrChmCov
    TtlClrdLonsTmsLnrChmCov
    TtlClrdLonsAmtLnrChmCov
    TtlActvLonsTmsLnrChmNonCov
    TtlActvLonsAmtLnrChmNonCov
    TtlBLLonsTmsLnrChmNonCov
    TtlBLLonsAmtLnrChmNonCov
    TtlClrdLonsTmsLnrChmNonCov
    TtlClrdLonsAmtLnrChmNonCov
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup(
  $filter: ModelSubscriptionGroupFilterInput
  $owner: String
) {
  onUpdateGroup(filter: $filter, owner: $owner) {
    grpContact
    regNo
    signitoryContact
    SignitoryNatid
    signitoryName
    grpName
    signitoryPW
    oprtnArea
    venture
    signitory2Sub
    WithdrawCnfrmtn
    WithdrawCnfrmtnAmt
    grpEmail
    grpBal
    ttlGrpMembers
    description
    withdrwlAmt
    ChmBenefits
    subscriptionFrequency
    subscriptionAmt
    lateSubscriptionPenalty
    objectionStatus
    objOfficer
    objReason
    AdminNo
    Admin1
    Admin2
    Admin3
    Admin4
    Admin5
    Admin6
    Admin7
    Admin8
    Admin9
    Admin10
    Admin11
    Admin12
    Admin13
    Admin14
    Admin15
    Admin16
    Admin17
    Admin18
    Admin19
    Admin20
    ttlNonLonsRecChm
    ttlNonLonsSentChm
    ttlDpst
    ttlWthdrwn
    tymsChmHvBL
    TtlActvLonsTmsLnrChmCov
    TtlActvLonsAmtLnrChmCov
    TtlBLLonsTmsLnrChmCov
    TtlBLLonsAmtLnrChmCov
    TtlClrdLonsTmsLnrChmCov
    TtlClrdLonsAmtLnrChmCov
    TtlActvLonsTmsLnrChmNonCov
    TtlActvLonsAmtLnrChmNonCov
    TtlBLLonsTmsLnrChmNonCov
    TtlBLLonsAmtLnrChmNonCov
    TtlClrdLonsTmsLnrChmNonCov
    TtlClrdLonsAmtLnrChmNonCov
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup(
  $filter: ModelSubscriptionGroupFilterInput
  $owner: String
) {
  onDeleteGroup(filter: $filter, owner: $owner) {
    grpContact
    regNo
    signitoryContact
    SignitoryNatid
    signitoryName
    grpName
    signitoryPW
    oprtnArea
    venture
    signitory2Sub
    WithdrawCnfrmtn
    WithdrawCnfrmtnAmt
    grpEmail
    grpBal
    ttlGrpMembers
    description
    withdrwlAmt
    ChmBenefits
    subscriptionFrequency
    subscriptionAmt
    lateSubscriptionPenalty
    objectionStatus
    objOfficer
    objReason
    AdminNo
    Admin1
    Admin2
    Admin3
    Admin4
    Admin5
    Admin6
    Admin7
    Admin8
    Admin9
    Admin10
    Admin11
    Admin12
    Admin13
    Admin14
    Admin15
    Admin16
    Admin17
    Admin18
    Admin19
    Admin20
    ttlNonLonsRecChm
    ttlNonLonsSentChm
    ttlDpst
    ttlWthdrwn
    tymsChmHvBL
    TtlActvLonsTmsLnrChmCov
    TtlActvLonsAmtLnrChmCov
    TtlBLLonsTmsLnrChmCov
    TtlBLLonsAmtLnrChmCov
    TtlClrdLonsTmsLnrChmCov
    TtlClrdLonsAmtLnrChmCov
    TtlActvLonsTmsLnrChmNonCov
    TtlActvLonsAmtLnrChmNonCov
    TtlBLLonsTmsLnrChmNonCov
    TtlBLLonsAmtLnrChmNonCov
    TtlClrdLonsTmsLnrChmNonCov
    TtlClrdLonsAmtLnrChmNonCov
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onCreateChamaMembers = /* GraphQL */ `subscription OnCreateChamaMembers(
  $filter: ModelSubscriptionChamaMembersFilterInput
  $owner: String
) {
  onCreateChamaMembers(filter: $filter, owner: $owner) {
    MembaId
    groupContact
    regNo
    ChamaNMember
    groupName
    memberContact
    memberName
    memberNatId
    memberChmBenefit
    timeCrtd
    subscribedAmt
    totalSubAmt
    ttlLateSubs
    GrossLnsGvn
    LonAmtGven
    AmtRepaid
    LnBal
    NonLoanAcBal
    ttlNonLonAcBal
    AcStatus
    loanStatus
    blStatus
    owner
    createdAt
    subscriptionFrequency
    subscriptionAmt
    lateSubscriptionPenalty
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChamaMembersSubscriptionVariables,
  APITypes.OnCreateChamaMembersSubscription
>;
export const onUpdateChamaMembers = /* GraphQL */ `subscription OnUpdateChamaMembers(
  $filter: ModelSubscriptionChamaMembersFilterInput
  $owner: String
) {
  onUpdateChamaMembers(filter: $filter, owner: $owner) {
    MembaId
    groupContact
    regNo
    ChamaNMember
    groupName
    memberContact
    memberName
    memberNatId
    memberChmBenefit
    timeCrtd
    subscribedAmt
    totalSubAmt
    ttlLateSubs
    GrossLnsGvn
    LonAmtGven
    AmtRepaid
    LnBal
    NonLoanAcBal
    ttlNonLonAcBal
    AcStatus
    loanStatus
    blStatus
    owner
    createdAt
    subscriptionFrequency
    subscriptionAmt
    lateSubscriptionPenalty
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChamaMembersSubscriptionVariables,
  APITypes.OnUpdateChamaMembersSubscription
>;
export const onDeleteChamaMembers = /* GraphQL */ `subscription OnDeleteChamaMembers(
  $filter: ModelSubscriptionChamaMembersFilterInput
  $owner: String
) {
  onDeleteChamaMembers(filter: $filter, owner: $owner) {
    MembaId
    groupContact
    regNo
    ChamaNMember
    groupName
    memberContact
    memberName
    memberNatId
    memberChmBenefit
    timeCrtd
    subscribedAmt
    totalSubAmt
    ttlLateSubs
    GrossLnsGvn
    LonAmtGven
    AmtRepaid
    LnBal
    NonLoanAcBal
    ttlNonLonAcBal
    AcStatus
    loanStatus
    blStatus
    owner
    createdAt
    subscriptionFrequency
    subscriptionAmt
    lateSubscriptionPenalty
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChamaMembersSubscriptionVariables,
  APITypes.OnDeleteChamaMembersSubscription
>;
export const onCreateChamasNPwnBrkrs = /* GraphQL */ `subscription OnCreateChamasNPwnBrkrs(
  $filter: ModelSubscriptionChamasNPwnBrkrsFilterInput
) {
  onCreateChamasNPwnBrkrs(filter: $filter) {
    id
    contact
    regNo
    AcStatus
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChamasNPwnBrkrsSubscriptionVariables,
  APITypes.OnCreateChamasNPwnBrkrsSubscription
>;
export const onUpdateChamasNPwnBrkrs = /* GraphQL */ `subscription OnUpdateChamasNPwnBrkrs(
  $filter: ModelSubscriptionChamasNPwnBrkrsFilterInput
) {
  onUpdateChamasNPwnBrkrs(filter: $filter) {
    id
    contact
    regNo
    AcStatus
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChamasNPwnBrkrsSubscriptionVariables,
  APITypes.OnUpdateChamasNPwnBrkrsSubscription
>;
export const onDeleteChamasNPwnBrkrs = /* GraphQL */ `subscription OnDeleteChamasNPwnBrkrs(
  $filter: ModelSubscriptionChamasNPwnBrkrsFilterInput
) {
  onDeleteChamasNPwnBrkrs(filter: $filter) {
    id
    contact
    regNo
    AcStatus
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChamasNPwnBrkrsSubscriptionVariables,
  APITypes.OnDeleteChamasNPwnBrkrsSubscription
>;
export const onCreateGroupNonLoans = /* GraphQL */ `subscription OnCreateGroupNonLoans(
  $filter: ModelSubscriptionGroupNonLoansFilterInput
  $owner: String
) {
  onCreateGroupNonLoans(filter: $filter, owner: $owner) {
    id
    grpContact
    recipientPhn
    receiverName
    SenderName
    amountSent
    memberId
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGroupNonLoansSubscriptionVariables,
  APITypes.OnCreateGroupNonLoansSubscription
>;
export const onUpdateGroupNonLoans = /* GraphQL */ `subscription OnUpdateGroupNonLoans(
  $filter: ModelSubscriptionGroupNonLoansFilterInput
  $owner: String
) {
  onUpdateGroupNonLoans(filter: $filter, owner: $owner) {
    id
    grpContact
    recipientPhn
    receiverName
    SenderName
    amountSent
    memberId
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGroupNonLoansSubscriptionVariables,
  APITypes.OnUpdateGroupNonLoansSubscription
>;
export const onDeleteGroupNonLoans = /* GraphQL */ `subscription OnDeleteGroupNonLoans(
  $filter: ModelSubscriptionGroupNonLoansFilterInput
  $owner: String
) {
  onDeleteGroupNonLoans(filter: $filter, owner: $owner) {
    id
    grpContact
    recipientPhn
    receiverName
    SenderName
    amountSent
    memberId
    description
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGroupNonLoansSubscriptionVariables,
  APITypes.OnDeleteGroupNonLoansSubscription
>;
export const onCreateGrpMembersContribution = /* GraphQL */ `subscription OnCreateGrpMembersContribution(
  $filter: ModelSubscriptionGrpMembersContributionFilterInput
  $owner: String
) {
  onCreateGrpMembersContribution(filter: $filter, owner: $owner) {
    id
    memberPhn
    mmberNme
    GrpName
    grpContact
    contriAmount
    memberId
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGrpMembersContributionSubscriptionVariables,
  APITypes.OnCreateGrpMembersContributionSubscription
>;
export const onUpdateGrpMembersContribution = /* GraphQL */ `subscription OnUpdateGrpMembersContribution(
  $filter: ModelSubscriptionGrpMembersContributionFilterInput
  $owner: String
) {
  onUpdateGrpMembersContribution(filter: $filter, owner: $owner) {
    id
    memberPhn
    mmberNme
    GrpName
    grpContact
    contriAmount
    memberId
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGrpMembersContributionSubscriptionVariables,
  APITypes.OnUpdateGrpMembersContributionSubscription
>;
export const onDeleteGrpMembersContribution = /* GraphQL */ `subscription OnDeleteGrpMembersContribution(
  $filter: ModelSubscriptionGrpMembersContributionFilterInput
  $owner: String
) {
  onDeleteGrpMembersContribution(filter: $filter, owner: $owner) {
    id
    memberPhn
    mmberNme
    GrpName
    grpContact
    contriAmount
    memberId
    status
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGrpMembersContributionSubscriptionVariables,
  APITypes.OnDeleteGrpMembersContributionSubscription
>;
export const onCreateReqLoan = /* GraphQL */ `subscription OnCreateReqLoan(
  $filter: ModelSubscriptionReqLoanFilterInput
  $owner: String
) {
  onCreateReqLoan(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    loanerEmail
    loaneePhone
    loaneeName
    AdvEmail
    advLicNo
    loanerName
    loanerPhone
    dfltDeadLn
    amount
    repaymentAmt
    repaymentPeriod
    lnType
    status
    owner
    createdAt
    statusNumber
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReqLoanSubscriptionVariables,
  APITypes.OnCreateReqLoanSubscription
>;
export const onUpdateReqLoan = /* GraphQL */ `subscription OnUpdateReqLoan(
  $filter: ModelSubscriptionReqLoanFilterInput
  $owner: String
) {
  onUpdateReqLoan(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    loanerEmail
    loaneePhone
    loaneeName
    AdvEmail
    advLicNo
    loanerName
    loanerPhone
    dfltDeadLn
    amount
    repaymentAmt
    repaymentPeriod
    lnType
    status
    owner
    createdAt
    statusNumber
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReqLoanSubscriptionVariables,
  APITypes.OnUpdateReqLoanSubscription
>;
export const onDeleteReqLoan = /* GraphQL */ `subscription OnDeleteReqLoan(
  $filter: ModelSubscriptionReqLoanFilterInput
  $owner: String
) {
  onDeleteReqLoan(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    loanerEmail
    loaneePhone
    loaneeName
    AdvEmail
    advLicNo
    loanerName
    loanerPhone
    dfltDeadLn
    amount
    repaymentAmt
    repaymentPeriod
    lnType
    status
    owner
    createdAt
    statusNumber
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReqLoanSubscriptionVariables,
  APITypes.OnDeleteReqLoanSubscription
>;
export const onCreateReqLoanChama = /* GraphQL */ `subscription OnCreateReqLoanChama(
  $filter: ModelSubscriptionReqLoanChamaFilterInput
  $owner: String
) {
  onCreateReqLoanChama(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    chamaPhone
    loaneePhone
    loaneeName
    advLicNo
    dfltDeadLn
    amount
    repaymentAmt
    repaymentPeriod
    status
    owner
    lnType
    loaneeMemberId
    createdAt
    statusNumber
    AdvEmail
    loanerName
    loanerPhone
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReqLoanChamaSubscriptionVariables,
  APITypes.OnCreateReqLoanChamaSubscription
>;
export const onUpdateReqLoanChama = /* GraphQL */ `subscription OnUpdateReqLoanChama(
  $filter: ModelSubscriptionReqLoanChamaFilterInput
  $owner: String
) {
  onUpdateReqLoanChama(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    chamaPhone
    loaneePhone
    loaneeName
    advLicNo
    dfltDeadLn
    amount
    repaymentAmt
    repaymentPeriod
    status
    owner
    lnType
    loaneeMemberId
    createdAt
    statusNumber
    AdvEmail
    loanerName
    loanerPhone
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReqLoanChamaSubscriptionVariables,
  APITypes.OnUpdateReqLoanChamaSubscription
>;
export const onDeleteReqLoanChama = /* GraphQL */ `subscription OnDeleteReqLoanChama(
  $filter: ModelSubscriptionReqLoanChamaFilterInput
  $owner: String
) {
  onDeleteReqLoanChama(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    chamaPhone
    loaneePhone
    loaneeName
    advLicNo
    dfltDeadLn
    amount
    repaymentAmt
    repaymentPeriod
    status
    owner
    lnType
    loaneeMemberId
    createdAt
    statusNumber
    AdvEmail
    loanerName
    loanerPhone
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReqLoanChamaSubscriptionVariables,
  APITypes.OnDeleteReqLoanChamaSubscription
>;
export const onCreateReqLoanCredSl = /* GraphQL */ `subscription OnCreateReqLoanCredSl(
  $filter: ModelSubscriptionReqLoanCredSlFilterInput
  $owner: String
) {
  onCreateReqLoanCredSl(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    businessNo
    loaneePhone
    loaneeName
    itemName
    amount
    dfltDeadLn
    repaymentAmt
    repaymentPeriod
    status
    owner
    createdAt
    statusNumber
    lnType
    AdvEmail
    advLicNo
    loanerName
    loanerPhone
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReqLoanCredSlSubscriptionVariables,
  APITypes.OnCreateReqLoanCredSlSubscription
>;
export const onUpdateReqLoanCredSl = /* GraphQL */ `subscription OnUpdateReqLoanCredSl(
  $filter: ModelSubscriptionReqLoanCredSlFilterInput
  $owner: String
) {
  onUpdateReqLoanCredSl(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    businessNo
    loaneePhone
    loaneeName
    itemName
    amount
    dfltDeadLn
    repaymentAmt
    repaymentPeriod
    status
    owner
    createdAt
    statusNumber
    lnType
    AdvEmail
    advLicNo
    loanerName
    loanerPhone
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReqLoanCredSlSubscriptionVariables,
  APITypes.OnUpdateReqLoanCredSlSubscription
>;
export const onDeleteReqLoanCredSl = /* GraphQL */ `subscription OnDeleteReqLoanCredSl(
  $filter: ModelSubscriptionReqLoanCredSlFilterInput
  $owner: String
) {
  onDeleteReqLoanCredSl(filter: $filter, owner: $owner) {
    id
    loaneeEmail
    businessNo
    loaneePhone
    loaneeName
    itemName
    amount
    dfltDeadLn
    repaymentAmt
    repaymentPeriod
    status
    owner
    createdAt
    statusNumber
    lnType
    AdvEmail
    advLicNo
    loanerName
    loanerPhone
    description
    defaultPenalty
    installmentAmount
    paymentFrequency
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReqLoanCredSlSubscriptionVariables,
  APITypes.OnDeleteReqLoanCredSlSubscription
>;
export const onCreateExRates = /* GraphQL */ `subscription OnCreateExRates(
  $filter: ModelSubscriptionExRatesFilterInput
  $owner: String
) {
  onCreateExRates(filter: $filter, owner: $owner) {
    cur
    sellingPrice
    buyingPrice
    symbol
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateExRatesSubscriptionVariables,
  APITypes.OnCreateExRatesSubscription
>;
export const onUpdateExRates = /* GraphQL */ `subscription OnUpdateExRates(
  $filter: ModelSubscriptionExRatesFilterInput
  $owner: String
) {
  onUpdateExRates(filter: $filter, owner: $owner) {
    cur
    sellingPrice
    buyingPrice
    symbol
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateExRatesSubscriptionVariables,
  APITypes.OnUpdateExRatesSubscription
>;
export const onDeleteExRates = /* GraphQL */ `subscription OnDeleteExRates(
  $filter: ModelSubscriptionExRatesFilterInput
  $owner: String
) {
  onDeleteExRates(filter: $filter, owner: $owner) {
    cur
    sellingPrice
    buyingPrice
    symbol
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteExRatesSubscriptionVariables,
  APITypes.OnDeleteExRatesSubscription
>;
export const onCreateMFKOfferz = /* GraphQL */ `subscription OnCreateMFKOfferz(
  $filter: ModelSubscriptionMFKOfferzFilterInput
  $owner: String
) {
  onCreateMFKOfferz(filter: $filter, owner: $owner) {
    id
    offerStatus
    acCost
    amtPaid
    mfnOffered
    acChamp
    mfnReg
    status
    mfkAc
    acMainAc
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMFKOfferzSubscriptionVariables,
  APITypes.OnCreateMFKOfferzSubscription
>;
export const onUpdateMFKOfferz = /* GraphQL */ `subscription OnUpdateMFKOfferz(
  $filter: ModelSubscriptionMFKOfferzFilterInput
  $owner: String
) {
  onUpdateMFKOfferz(filter: $filter, owner: $owner) {
    id
    offerStatus
    acCost
    amtPaid
    mfnOffered
    acChamp
    mfnReg
    status
    mfkAc
    acMainAc
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMFKOfferzSubscriptionVariables,
  APITypes.OnUpdateMFKOfferzSubscription
>;
export const onDeleteMFKOfferz = /* GraphQL */ `subscription OnDeleteMFKOfferz(
  $filter: ModelSubscriptionMFKOfferzFilterInput
  $owner: String
) {
  onDeleteMFKOfferz(filter: $filter, owner: $owner) {
    id
    offerStatus
    acCost
    amtPaid
    mfnOffered
    acChamp
    mfnReg
    status
    mfkAc
    acMainAc
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMFKOfferzSubscriptionVariables,
  APITypes.OnDeleteMFKOfferzSubscription
>;
export const onCreateMFKOfferz2 = /* GraphQL */ `subscription OnCreateMFKOfferz2(
  $filter: ModelSubscriptionMFKOfferz2FilterInput
  $owner: String
) {
  onCreateMFKOfferz2(filter: $filter, owner: $owner) {
    id
    offerStatus
    acCost
    amtPaid
    mfnOffered
    acChamp
    mfnReg
    status
    mfkAc
    acMainAc
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMFKOfferz2SubscriptionVariables,
  APITypes.OnCreateMFKOfferz2Subscription
>;
export const onUpdateMFKOfferz2 = /* GraphQL */ `subscription OnUpdateMFKOfferz2(
  $filter: ModelSubscriptionMFKOfferz2FilterInput
  $owner: String
) {
  onUpdateMFKOfferz2(filter: $filter, owner: $owner) {
    id
    offerStatus
    acCost
    amtPaid
    mfnOffered
    acChamp
    mfnReg
    status
    mfkAc
    acMainAc
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMFKOfferz2SubscriptionVariables,
  APITypes.OnUpdateMFKOfferz2Subscription
>;
export const onDeleteMFKOfferz2 = /* GraphQL */ `subscription OnDeleteMFKOfferz2(
  $filter: ModelSubscriptionMFKOfferz2FilterInput
  $owner: String
) {
  onDeleteMFKOfferz2(filter: $filter, owner: $owner) {
    id
    offerStatus
    acCost
    amtPaid
    mfnOffered
    acChamp
    mfnReg
    status
    mfkAc
    acMainAc
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMFKOfferz2SubscriptionVariables,
  APITypes.OnDeleteMFKOfferz2Subscription
>;
