import React from "react";
import BurgerLayer from './BurgerLayer'

const BurgerStack = ({burgIng}) => {

    const arrIng = burgIng.map((ing, id) => <BurgerLayer key={id} ingredient={ing} />)

  return (
    <>
        <ul>
            {arrIng}
        </ul>
    </>
  )
};

export default BurgerStack;