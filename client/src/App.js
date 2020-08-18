import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import NavBar from './components/shared/NavBar';
import Venues from './components/venues/Venues';
import VenueShow from './components/venues/VenueShow';
import VenueList from './components/venues/VenueList';
import styled, { css } from 'styled-components';



const App = () => (
  <AppContainer>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/venues' component={Venues} />
      <Route exact path='/venues/:id' component={VenueShow} />
      <Route exact path='/venues/:id' component={VenueList} />
      <Route component={ NoMatch } />
    </Switch>
  </AppContainer>
)

const AppContainer = styled.div`
  background: white;
  border-radius: none;
  border: 3px solid black;
  color: black;
`;

export default App;

// ############################### //
// import React from 'react';
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
// ################################ //