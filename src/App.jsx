import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import QueryResult from "./components/QueryResult";

const App = () => {
  return (
    <Provider store={store}>
      <div className="p-6 max-w-2xl mx-auto">
        <QueryInput />
        <QueryHistory />
        <QueryResult />
      </div>
    </Provider>
  );
};

export default App;
