import './App.css';
import React from 'react';
import Username from './componets/Username';




function App() {
  return (
    <UserContext.Provider value = "DiegoAQuinteroA">
      <Username/>
    </UserContext.Provider>
  );
}

function User(){
  const valor = React.useContext(UserContext);
  return <h1>{valor}</h1>

  // return (
  //   <UserContext.Consumer>
  //     {value => <h1>{value}</h1>};
  //   </UserContext.Consumer>
  // )
}

export default App;
export const UserContext = React.createContext();
