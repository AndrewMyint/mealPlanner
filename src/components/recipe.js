import React from "react";

const Recipe = props => {
  const recipeArray = props.recipes.map((recipe, index) => {
    return (
      <div
        className="col-md-4 recipe-item"
        style={{ overflow: "hidden" }}
        key={`${recipe.label}_${index}`}
      >
        <img
          className="mb-2"
          src={recipe.url}
          alt={`${recipe.label}_${index}`}
        />
        <div>
          <h5 className="text-center">{recipe.label}</h5>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{recipeArray}</div>
    </div>
  );
};

export default Recipe;
