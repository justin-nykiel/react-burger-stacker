import React, {useState} from "react";

const Ingredients = ({ingredient, addIngredient}) => {

  return(
    <>
      <li>{ingredient.name}</li>
    </>
    )
};

export default Ingredients;
