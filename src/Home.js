import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { FiShoppingCart } from "react-icons/fi";
import { addToCart } from "./redux/action";
import { ToastContainer, toast } from "react-toastify";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

function Home(props) {
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
          <Link to="/cart" className="home_link">
            <FiShoppingCart color="action" size={30} />
          </Link>
        </Badge>
      </h4>
      <div className="container">
        <div className="row">
          {props.bookDetails.map((bookDetail) => (
            <div className="col-3">
              <div className="card mt-5 mb-5 text-center">
                <img className="image_book" src={bookDetail.image} />
                <div className="card-body">
                  <h5 className="card-title text-center">{bookDetail.title}</h5>
                  <p className="card-text">{bookDetail.description}</p>
                  <p className="card-text mb-0">Price : {bookDetail.price}</p>
                  <p className="card-text stock_color">
                    Stock : {bookDetail.stock}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary button_book position-relative"
                    onClick={() => {
                      if (props.cart.includes(bookDetail)) {
                        toast("Book already in cart!");
                      } else {
                        props.addToCart(bookDetail);
                        toast("Book added to cart successfully!");
                      }
                    }}
                  >
                    Add to Cart
                  </button>
                  <ToastContainer position="bottom-right" />
                </div>
              </div>
            </div>
          ))}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
