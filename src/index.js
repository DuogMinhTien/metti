import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import reducer from "./redux/reducers/index";
import rootSaga from "./redux/saga";
import { composeWithDevTools } from "redux-devtools-extension";
import apiService from "./services/apiService";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import queryClient from "./services/queryClient";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();

global.apiService = new apiService();

const store = createStore(
  reducer,
  process.env.NODE_ENV !== "development"
    ? composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    : composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
