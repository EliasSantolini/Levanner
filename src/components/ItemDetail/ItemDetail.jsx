
const ItemDetail = ({ name, img, price, category, desc, stock } ) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{category}</p>
      <img src={img} alt={name} style={{ width: 200 }} />
      <p>$ {price}</p>
      <p>Descripcion: {desc}</p>
      <p> stock={stock} </p>
    </div>
  );
};


export default ItemDetail;
