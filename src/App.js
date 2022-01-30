
// import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Experiences from './Components/Experiences';
import Contact from './Components/Contact';


function App() {
  return (
    <div className='body'>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experiences">
            <Experiences />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
