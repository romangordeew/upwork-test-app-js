import {BIDS_SUCCEED_FETCHING, BIDS_START_FETCHING, BIDS_FAILED_FETCHING} from "../actions/types";

const initialState = {
  data: [],
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
