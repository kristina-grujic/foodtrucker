import React from "react";
import { Record, Seq, List } from 'immutable';
import Vendor from './vendor';
import Market from './market';
import _ from 'lodash';

const InitialState = Record({
  markets: [],
  filtered_vendors: [],
  vendors: [],
  filtered_markets: [],
});

const initialState = new InitialState;

export default function MarketsReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case 'FETCH_MARKETS':
    /* here we are storing the markets we got as a response to our action in a redux storage, so it's globally available */
      var market_list = Seq(action.markets.features)
          .map((json) => {
            /* list of vendors is mapped to a market */
            var vendors = state.vendors.filter(function(vendor) {
              return vendor.market_venue == json.properties.title
            })
            const market = new Market({"coordinates": json.geometry.coordinates,
                                    "title": json.properties.title,
                                    "Postcode": json.properties.Postcode,
                                    "Monday": json.properties.Monday,
                                    "Tuesday": json.properties.Tuesday,
                                    "Wednesday": json.properties.Wednesday,
                                    "Thursday": json.properties.Thursday,
                                    "Friday": json.properties.Friday,
                                    "Saturday": json.properties.Saturday,
                                    "Sunday": json.properties.Sunday,
                                    "Description" : json.properties.Description,
                                    'vendors': vendors})
            return market;
          })
        .toList();
      return state.merge({markets: market_list, filtered_markets: market_list});
    case 'FETCH_VENDORS':
      /* here we are storing the vendors we got as a response to our action in a redux storage, so it's globally available */
      var vendor_list = Seq(action.vendors.data)
          .map((json) => {
            const vendor = new Vendor(json)
            return vendor;
          })
        .toList();
        const today = new Date()
      return state.merge({vendors: vendor_list, filtered_vendors: vendor_list});
    case 'SEARCH_VENDORS':

      /* here we are actually filtering the existing markets fetched to get desired results */
      var q = action.query.toLowerCase()
      const filtered_vendors = state.vendors.filter(function(vendor) {
                                /* if there is no tag containing the query nor name containing it, the vendor won't be in results */
                                return (vendor.Tags.toLowerCase().indexOf(q)!=-1 || vendor.Vendor.toLowerCase().indexOf(q)!=-1) });
      var market_list = Seq(state.markets)
                        .map((market) => {
                          /*  updating markets so we can later check if there are vendors in them matching the filters */
                          var vendors = filtered_vendors.filter(function(vendor) {
                            return vendor.market_venue == market.title
                          })
                          const new_market = new Market({"coordinates": market.coordinates,
                                                      "title": market.title,
                                                      "Postcode": market.Postcode,
                                                      "Monday": market.Monday,
                                                      "Tuesday": market.Tuesday,
                                                      "Wednesday": market.Wednesday,
                                                      "Thursday": market.Thursday,
                                                      "Friday": market.Friday,
                                                      "Saturday": market.Saturday,
                                                      "Sunday": market.Sunday,
                                                      "Description" : market.Description,
                                                      'vendors': vendors})
                              return new_market;
                            })
                        .toList();
      return state.merge({filtered_vendors, filtered_markets: market_list})
    default:
      return state;
  }
}

module.exports = MarketsReducer;
