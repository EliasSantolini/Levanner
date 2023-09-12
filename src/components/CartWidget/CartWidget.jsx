import "../CartWidget/CartWidget.css";

const CartWidget = () => {
  return (
    <>
      <div>
        <div>
          <img
            src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-noir.png"
            alt="CartWidget"
            className="Cart"
          />
        </div>
        <div className="numero-de-carrito">
          <h4>1</h4>
        </div>
      </div>
    </>
  );
};

export default CartWidget;
