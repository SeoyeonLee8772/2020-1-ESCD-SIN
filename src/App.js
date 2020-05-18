import React from 'react';
import { Switch, Route} from 'react-router-dom'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Default from './component/Default';
import Main from './component/Main';
function App() {
  return (
    <React.Fragment>  
      <Header/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={Default}/>
        </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
