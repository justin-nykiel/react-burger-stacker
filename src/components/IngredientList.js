import React, {useState} from "react";
import Ingredients from './Ingredients'

const IngredientList = ({ingredients, addIngredient}) => {
  
  const arrIng = ingredients.map((ing, id) => <Ingredients key={id} ingredient={ing} addIngredient={addIngredient}/>)

  return(
    <ul>
      {arrIng}
    </ul>
  )
};

export default IngredientList;
