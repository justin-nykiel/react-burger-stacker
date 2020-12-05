import React from "react";
import Ingredients from './Ingredients'

const BurgerStack = ({burgIng}) => {

    const arrIng = burgIng.map((ing, id) => <Ingredients key={id} ingredient={ing} />)

  return (
    <>
        <ul>
            {arrIng}
        </ul>
    </>
  )
};

export default BurgerStack;