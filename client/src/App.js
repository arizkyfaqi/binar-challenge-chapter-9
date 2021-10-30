import React, { Suspense } from "react";
import "./App.css";
import routes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            {routes.map((route) => {
              return (
                <Route key={route.path} exact={route.exact} path={route.path}>
                  <Suspense fallback={<div>Loading...</div>}>
                    {route.component}
                  </Suspense>
                </Route>
              );
            })}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
