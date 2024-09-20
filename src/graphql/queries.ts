/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSMAccount = /* GraphQL */ `query GetSMAccount($awsemail: String!) {
  getSMAccount(awsemail: $awsemail) {
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
` as GeneratedQuery<
  APITypes.GetSMAccountQueryVariables,
  APITypes.GetSMAccountQuery
>;
export const listSMAccounts = /* GraphQL */ `query ListSMAccounts(
  $awsemail: String
  $filter: ModelSMAccountFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSMAccounts(
    awsemail: $awsemail
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSMAccountsQueryVariables,
  APITypes.ListSMAccountsQuery
>;
export const getSMLoansCovered = /* GraphQL */ `query GetSMLoansCovered($loanID: String!) {
  getSMLoansCovered(loanID: $loanID) {
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
` as GeneratedQuery<
  APITypes.GetSMLoansCoveredQueryVariables,
  APITypes.GetSMLoansCoveredQuery
>;
export const listSMLoansCovereds = /* GraphQL */ `query ListSMLoansCovereds(
  $loanID: String
  $filter: ModelSMLoansCoveredFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSMLoansCovereds(
    loanID: $loanID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSMLoansCoveredsQueryVariables,
  APITypes.ListSMLoansCoveredsQuery
>;
export const getCovCreditSeller = /* GraphQL */ `query GetCovCreditSeller($loanID: String!) {
  getCovCreditSeller(loanID: $loanID) {
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
` as GeneratedQuery<
  APITypes.GetCovCreditSellerQueryVariables,
  APITypes.GetCovCreditSellerQuery
>;
export const listCovCreditSellers = /* GraphQL */ `query ListCovCreditSellers(
  $loanID: String
  $filter: ModelCovCreditSellerFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCovCreditSellers(
    loanID: $loanID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCovCreditSellersQueryVariables,
  APITypes.ListCovCreditSellersQuery
>;
export const getCvrdGroupLoans = /* GraphQL */ `query GetCvrdGroupLoans($loanID: String!) {
  getCvrdGroupLoans(loanID: $loanID) {
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
` as GeneratedQuery<
  APITypes.GetCvrdGroupLoansQueryVariables,
  APITypes.GetCvrdGroupLoansQuery
>;
export const listCvrdGroupLoans = /* GraphQL */ `query ListCvrdGroupLoans(
  $loanID: String
  $filter: ModelCvrdGroupLoansFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCvrdGroupLoans(
    loanID: $loanID
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCvrdGroupLoansQueryVariables,
  APITypes.ListCvrdGroupLoansQuery
>;
export const getNonLoans = /* GraphQL */ `query GetNonLoans($id: ID!) {
  getNonLoans(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetNonLoansQueryVariables,
  APITypes.GetNonLoansQuery
>;
export const listNonLoans = /* GraphQL */ `query ListNonLoans(
  $filter: ModelNonLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  listNonLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNonLoansQueryVariables,
  APITypes.ListNonLoansQuery
>;
export const getBizSlsReq = /* GraphQL */ `query GetBizSlsReq($id: ID!) {
  getBizSlsReq(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBizSlsReqQueryVariables,
  APITypes.GetBizSlsReqQuery
>;
export const listBizSlsReqs = /* GraphQL */ `query ListBizSlsReqs(
  $filter: ModelBizSlsReqFilterInput
  $limit: Int
  $nextToken: String
) {
  listBizSlsReqs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBizSlsReqsQueryVariables,
  APITypes.ListBizSlsReqsQuery
>;
export const getBizSls = /* GraphQL */ `query GetBizSls($saleId: String!) {
  getBizSls(saleId: $saleId) {
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
` as GeneratedQuery<APITypes.GetBizSlsQueryVariables, APITypes.GetBizSlsQuery>;
export const listBizSls = /* GraphQL */ `query ListBizSls(
  $saleId: String
  $filter: ModelBizSlsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBizSls(
    saleId: $saleId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBizSlsQueryVariables,
  APITypes.ListBizSlsQuery
>;
export const getLoanRepayments = /* GraphQL */ `query GetLoanRepayments($id: ID!) {
  getLoanRepayments(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetLoanRepaymentsQueryVariables,
  APITypes.GetLoanRepaymentsQuery
>;
export const listLoanRepayments = /* GraphQL */ `query ListLoanRepayments(
  $filter: ModelLoanRepaymentsFilterInput
  $limit: Int
  $nextToken: String
) {
  listLoanRepayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLoanRepaymentsQueryVariables,
  APITypes.ListLoanRepaymentsQuery
>;
export const getSokoAd = /* GraphQL */ `query GetSokoAd($id: ID!) {
  getSokoAd(id: $id) {
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
` as GeneratedQuery<APITypes.GetSokoAdQueryVariables, APITypes.GetSokoAdQuery>;
export const listSokoAds = /* GraphQL */ `query ListSokoAds(
  $filter: ModelSokoAdFilterInput
  $limit: Int
  $nextToken: String
) {
  listSokoAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSokoAdsQueryVariables,
  APITypes.ListSokoAdsQuery
>;
export const getRafikiLnAd = /* GraphQL */ `query GetRafikiLnAd($id: ID!) {
  getRafikiLnAd(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetRafikiLnAdQueryVariables,
  APITypes.GetRafikiLnAdQuery
>;
export const listRafikiLnAds = /* GraphQL */ `query ListRafikiLnAds(
  $filter: ModelRafikiLnAdFilterInput
  $limit: Int
  $nextToken: String
) {
  listRafikiLnAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRafikiLnAdsQueryVariables,
  APITypes.ListRafikiLnAdsQuery
>;
export const getAgent = /* GraphQL */ `query GetAgent($phonecontact: String!) {
  getAgent(phonecontact: $phonecontact) {
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
` as GeneratedQuery<APITypes.GetAgentQueryVariables, APITypes.GetAgentQuery>;
export const listAgents = /* GraphQL */ `query ListAgents(
  $phonecontact: String
  $filter: ModelAgentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAgents(
    phonecontact: $phonecontact
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAgentsQueryVariables,
  APITypes.ListAgentsQuery
>;
export const getFloatPurchase = /* GraphQL */ `query GetFloatPurchase($transactId: String!) {
  getFloatPurchase(transactId: $transactId) {
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
` as GeneratedQuery<
  APITypes.GetFloatPurchaseQueryVariables,
  APITypes.GetFloatPurchaseQuery
>;
export const listFloatPurchases = /* GraphQL */ `query ListFloatPurchases(
  $transactId: String
  $filter: ModelFloatPurchaseFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFloatPurchases(
    transactId: $transactId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFloatPurchasesQueryVariables,
  APITypes.ListFloatPurchasesQuery
>;
export const getFloatAdd = /* GraphQL */ `query GetFloatAdd($id: ID!) {
  getFloatAdd(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFloatAddQueryVariables,
  APITypes.GetFloatAddQuery
>;
export const listFloatAdds = /* GraphQL */ `query ListFloatAdds(
  $filter: ModelFloatAddFilterInput
  $limit: Int
  $nextToken: String
) {
  listFloatAdds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFloatAddsQueryVariables,
  APITypes.ListFloatAddsQuery
>;
export const getFloatReduction = /* GraphQL */ `query GetFloatReduction($id: ID!) {
  getFloatReduction(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFloatReductionQueryVariables,
  APITypes.GetFloatReductionQuery
>;
export const listFloatReductions = /* GraphQL */ `query ListFloatReductions(
  $filter: ModelFloatReductionFilterInput
  $limit: Int
  $nextToken: String
) {
  listFloatReductions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFloatReductionsQueryVariables,
  APITypes.ListFloatReductionsQuery
>;
export const getAgentWithdrawals = /* GraphQL */ `query GetAgentWithdrawals($id: ID!) {
  getAgentWithdrawals(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAgentWithdrawalsQueryVariables,
  APITypes.GetAgentWithdrawalsQuery
>;
export const listAgentWithdrawals = /* GraphQL */ `query ListAgentWithdrawals(
  $filter: ModelAgentWithdrawalsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAgentWithdrawals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAgentWithdrawalsQueryVariables,
  APITypes.ListAgentWithdrawalsQuery
>;
export const getSAgent = /* GraphQL */ `query GetSAgent($saPhoneContact: String!) {
  getSAgent(saPhoneContact: $saPhoneContact) {
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
` as GeneratedQuery<APITypes.GetSAgentQueryVariables, APITypes.GetSAgentQuery>;
export const listSAgents = /* GraphQL */ `query ListSAgents(
  $saPhoneContact: String
  $filter: ModelSAgentFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSAgents(
    saPhoneContact: $saPhoneContact
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSAgentsQueryVariables,
  APITypes.ListSAgentsQuery
>;
export const getSAgentWithdrawals = /* GraphQL */ `query GetSAgentWithdrawals($id: ID!) {
  getSAgentWithdrawals(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSAgentWithdrawalsQueryVariables,
  APITypes.GetSAgentWithdrawalsQuery
>;
export const listSAgentWithdrawals = /* GraphQL */ `query ListSAgentWithdrawals(
  $filter: ModelSAgentWithdrawalsFilterInput
  $limit: Int
  $nextToken: String
) {
  listSAgentWithdrawals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSAgentWithdrawalsQueryVariables,
  APITypes.ListSAgentWithdrawalsQuery
>;
export const getPersonel = /* GraphQL */ `query GetPersonel($workerId: String!) {
  getPersonel(workerId: $workerId) {
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
` as GeneratedQuery<
  APITypes.GetPersonelQueryVariables,
  APITypes.GetPersonelQuery
>;
export const listPersonels = /* GraphQL */ `query ListPersonels(
  $workerId: String
  $filter: ModelPersonelFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPersonels(
    workerId: $workerId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPersonelsQueryVariables,
  APITypes.ListPersonelsQuery
>;
export const getBizna = /* GraphQL */ `query GetBizna($BusKntct: String!) {
  getBizna(BusKntct: $BusKntct) {
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
` as GeneratedQuery<APITypes.GetBiznaQueryVariables, APITypes.GetBiznaQuery>;
export const listBiznas = /* GraphQL */ `query ListBiznas(
  $BusKntct: String
  $filter: ModelBiznaFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBiznas(
    BusKntct: $BusKntct
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBiznasQueryVariables,
  APITypes.ListBiznasQuery
>;
export const getBankAdmin = /* GraphQL */ `query GetBankAdmin($nationalid: String!) {
  getBankAdmin(nationalid: $nationalid) {
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
` as GeneratedQuery<
  APITypes.GetBankAdminQueryVariables,
  APITypes.GetBankAdminQuery
>;
export const listBankAdmins = /* GraphQL */ `query ListBankAdmins(
  $nationalid: String
  $filter: ModelBankAdminFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listBankAdmins(
    nationalid: $nationalid
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBankAdminsQueryVariables,
  APITypes.ListBankAdminsQuery
>;
export const getAdvocate = /* GraphQL */ `query GetAdvocate($advregnu: String!) {
  getAdvocate(advregnu: $advregnu) {
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
` as GeneratedQuery<
  APITypes.GetAdvocateQueryVariables,
  APITypes.GetAdvocateQuery
>;
export const listAdvocates = /* GraphQL */ `query ListAdvocates(
  $advregnu: String
  $filter: ModelAdvocateFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAdvocates(
    advregnu: $advregnu
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdvocatesQueryVariables,
  APITypes.ListAdvocatesQuery
>;
export const getAdvocateWithdrawals = /* GraphQL */ `query GetAdvocateWithdrawals($id: ID!) {
  getAdvocateWithdrawals(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAdvocateWithdrawalsQueryVariables,
  APITypes.GetAdvocateWithdrawalsQuery
>;
export const listAdvocateWithdrawals = /* GraphQL */ `query ListAdvocateWithdrawals(
  $filter: ModelAdvocateWithdrawalsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdvocateWithdrawals(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdvocateWithdrawalsQueryVariables,
  APITypes.ListAdvocateWithdrawalsQuery
>;
export const getCompany = /* GraphQL */ `query GetCompany($AdminId: String!) {
  getCompany(AdminId: $AdminId) {
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
` as GeneratedQuery<
  APITypes.GetCompanyQueryVariables,
  APITypes.GetCompanyQuery
>;
export const listCompanies = /* GraphQL */ `query ListCompanies(
  $AdminId: String
  $filter: ModelCompanyFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCompanies(
    AdminId: $AdminId
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCompaniesQueryVariables,
  APITypes.ListCompaniesQuery
>;
export const getGroup = /* GraphQL */ `query GetGroup($grpContact: String!) {
  getGroup(grpContact: $grpContact) {
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
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $grpContact: String
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGroups(
    grpContact: $grpContact
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const getChamaMembers = /* GraphQL */ `query GetChamaMembers($ChamaNMember: String!) {
  getChamaMembers(ChamaNMember: $ChamaNMember) {
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
` as GeneratedQuery<
  APITypes.GetChamaMembersQueryVariables,
  APITypes.GetChamaMembersQuery
>;
export const listChamaMembers = /* GraphQL */ `query ListChamaMembers(
  $ChamaNMember: String
  $filter: ModelChamaMembersFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listChamaMembers(
    ChamaNMember: $ChamaNMember
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChamaMembersQueryVariables,
  APITypes.ListChamaMembersQuery
>;
export const getChamasNPwnBrkrs = /* GraphQL */ `query GetChamasNPwnBrkrs($id: ID!) {
  getChamasNPwnBrkrs(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetChamasNPwnBrkrsQueryVariables,
  APITypes.GetChamasNPwnBrkrsQuery
>;
export const listChamasNPwnBrkrs = /* GraphQL */ `query ListChamasNPwnBrkrs(
  $filter: ModelChamasNPwnBrkrsFilterInput
  $limit: Int
  $nextToken: String
) {
  listChamasNPwnBrkrs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChamasNPwnBrkrsQueryVariables,
  APITypes.ListChamasNPwnBrkrsQuery
>;
export const getGroupNonLoans = /* GraphQL */ `query GetGroupNonLoans($id: ID!) {
  getGroupNonLoans(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGroupNonLoansQueryVariables,
  APITypes.GetGroupNonLoansQuery
>;
export const listGroupNonLoans = /* GraphQL */ `query ListGroupNonLoans(
  $filter: ModelGroupNonLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroupNonLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupNonLoansQueryVariables,
  APITypes.ListGroupNonLoansQuery
>;
export const getGrpMembersContribution = /* GraphQL */ `query GetGrpMembersContribution($id: ID!) {
  getGrpMembersContribution(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGrpMembersContributionQueryVariables,
  APITypes.GetGrpMembersContributionQuery
>;
export const listGrpMembersContributions = /* GraphQL */ `query ListGrpMembersContributions(
  $filter: ModelGrpMembersContributionFilterInput
  $limit: Int
  $nextToken: String
) {
  listGrpMembersContributions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGrpMembersContributionsQueryVariables,
  APITypes.ListGrpMembersContributionsQuery
>;
export const getReqLoan = /* GraphQL */ `query GetReqLoan($id: ID!) {
  getReqLoan(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReqLoanQueryVariables,
  APITypes.GetReqLoanQuery
>;
export const listReqLoans = /* GraphQL */ `query ListReqLoans(
  $filter: ModelReqLoanFilterInput
  $limit: Int
  $nextToken: String
) {
  listReqLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReqLoansQueryVariables,
  APITypes.ListReqLoansQuery
>;
export const getReqLoanChama = /* GraphQL */ `query GetReqLoanChama($id: ID!) {
  getReqLoanChama(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReqLoanChamaQueryVariables,
  APITypes.GetReqLoanChamaQuery
>;
export const listReqLoanChamas = /* GraphQL */ `query ListReqLoanChamas(
  $filter: ModelReqLoanChamaFilterInput
  $limit: Int
  $nextToken: String
) {
  listReqLoanChamas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReqLoanChamasQueryVariables,
  APITypes.ListReqLoanChamasQuery
>;
export const getReqLoanCredSl = /* GraphQL */ `query GetReqLoanCredSl($id: ID!) {
  getReqLoanCredSl(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReqLoanCredSlQueryVariables,
  APITypes.GetReqLoanCredSlQuery
>;
export const listReqLoanCredSls = /* GraphQL */ `query ListReqLoanCredSls(
  $filter: ModelReqLoanCredSlFilterInput
  $limit: Int
  $nextToken: String
) {
  listReqLoanCredSls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReqLoanCredSlsQueryVariables,
  APITypes.ListReqLoanCredSlsQuery
>;
export const getExRates = /* GraphQL */ `query GetExRates($cur: String!) {
  getExRates(cur: $cur) {
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
` as GeneratedQuery<
  APITypes.GetExRatesQueryVariables,
  APITypes.GetExRatesQuery
>;
export const listExRates = /* GraphQL */ `query ListExRates(
  $cur: String
  $filter: ModelExRatesFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listExRates(
    cur: $cur
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExRatesQueryVariables,
  APITypes.ListExRatesQuery
>;
export const getMFKOfferz = /* GraphQL */ `query GetMFKOfferz($id: ID!) {
  getMFKOfferz(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMFKOfferzQueryVariables,
  APITypes.GetMFKOfferzQuery
>;
export const listMFKOfferzs = /* GraphQL */ `query ListMFKOfferzs(
  $filter: ModelMFKOfferzFilterInput
  $limit: Int
  $nextToken: String
) {
  listMFKOfferzs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMFKOfferzsQueryVariables,
  APITypes.ListMFKOfferzsQuery
>;
export const getMFKOfferz2 = /* GraphQL */ `query GetMFKOfferz2($id: ID!) {
  getMFKOfferz2(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMFKOfferz2QueryVariables,
  APITypes.GetMFKOfferz2Query
>;
export const listMFKOfferz2s = /* GraphQL */ `query ListMFKOfferz2s(
  $filter: ModelMFKOfferz2FilterInput
  $limit: Int
  $nextToken: String
) {
  listMFKOfferz2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMFKOfferz2sQueryVariables,
  APITypes.ListMFKOfferz2sQuery
>;
export const VwNatIdentity = /* GraphQL */ `query VwNatIdentity(
  $nationalid: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSMAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  VwNatIdentity(
    nationalid: $nationalid
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwNatIdentityQueryVariables,
  APITypes.VwNatIdentityQuery
>;
export const VwPnCntct = /* GraphQL */ `query VwPnCntct(
  $phonecontact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSMAccountFilterInput
  $limit: Int
  $nextToken: String
) {
  VwPnCntct(
    phonecontact: $phonecontact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.VwPnCntctQueryVariables, APITypes.VwPnCntctQuery>;
export const VwMyDebts7 = /* GraphQL */ `query VwMyDebts7(
  $loaneePhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSMLoansCoveredFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyDebts7(
    loaneePhn: $loaneePhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyDebts7QueryVariables,
  APITypes.VwMyDebts7Query
>;
export const VwLnrNLneesssss7 = /* GraphQL */ `query VwLnrNLneesssss7(
  $loanerLoanee: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSMLoansCoveredFilterInput
  $limit: Int
  $nextToken: String
) {
  VwLnrNLneesssss7(
    loanerLoanee: $loanerLoanee
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwLnrNLneesssss7QueryVariables,
  APITypes.VwLnrNLneesssss7Query
>;
export const VwMyDebtors7 = /* GraphQL */ `query VwMyDebtors7(
  $loanerPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSMLoansCoveredFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyDebtors7(
    loanerPhn: $loanerPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyDebtors7QueryVariables,
  APITypes.VwMyDebtors7Query
>;
export const VwMyLenders7 = /* GraphQL */ `query VwMyLenders7(
  $loaneeEmail: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSMLoansCoveredFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyLenders7(
    loaneeEmail: $loaneeEmail
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyLenders7QueryVariables,
  APITypes.VwMyLenders7Query
>;
export const VwLnrNLneesss7 = /* GraphQL */ `query VwLnrNLneesss7(
  $loanerLoanee: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovCreditSellerFilterInput
  $limit: Int
  $nextToken: String
) {
  VwLnrNLneesss7(
    loanerLoanee: $loanerLoanee
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwLnrNLneesss7QueryVariables,
  APITypes.VwLnrNLneesss7Query
>;
export const VwMyCrdBys7 = /* GraphQL */ `query VwMyCrdBys7(
  $buyerContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovCreditSellerFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyCrdBys7(
    buyerContact: $buyerContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyCrdBys7QueryVariables,
  APITypes.VwMyCrdBys7Query
>;
export const VwMySales7 = /* GraphQL */ `query VwMySales7(
  $sellerContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCovCreditSellerFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMySales7(
    sellerContact: $sellerContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMySales7QueryVariables,
  APITypes.VwMySales7Query
>;
export const VwChamaMemberss7 = /* GraphQL */ `query VwChamaMemberss7(
  $grpContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCvrdGroupLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  VwChamaMemberss7(
    grpContact: $grpContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwChamaMemberss7QueryVariables,
  APITypes.VwChamaMemberss7Query
>;
export const VwMyChamass7 = /* GraphQL */ `query VwMyChamass7(
  $loaneePhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCvrdGroupLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyChamass7(
    loaneePhn: $loaneePhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyChamass7QueryVariables,
  APITypes.VwMyChamass7Query
>;
export const VwLnrNLnee7 = /* GraphQL */ `query VwLnrNLnee7(
  $loanerLoanee: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCvrdGroupLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  VwLnrNLnee7(
    loanerLoanee: $loanerLoanee
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwLnrNLnee7QueryVariables,
  APITypes.VwLnrNLnee7Query
>;
export const VwMySntMny = /* GraphQL */ `query VwMySntMny(
  $senderPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNonLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMySntMny(
    senderPhn: $senderPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMySntMnyQueryVariables,
  APITypes.VwMySntMnyQuery
>;
export const VwMyRecMny = /* GraphQL */ `query VwMyRecMny(
  $recPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelNonLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyRecMny(
    recPhn: $recPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyRecMnyQueryVariables,
  APITypes.VwMyRecMnyQuery
>;
export const VwMySntMny7 = /* GraphQL */ `query VwMySntMny7(
  $senderPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBizSlsReqFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMySntMny7(
    senderPhn: $senderPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMySntMny7QueryVariables,
  APITypes.VwMySntMny7Query
>;
export const VwMyRecMny7 = /* GraphQL */ `query VwMyRecMny7(
  $recPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBizSlsReqFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyRecMny7(
    recPhn: $recPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyRecMny7QueryVariables,
  APITypes.VwMyRecMny7Query
>;
export const VwMySntMny8 = /* GraphQL */ `query VwMySntMny8(
  $senderPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBizSlsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMySntMny8(
    senderPhn: $senderPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMySntMny8QueryVariables,
  APITypes.VwMySntMny8Query
>;
export const VwMyRecMny8 = /* GraphQL */ `query VwMyRecMny8(
  $recPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBizSlsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyRecMny8(
    recPhn: $recPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyRecMny8QueryVariables,
  APITypes.VwMyRecMny8Query
>;
export const VwMySntMnysxz = /* GraphQL */ `query VwMySntMnysxz(
  $senderPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLoanRepaymentsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMySntMnysxz(
    senderPhn: $senderPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMySntMnysxzQueryVariables,
  APITypes.VwMySntMnysxzQuery
>;
export const VwMyRecMnysxz = /* GraphQL */ `query VwMyRecMnysxz(
  $recPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLoanRepaymentsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyRecMnysxz(
    recPhn: $recPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyRecMnysxzQueryVariables,
  APITypes.VwMyRecMnysxzQuery
>;
export const DakaByName = /* GraphQL */ `query DakaByName(
  $sokoname: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSokoAdFilterInput
  $limit: Int
  $nextToken: String
) {
  DakaByName(
    sokoname: $sokoname
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.DakaByNameQueryVariables,
  APITypes.DakaByNameQuery
>;
export const PataByDesc = /* GraphQL */ `query PataByDesc(
  $rafikidesc: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRafikiLnAdFilterInput
  $limit: Int
  $nextToken: String
) {
  PataByDesc(
    rafikidesc: $rafikidesc
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PataByDescQueryVariables,
  APITypes.PataByDescQuery
>;
export const MFKVwMFN = /* GraphQL */ `query MFKVwMFN(
  $sagentregno: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAgentFilterInput
  $limit: Int
  $nextToken: String
) {
  MFKVwMFN(
    sagentregno: $sagentregno
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.MFKVwMFNQueryVariables, APITypes.MFKVwMFNQuery>;
export const VwNatIdentitys = /* GraphQL */ `query VwNatIdentitys(
  $nationalid: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAgentFilterInput
  $limit: Int
  $nextToken: String
) {
  VwNatIdentitys(
    nationalid: $nationalid
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwNatIdentitysQueryVariables,
  APITypes.VwNatIdentitysQuery
>;
export const VwMyBghtFlt = /* GraphQL */ `query VwMyBghtFlt(
  $agentphone: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFloatPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyBghtFlt(
    agentphone: $agentphone
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyBghtFltQueryVariables,
  APITypes.VwMyBghtFltQuery
>;
export const VwMyUsrWthdrwls = /* GraphQL */ `query VwMyUsrWthdrwls(
  $withdrawerid: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFloatAddFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyUsrWthdrwls(
    withdrawerid: $withdrawerid
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyUsrWthdrwlsQueryVariables,
  APITypes.VwMyUsrWthdrwlsQuery
>;
export const VwMFNFltAdds = /* GraphQL */ `query VwMFNFltAdds(
  $agentPhonecontact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFloatAddFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMFNFltAdds(
    agentPhonecontact: $agentPhonecontact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMFNFltAddsQueryVariables,
  APITypes.VwMFNFltAddsQuery
>;
export const VwMFKEarningsFrmWthdrwls = /* GraphQL */ `query VwMFKEarningsFrmWthdrwls(
  $saPhone: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFloatAddFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMFKEarningsFrmWthdrwls(
    saPhone: $saPhone
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMFKEarningsFrmWthdrwlsQueryVariables,
  APITypes.VwMFKEarningsFrmWthdrwlsQuery
>;
export const VwMyUsrDposits = /* GraphQL */ `query VwMyUsrDposits(
  $depositerid: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFloatReductionFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyUsrDposits(
    depositerid: $depositerid
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyUsrDpositsQueryVariables,
  APITypes.VwMyUsrDpositsQuery
>;
export const VwMFNFltDeductns = /* GraphQL */ `query VwMFNFltDeductns(
  $agContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelFloatReductionFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMFNFltDeductns(
    agContact: $agContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMFNFltDeductnsQueryVariables,
  APITypes.VwMFNFltDeductnsQuery
>;
export const VwMFNWthdrwls = /* GraphQL */ `query VwMFNWthdrwls(
  $agentPhone: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAgentWithdrawalsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMFNWthdrwls(
    agentPhone: $agentPhone
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMFNWthdrwlsQueryVariables,
  APITypes.VwMFNWthdrwlsQuery
>;
export const VwNatIdentityss = /* GraphQL */ `query VwNatIdentityss(
  $saNationalid: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSAgentFilterInput
  $limit: Int
  $nextToken: String
) {
  VwNatIdentityss(
    saNationalid: $saNationalid
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwNatIdentityssQueryVariables,
  APITypes.VwNatIdentityssQuery
>;
export const VwMFKWthdrwls = /* GraphQL */ `query VwMFKWthdrwls(
  $saId: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelSAgentWithdrawalsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMFKWthdrwls(
    saId: $saId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMFKWthdrwlsQueryVariables,
  APITypes.VwMFKWthdrwlsQuery
>;
export const WrkrsVww = /* GraphQL */ `query WrkrsVww(
  $phoneKontact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPersonelFilterInput
  $limit: Int
  $nextToken: String
) {
  WrkrsVww(
    phoneKontact: $phoneKontact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.WrkrsVwwQueryVariables, APITypes.WrkrsVwwQuery>;
export const BusOwnrVwWrkrss = /* GraphQL */ `query BusOwnrVwWrkrss(
  $BusinessRegNo: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPersonelFilterInput
  $limit: Int
  $nextToken: String
) {
  BusOwnrVwWrkrss(
    BusinessRegNo: $BusinessRegNo
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusOwnrVwWrkrssQueryVariables,
  APITypes.BusOwnrVwWrkrssQuery
>;
export const BiznaVwws = /* GraphQL */ `query BiznaVwws(
  $busName: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelBiznaFilterInput
  $limit: Int
  $nextToken: String
) {
  BiznaVwws(
    busName: $busName
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.BiznaVwwsQueryVariables, APITypes.BiznaVwwsQuery>;
export const srchAdvCovLns = /* GraphQL */ `query SrchAdvCovLns(
  $phonecontact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAdvocateFilterInput
  $limit: Int
  $nextToken: String
) {
  srchAdvCovLns(
    phonecontact: $phonecontact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SrchAdvCovLnsQueryVariables,
  APITypes.SrchAdvCovLnsQuery
>;
export const VwAdvWthdrwls = /* GraphQL */ `query VwAdvWthdrwls(
  $advregnu: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelAdvocateWithdrawalsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwAdvWthdrwls(
    advregnu: $advregnu
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwAdvWthdrwlsQueryVariables,
  APITypes.VwAdvWthdrwlsQuery
>;
export const VwNatIdentitysz = /* GraphQL */ `query VwNatIdentitysz(
  $SignitoryNatid: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  VwNatIdentitysz(
    SignitoryNatid: $SignitoryNatid
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwNatIdentityszQueryVariables,
  APITypes.VwNatIdentityszQuery
>;
export const ViaChmArea = /* GraphQL */ `query ViaChmArea(
  $oprtnArea: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  ViaChmArea(
    oprtnArea: $oprtnArea
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViaChmAreaQueryVariables,
  APITypes.ViaChmAreaQuery
>;
export const ViaChmVenture = /* GraphQL */ `query ViaChmVenture(
  $venture: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  ViaChmVenture(
    venture: $venture
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViaChmVentureQueryVariables,
  APITypes.ViaChmVentureQuery
>;
export const ViaChmNMmbr = /* GraphQL */ `query ViaChmNMmbr(
  $MembaId: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelChamaMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  ViaChmNMmbr(
    MembaId: $MembaId
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ViaChmNMmbrQueryVariables,
  APITypes.ViaChmNMmbrQuery
>;
export const VwChamaMembers = /* GraphQL */ `query VwChamaMembers(
  $groupContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelChamaMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  VwChamaMembers(
    groupContact: $groupContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwChamaMembersQueryVariables,
  APITypes.VwChamaMembersQuery
>;
export const VwMyChamas = /* GraphQL */ `query VwMyChamas(
  $memberContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelChamaMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyChamas(
    memberContact: $memberContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyChamasQueryVariables,
  APITypes.VwMyChamasQuery
>;
export const VwViaPhons = /* GraphQL */ `query VwViaPhons(
  $contact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelChamasNPwnBrkrsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwViaPhons(
    contact: $contact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwViaPhonsQueryVariables,
  APITypes.VwViaPhonsQuery
>;
export const VwViaRegNo = /* GraphQL */ `query VwViaRegNo(
  $regNo: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelChamasNPwnBrkrsFilterInput
  $limit: Int
  $nextToken: String
) {
  VwViaRegNo(
    regNo: $regNo
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      contact
      regNo
      AcStatus
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwViaRegNoQueryVariables,
  APITypes.VwViaRegNoQuery
>;
export const VwChamaMemberssss = /* GraphQL */ `query VwChamaMemberssss(
  $grpContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupNonLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  VwChamaMemberssss(
    grpContact: $grpContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwChamaMemberssssQueryVariables,
  APITypes.VwChamaMemberssssQuery
>;
export const VwMyChamassss = /* GraphQL */ `query VwMyChamassss(
  $recipientPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGroupNonLoansFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyChamassss(
    recipientPhn: $recipientPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyChamassssQueryVariables,
  APITypes.VwMyChamassssQuery
>;
export const VwMyChamasssss = /* GraphQL */ `query VwMyChamasssss(
  $memberPhn: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGrpMembersContributionFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyChamasssss(
    memberPhn: $memberPhn
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyChamasssssQueryVariables,
  APITypes.VwMyChamasssssQuery
>;
export const VwChamaMembersssss = /* GraphQL */ `query VwChamaMembersssss(
  $grpContact: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelGrpMembersContributionFilterInput
  $limit: Int
  $nextToken: String
) {
  VwChamaMembersssss(
    grpContact: $grpContact
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwChamaMembersssssQueryVariables,
  APITypes.VwChamaMembersssssQuery
>;
export const VwMyLoaneeReq = /* GraphQL */ `query VwMyLoaneeReq(
  $loaneeEmail: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReqLoanFilterInput
  $limit: Int
  $nextToken: String
) {
  VwMyLoaneeReq(
    loaneeEmail: $loaneeEmail
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwMyLoaneeReqQueryVariables,
  APITypes.VwMyLoaneeReqQuery
>;
export const VwLoaneeReq = /* GraphQL */ `query VwLoaneeReq(
  $loanerEmail: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReqLoanFilterInput
  $limit: Int
  $nextToken: String
) {
  VwLoaneeReq(
    loanerEmail: $loanerEmail
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.VwLoaneeReqQueryVariables,
  APITypes.VwLoaneeReqQuery
>;
export const ByChmaLnee = /* GraphQL */ `query ByChmaLnee(
  $loaneeEmail: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReqLoanChamaFilterInput
  $limit: Int
  $nextToken: String
) {
  ByChmaLnee(
    loaneeEmail: $loaneeEmail
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ByChmaLneeQueryVariables,
  APITypes.ByChmaLneeQuery
>;
export const ByChmaNoDesc = /* GraphQL */ `query ByChmaNoDesc(
  $chamaPhone: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReqLoanChamaFilterInput
  $limit: Int
  $nextToken: String
) {
  ByChmaNoDesc(
    chamaPhone: $chamaPhone
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ByChmaNoDescQueryVariables,
  APITypes.ByChmaNoDescQuery
>;
export const ByBzLnee = /* GraphQL */ `query ByBzLnee(
  $loaneeEmail: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReqLoanCredSlFilterInput
  $limit: Int
  $nextToken: String
) {
  ByBzLnee(
    loaneeEmail: $loaneeEmail
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ByBzLneeQueryVariables, APITypes.ByBzLneeQuery>;
export const ByBzNoDesc = /* GraphQL */ `query ByBzNoDesc(
  $businessNo: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelReqLoanCredSlFilterInput
  $limit: Int
  $nextToken: String
) {
  ByBzNoDesc(
    businessNo: $businessNo
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ByBzNoDescQueryVariables,
  APITypes.ByBzNoDescQuery
>;
export const ByBzNoDescsxzc = /* GraphQL */ `query ByBzNoDescsxzc(
  $symbol: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelExRatesFilterInput
  $limit: Int
  $nextToken: String
) {
  ByBzNoDescsxzc(
    symbol: $symbol
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      cur
      sellingPrice
      buyingPrice
      symbol
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ByBzNoDescsxzcQueryVariables,
  APITypes.ByBzNoDescsxzcQuery
>;
export const MFKOffers = /* GraphQL */ `query MFKOffers(
  $mfkAc: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMFKOfferzFilterInput
  $limit: Int
  $nextToken: String
) {
  MFKOffers(
    mfkAc: $mfkAc
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.MFKOffersQueryVariables, APITypes.MFKOffersQuery>;
export const MFKOffers2 = /* GraphQL */ `query MFKOffers2(
  $mfkAc: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMFKOfferz2FilterInput
  $limit: Int
  $nextToken: String
) {
  MFKOffers2(
    mfkAc: $mfkAc
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MFKOffers2QueryVariables,
  APITypes.MFKOffers2Query
>;
