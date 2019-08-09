import React from 'react';
import Welcome from "./components/Welcome"

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
        <Welcome />

      </div>
    )
  }
}

export default App;
