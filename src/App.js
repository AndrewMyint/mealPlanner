import React, { Component } from "react";
import NavBar from "./components/Navbar.js";
import Recipe from "./components/Recipe.js";
import NavbarSchedule from './components/NavbarSchedule.js'

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { apiID, apiKeys } from "./config/config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          url:
            "https://www.edamam.com/web-img/b88/b885ebf5e1816c0a37c7408f9dc51d65",
          label: "Breakfast Sausage Puffs recipes"
        },
        {
          url:
            "https://www.edamam.com/web-img/1c0/1c083fd6f4412a511d7f30e618ae5b5a.jpg",
          label: "Tomato & Dinner"
        }
      ],
      weeklyPlan: {
        sunday: {
          breakfast: [],
          lunch: [],
          dinner: []
        },
        monday: {
          breakfast: [],
          lunch: [],
          dinner: []
        },
        tuesday: {
          breakfast: [],
          lunch: [],
          dinner: []
        },
        wednesday: {
          breakfast: [],
          lunch: [],
          dinner: []
        },
        thursday: {
          breakfast: [],
          lunch: [],
          dinner: []
        },
        friday: {
          breakfast: [],
          lunch: [],
          dinner: []
        },
        saturday: {
          breakfast: [],
          lunch: [],
          dinner: []
        }
      },
      currentDay: " "
    };
  }
  getRecipe = async e => {
    const mealType = e.target.name;
    e.preventDefault();
    console.log("****", mealType);
    const url = `https://api.edamam.com/search?q=${mealType}&app_id=${apiID}&app_key=${apiKeys}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    const recipesArray = data.hits.map(value => {
      return { url: value.recipe.image, label: value.recipe.label };
    });
    this.setState({
      recipes: recipesArray
    });
    console.log(recipesArray);
  };

  searchRecipe = async e => {
    console.log("hello form serach recipe");
    const keyword = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log("keyword: ", keyword);
    const url = `https://api.edamam.com/search?q=${keyword}&app_id=${apiID}&app_key=${apiKeys}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    const recipesArray = data.hits.map(value => {
      return { url: value.recipe.image, label: value.recipe.label };
    });
    this.setState({
      recipes: recipesArray
    });
  };

  handleClickForSchedule = (e) => {
    const currentDay = e.target.name;
    e.preventDefault();
    this.setState ({
      currentDay: currentDay
      }
    )
  }
  componentDidMount = () => {
    this.setState({
      currentDay: "sunday"
    })
  }

  render() {
    console.log(this.state.currentDay)
    return (
      <div className="App">
        <header className="App-header">
          <h3>It's All About Food</h3>
        </header>
        <NavBar getRecipe={this.getRecipe} searchRecipe={this.searchRecipe} />
        {/* <div className="container"> */}
        <div className="row">
          <div className="col-md-2" style={{ border: "1px solid black" }}>
          <NavbarSchedule handleClickForSchedule = {this.handleClickForSchedule}/>
            {/* <BrowserRouter>
              <Route path='/report' component= {ReportPlan}/>
            </BrowserRouter> */}
          </div>
          <div className="col-md-10" style={{ border: "1px solid black" }}>
            <ul style={{ listStyleType: "none" }}>
              <Recipe recipes={this.state.recipes} />
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
