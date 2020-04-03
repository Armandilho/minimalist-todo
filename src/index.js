import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/login/login";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Store } from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
