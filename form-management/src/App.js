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
    super()
    this.state = {
      users: [],
      oldUsers: [],
    }
    const setOldUsers = () => this.setState.oldUsers;
  }
  render() {
    return (
      <div className="App">
        <div>
          <Route path="/" exact component={Welcome} />
          {/* <Route path="/newuser" exact component={UserForm} /> */}
          <Route exact path="/newuser" render={props =>
            (<UserForm {...props}
            currentUsers={this.state.users}
            oldUsers={this.state.oldUsers}
            setOldUsers={this.setOldUsers}
            />)}/>
          <Route exact path="/currentusers" render={props =>
            (<CurrentUsersDisplay {...props}
            currentUsers={this.state.users}
            oldUsers={this.state.oldUsers}

          />)}/>
        </div>
      </div>
    )
  }
}

export default App;
