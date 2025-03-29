import { createSlice } from "@reduxjs/toolkit";
import mockDatabase from "../mockData";

const processQuery = (query) => {
  query = query.toLowerCase();
  if (query.includes("sales trend")) {
    return { type: "chart", data: mockDatabase.sales };
  } else if (query.includes("sales last month")) {
    return { type: "text", data: `Sales in ${mockDatabase.sales[1].month} were $${mockDatabase.sales[1].revenue}.` };
  } else if (query.includes("new customers")) {
    return { type: "text", data: `We acquired ${mockDatabase.customers[1].newUsers} new customers in ${mockDatabase.customers[1].month}.` };
  } else if (query.includes("top product")) {
    return { type: "text", data: `Our top product is ${mockDatabase.products[1].name} with ${mockDatabase.products[1].sales} sales.` };
  }
  return { type: "text", data: "I'm sorry, I don't have data for that." };
};

const querySlice = createSlice({
  name: "queries",
  initialState: { history: [], result: null, loading: false, error: null },
  reducers: {
    addQuery: (state, action) => {
      state.loading = true;
      state.history.push(action.payload);
      state.result = null;
    },
    setResult: (state, action) => {
      state.result = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { addQuery, setResult, setError } = querySlice.actions;
export default querySlice.reducer;
export { processQuery };
