import { useState } from "react";

const ItemCount = ( initial = 1, stock, onAdd ) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  
  initial;

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  /* /*   const reset = () => {
    setCount(0); 
  }; */
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      {/*     <button onClick={reset}>reset</button> */}
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
