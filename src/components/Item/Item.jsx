import { Link } from "react";



const Item = ( name, img, price, id  ) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={img} alt={name} style={{ width: 200 }} />
      <p>$ {price}</p>
      <Link to={`/item/${id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item; 
