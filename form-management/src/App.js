import React from 'react';
import Welcome from "./components/Welcome"
import { Route } from 'react-router-dom';
import UserForm from "./components/UserForm"
import CurrentUsersDisplay from "./components/CurrentUsersDisplay"

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <UserForm />
//     </div>
//   );
// }
//

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <div>
          <Route path="/" exact component={Welcome} />
          <Route path="/newuser" exact component={UserForm} />
          {/* <Route path="/currentusers" exact component={UserForm} /> */}
        </div>
      </div>
    )
  }
}

export default App;
