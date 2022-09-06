import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { FiShoppingCart } from "react-icons/fi";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  checkout,
  removeCart,
} from "./redux/action";
import { ToastContainer, toast } from "react-toastify";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

function Cart(props) {
  console.log(props);
  const notify = () => {
    toast("Book added to cart successfully!");
  };

  return (
    <div className="book_page">
      <h2 className="text-center">BOOKS FOR SALE</h2>
      <Link to="/" className="home_link ms-5 me-5">
        Home
      </Link>
      <Link to="/cart" className="home_link ms-5 me-5">
        Cart
      </Link>

      <h4 className="d-flex justify-content-end me-5">
        <Badge badgeContent={props.cart.length} color="primary">
          <FiShoppingCart color="action" size={30} />
        </Badge>
      </h4>
      <div className="container">
        <div className="row">
          {props.cart.map((cartDetail, i) => (
            <div className="col-12">
              <div className="card mt-2 book_card text-center">
                <img className="cart_image" src={cartDetail.image} />
                <div className="card-body">
                  <h5 className="card-title text-center">{cartDetail.title}</h5>
                  <p className="card-text mb-0">Price : {cartDetail.price}</p>
                  <div>
                    {" "}
                    Quantity :{" "}
                    <button
                      className="me-1 mb-2 mt-2"
                      onClick={() => props.decrementQuantity(i)}
                      disabled={cartDetail.quantity <= 1}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <span>{cartDetail.quantity}</span>
                    <button
                      className="ms-1"
                      onClick={() => props.incrementQuantity(i)}
                    >
                      {" "}
                      +{" "}
                    </button>
                    <button
                      className=" text-primary cursor-pointer"
                      onClick={() => props.removeCart(cartDetail.id)}
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {props.cart.length >= 1 && (
            <div>
              <button
                type="button"
                className="btn btn-primary mb-3 d-flex justify-content-center button_book"
                // onClick={() => {props.addToCart(cartDetail)
                //     toast("Book added to cart successfully!")
                // }}
                onClick={() => {
                  props.checkout();
                  toast("Order placed successfully!");
                }}
              >
                Checkout
              </button>
              <ToastContainer />
            </div>
          )}
          {!props.cart.length >= 1 && (
            <div className="text-center fw-bold">No items in cart</div>
          )}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state, "state");

  return {
    bookDetails: state.bookDetails,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (book) => dispatch(addToCart(book)),
    incrementQuantity: (id) => dispatch(incrementQuantity(id)),
    decrementQuantity: (id) => dispatch(decrementQuantity(id)),
    checkout: () => dispatch(checkout()),
    removeCart: (id) => dispatch(removeCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
