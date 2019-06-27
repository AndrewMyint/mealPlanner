import React, {Component} from "react";
import NavBar from "./components/navbar.js";
import Search from "./components/search.js";
import Recipe from './components/recipe.js';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {apiID, apiKeys} from './config/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes : [
        {url: 'https://www.edamam.com/web-img/b88/b885ebf5e1816c0a37c7408f9dc51d65', label: 'Breakfast Sausage Puffs recipes'},
        {url: 'https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg', label: "Tomato & Dinner"}
      ]
    }

  }
  getRecipe = async (e) => {
    const mealType = e.target.name;
    e.preventDefault();
    console.log("****", mealType)
    const url = `https://api.edamam.com/search?q=${mealType}&app_id=${apiID}&app_key=${apiKeys}`
    const api_call = await fetch(url);
    const data = await api_call.json();
    const recipesArray = data.hits.map((value) => {
      return {url: value.recipe.image, label: value.recipe.label}
    })
    this.setState({
      recipes: recipesArray
    })
    console.log(recipesArray);
  }

  searchRecipe =  async (e) => {
    console.log('hello form serach recipe')
    const keyword = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log("keyword: ", keyword)
    const url = `https://api.edamam.com/search?q=${keyword}&app_id=${apiID}&app_key=${apiKeys}`
    const api_call = await fetch(url);
    const data = await api_call.json();
    const recipesArray = data.hits.map((value) => {
      return {url: value.recipe.image, label: value.recipe.label}
    })
    this.setState({
      recipes: recipesArray
    })

  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h6>Welcome From Meal Planner</h6>
      </header>
      <div className = "row">
        <div className = "col">
          <NavBar getRecipe = {this.getRecipe}/>
        </div>
        <div className = "col-md">
          <Search searchRecipe = {this.searchRecipe}/>
        </div>
      </div>
      <Recipe recipes = {this.state.recipes}/>
    </div>
  );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h6>Welcome From Meal Planner</h6>
//       </header>
//       {/* <NavBar /> */}
//       <div className = "row">
//         <div className = "col">
//           <NavBar/>
//         </div>
//         <div className = "col-md">
//           <Search/>
//         </div>
//       </div>
//       <Recipe/>
//     </div>
//   );
// }

export default App;
