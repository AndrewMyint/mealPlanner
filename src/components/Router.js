import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from '../App.js';
import CheckPlan from '../pages/CheckPlan.js';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path= "/" component = {App} exact></Route>
        <Route path= "/check_plan" component = {CheckPlan}></Route>
      </div>
    </BrowserRouter>
  )
}

export default Router;