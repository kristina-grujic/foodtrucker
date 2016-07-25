import React from "react";
import { Record, Seq, List } from 'immutable';
import Vendor from './vendor';
import Market from './market';
import _ from 'lodash';

const InitialState = Record({
  markets: [],
  filtered_vendors: [],
  vendors: []
});

const initialState = new InitialState;

export default function MarketsReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {
    case 'FETCH_MARKETS':
      var market_list = Seq(action.markets.features)
          .map((json) => {
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
                                    "Description" : json.properties.Description})
            return market;
          })
        .toList();
      return state.merge({markets: market_list});
    case 'FETCH_VENDORS':
      var vendor_list = Seq(action.vendors.data)
          .map((json) => {
            const vendor = new Vendor(json)
            return vendor;
          })
        .toList();
      return state.merge({vendors: vendor_list, filtered_vendors: vendor_list});
    case 'SEARCH_VENDORS':
      var q = action.query.toLowerCase()
      const filtered_vendors = state.vendors.filter(function(vendor) {
                                return (vendor.Tags.toLowerCase().indexOf(q)!=-1 || vendor.Vendor.toLowerCase().indexOf(q)!=-1) });
      return state.merge({filtered_vendors})
    default:
      return state;
  }
}

module.exports = MarketsReducer;
