import React from "react";

const Search = props => {
  console.log(props);
  return (
    <form onSubmit = {props.searchRecipe} className="input-group mb-3 justify-content-end">
      <div className="w-50">
        <input
          type="text"
          className="form-control"
          id="ex3"
          placeholder="search for recipe"
          name="recipeName"
        />
      </div>
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
    </form>
  );
};

export default Search;
