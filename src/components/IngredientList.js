import React, {useState} from "react";
import Ingredients from './Ingredients'

const IngredientList = ({ingredients, addIngredient}) => {
  
  const arrIng = ingredients.map((ing, id) => {
    return(
      <>
      <Ingredients key={id} ingredient={ing} addIngredient={addIngredient}/>       
      <button onClick={() => addIngredient(ing)}>Add Ingredient to Burger</button>
      </>
    )
    })

  return(
    <ul>
      {arrIng}
    </ul>
  )
};

export default IngredientList;
