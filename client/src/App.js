import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Venues from './components/venues/Venues';
import VenueShow from './components/venues/VenueShow';
import styled from 'styled-components';
import ResultShow from './components/results/ResultShow';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Footer from './components/shared/Footer';


const App = () => (
  <>
  {/* <AppContainer> */}
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/venues' component={Venues} />
      <ProtectedRoute exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/venues/:id' component={VenueShow} />
      <Route exact path='/results/:id' component={ResultShow} />
      <Route component={ NoMatch } />
    </Switch>
    <Footer />
  {/* </AppContainer> */}
  </>
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