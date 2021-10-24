import React, { Suspense } from "react";
import "./App.css";
import routes from "./routes";
// import "bootstrap/dist/css/bootstrap.min.css";
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


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
