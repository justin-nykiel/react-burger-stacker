import React, {useState} from "react";

const Ingredients = ({ingredient, addIngredient}) => {

  return(
    <>
      <li>{ingredient.name}</li>
      <button onClick={() => addIngredient(ingredient)}>Add Ingredient to Burger</button>
    </>
    )
};

export default Ingredients;
