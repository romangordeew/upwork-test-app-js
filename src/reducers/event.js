import {BIDS_SUCCEED_FETCHING, BIDS_START_FETCHING, BIDS_FAILED_FETCHING} from "../actions/types";

const initialState = {
  data: [{
    "id": "000011e8d5e7c988a23513fecdf27953",
    "auctionType": "Competitive",
    "roundTrip": true,
    "startDate": 1525764960000,
    "endDate": 1525779540000,
    "bidingStarted": false,
    "quantity": 4,
    "numberOfWinners": 1,
    "isPaymentWasDone": false,
    "viewersCount": 67,
    "numberOfBidders": 0,
    "isFollow": false,
    "withTimingFilter": false,
    "isLive": true,
    "currentMinPrice": 148,
    "originalPrice": 208,
    "discount": 28,
    "maxPrice": 208,
    "minBidInc": 3,
    "startingPrice": 148,
    "currency": "USD",
    "currencySymbol": "$",
    "inboundId": "ATH",
    "outboundId": "TLV",
    "imageUrl": "https://elal.app.bidflyer.com/assets/airports/ATH/image/small"
  }, {
    "id": "000011e8d91b0063a23587a7a9a4895f",
    "auctionType": "Competitive",
    "roundTrip": true,
    "startDate": 1525763340000,
    "endDate": 1525782540000,
    "bidingStarted": true,
    "quantity": 4,
    "numberOfWinners": 2,
    "isPaymentWasDone": false,
    "viewersCount": 55,
    "numberOfBidders": 0,
    "isFollow": false,
    "withTimingFilter": false,
    "isLive": true,
    "currentMinPrice": 208,
    "originalPrice": 287,
    "discount": 27,
    "maxPrice": 287,
    "minBidInc": 4,
    "startingPrice": 208,
    "currency": "USD",
    "currencySymbol": "$",
    "inboundId": "VIE",
    "outboundId": "TLV",
    "imageUrl": "https://elal.app.bidflyer.com/assets/airports/VIE/image/small"
  }, {
    "id": "000011e8dbcfec04a23509e967ee0826",
    "auctionType": "Competitive",
    "roundTrip": true,
    "startDate": 1525764060000,
    "endDate": 1525783980000,
    "bidingStarted": false,
    "quantity": 4,
    "numberOfWinners": 1,
    "isPaymentWasDone": false,
    "viewersCount": 25,
    "numberOfBidders": 0,
    "isFollow": false,
    "withTimingFilter": false,
    "isLive": true,
    "currentMinPrice": 347,
    "originalPrice": 437,
    "discount": 20,
    "maxPrice": 437,
    "minBidInc": 7,
    "startingPrice": 347,
    "currency": "USD",
    "currencySymbol": "$",
    "inboundId": "PAR",
    "outboundId": "TLV",
    "imageUrl": "https://elal.app.bidflyer.com/assets/airports/PAR/image/small"
  }, {
    "id": "000011e8f3ff9776a2358f216c94ba6c",
    "auctionType": "Competitive",
    "roundTrip": true,
    "startDate": 1525767540000,
    "endDate": 1525785660000,
    "bidingStarted": false,
    "quantity": 4,
    "numberOfWinners": 1,
    "isPaymentWasDone": false,
    "viewersCount": 2,
    "numberOfBidders": 0,
    "isFollow": false,
    "withTimingFilter": false,
    "isLive": true,
    "currentMinPrice": 362,
    "originalPrice": 442,
    "discount": 18,
    "maxPrice": 442,
    "minBidInc": 7,
    "startingPrice": 362,
    "currency": "USD",
    "currencySymbol": "$",
    "inboundId": "BCN",
    "outboundId": "TLV",
    "imageUrl": "https://elal.app.bidflyer.com/assets/airports/BCN/image/small"
  }, {
    "id": "000011e857b2a3e8a2350df65bd78e80",
    "auctionType": "Competitive",
    "roundTrip": true,
    "startDate": 1525767900000,
    "endDate": 1525787460000,
    "bidingStarted": false,
    "quantity": 4,
    "numberOfWinners": 1,
    "isPaymentWasDone": false,
    "viewersCount": 3,
    "numberOfBidders": 0,
    "isFollow": false,
    "withTimingFilter": false,
    "isLive": true,
    "currentMinPrice": 258,
    "originalPrice": 308,
    "discount": 16,
    "maxPrice": 308,
    "minBidInc": 5,
    "startingPrice": 258,
    "currency": "USD",
    "currencySymbol": "$",
    "inboundId": "VCE",
    "outboundId": "TLV",
    "imageUrl": "https://elal.app.bidflyer.com/assets/airports/VCE/image/small"
  }],
  refreshing: false
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case BIDS_SUCCEED_FETCHING:
      return {
        ...state,
        data: action.data,
        refreshing: false
      };
    case BIDS_START_FETCHING:
      return {
        ...state,
        refreshing: true,
      };
    case BIDS_FAILED_FETCHING:
      return {
        ...state,
        refreshing: false,
      };
    default:
      return state
  }
}
