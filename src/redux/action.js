export const addToCart = (bookDetail) => {
  return {
    type: "ADDTOCART",
    payload: bookDetail,
  };
};

export const incrementQuantity = (id) => {
  console.log(id, "id");
  return {
    type: "INCREMENTQUANTITY",
    payload: id,
  };
};

export const decrementQuantity = (id) => {
  return {
    type: "DECREMENTQUANTITY",
    payload: id,
  };
};

export const removeCart = (id) => {
  return {
    type: "REMOVECART",
    payload: id,
  };
};

export const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};
