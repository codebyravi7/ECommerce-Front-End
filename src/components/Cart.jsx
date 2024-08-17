import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, decreaseQuantity, addToCart, removeFromCart, clearCart } =
    useContext(AppContext);
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let qty = 0;
    let price = 0;
    /*the below code is different from tutor at 6:52 */
    if (cart?.items) {
      cart?.items?.forEach((item) => {
        qty += item?.qty;
        price += item?.price;
      });
      setPrice(price);
      setQty(qty);
    }
  }, [cart]);
  return (
    <div className="bg-slate-200 content-wrapper  h-full min-w-screen max-w-screen min-h-screen p-2 text-black">
      {" "}
      {qty > 0 ? (
        <div className="my-5 text-center">
          <span className=" bg-gray-300 p-2 px-3 mx-1">Total Qty : {qty} </span>
          <span className="bg-gray-300 p-2 px-3 mx-1">
            Total Price : {price}{" "}
          </span>
        </div>
      ) : (
        <div className="text-center">
          <button
            className="text-2xl btn btn-warning m-2 p-1"
            onClick={() => navigate("/")}
          >
            Coninue Shopping...
          </button>
        </div>
      )}
      {cart?.items?.map((product) => (
        <div
          key={product?._id}
          className="bg-white flex m-8 mx-16 p-2 justify-between items-center rounded-lg text-gray-500"
        >
          <div className="cart-img">
            <img
              src={product?.imgSrc}
              alt={product?.title}
              className="w-32  rounded-lg"
            />
          </div>

          <div className="cart-info  ">
            <h2 className="text-2xl font-medium">{product?.title}</h2>
            <h3>{product?.price}</h3>
            <h3>Qty: {product?.qty}</h3>
          </div>
          <div className="action">
            <div className="btn bg-gray-200 hover-effect  mx-3">
              <span
                className="material-symbols-outlined"
                onClick={() => decreaseQuantity(product?.productId, 1)}
              >
                do_not_disturb_on
              </span>
            </div>
            <div
              className="btn bg-gray-200 hover-effect  mx-3"
              onClick={() =>
                addToCart(
                  product?.productId,
                  product?.title,
                  product?.price / product?.qty,
                  1,
                  product?.imgSrc
                )
              }
            >
              <span className="material-symbols-outlined">add_circle</span>
            </div>
            <div
              className="btn bg-gray-200  hover-effect  mx-3"
              onClick={() => removeFromCart(product?.productId)}
            >
              <span className="material-symbols-outlined">delete</span>
            </div>
          </div>
        </div>
      ))}
      {qty > 0 ? (
        <div className="text-center">
          <div
            className="btn bg-gray-50 hover-effect mx-3"
            onClick={() => navigate("/shipping")}
          >
            Checkout
          </div>
          <div className="btn bg-gray-50 hover-effect mx-3" onClick={clearCart}>
            Clear Cart
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl ">Your Cart is Empty!!</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
