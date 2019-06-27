import React from "react";

const Recipe = props => {
  const recipeArray = props.recipes.map((recipe, index) => {
    return (
      <div key={`${recipe.label}_${index}`}>
        <img src={recipe.url} alt={`${recipe.label}_${index}`} />
        <h5>{recipe.label}</h5>
      </div>
    );
  });
  return <div>{recipeArray}</div>;
};

export default Recipe;
