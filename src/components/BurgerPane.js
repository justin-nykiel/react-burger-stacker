import React from "react";
import BurgerStack from './BurgerStack'

const BurgerPane = ({burgIng, clearBurger}) => {

  return (
    <>
      <BurgerStack burgIng={burgIng}/>
      <button onClick={clearBurger}>Clear</button>
    </>
  )
};

export default BurgerPane;
