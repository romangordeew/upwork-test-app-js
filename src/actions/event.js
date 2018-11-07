import {BACKEND_URL, DEFAULT_HEADERS} from "../utils/const";
import {BIDS_SUCCEED_FETCHING, BIDS_FAILED_FETCHING, BIDS_START_FETCHING} from "../actions/types";

export const fetchBids = () =>
  async dispatch => {
    dispatch({type: BIDS_START_FETCHING});
    const response = await fetch(`${BACKEND_URL}/index.json`, {
      method: 'GET',
      headers: DEFAULT_HEADERS
    });
    if (response.ok) {
      const data = await response.json();
      dispatch({type: BIDS_SUCCEED_FETCHING, data});
    } else {
      dispatch({type: BIDS_FAILED_FETCHING});
      alert('Events loading error');
      console.log('Error (fetchUpcomingEvents) - ', await response.json())
    }
  };
