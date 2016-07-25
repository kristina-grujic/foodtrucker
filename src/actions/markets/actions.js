const markets = require('../../data/markets');
const vendors = require('../../data/vendors');

/*
these functions will be updated once there is a backend of the app, so they
will fetch the data from the API instead of sending the local data we're
currently sending
*/

export const fetchMarkets = () => (dispatch) => {
  dispatch({type: "FETCH_MARKETS", markets})
}

export const searchVendors = (query, date) => (dispatch) => {
  dispatch({type: "SEARCH_VENDORS", query, date})
}

export const fetchVendors = () => (dispatch) => {
  dispatch({type: "FETCH_VENDORS", vendors})
}
