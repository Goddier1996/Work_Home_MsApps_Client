import React from 'react';
import Categories from './components/Categories';
import Elements from './components/Elements';
import { BrowserRouter, Route, Switch } from "react-router-dom"; // מאפשר העברה בין מסכים
import NotFoundPage from './components/404'
import Home from './pages/Home';
import Fotter from './components/fotter';



function App() {

  return (

    <BrowserRouter>

      {/* show button at top center , user select Category*/}
      <Categories />

      <Switch>

        {/* home page */}
        <Route path="/" exact component={Home} />

        <Route path="/Elements/:id" exact component={Elements} />

        {/* if page don't found show 404 */}
        <Route path="*" exact component={NotFoundPage} />

      </Switch>

      <Fotter />
      
    </BrowserRouter>
  );
}

export default App;