const initialState = {
  bookDetails: [
    {
      id: "1",
      image:
        "https://rukminim1.flixcart.com/image/612/612/khxqt8w0-0/book/x/o/v/attitude-is-everything-change-your-attitude-change-your-life-original-imafxtvesfbk8rje.jpeg?q=70",
      title: "Book1",
      description:
        "This is a success manual that gives readers a step by step plan for taking control of their lives and unleashing potential.",
      price: "$10",
      stock: "100",
      quantity: 1,
    },
    {
      id: "2",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550771909l/18373942._SX318_.jpg",
      title: "Book2",
      description:
        "Ponniyin Selvan is a historical fiction novel by Kalki, written in Tamil. weekly editions of Kalki started from 1950.",
      price: "$20",
      stock: "100",
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/One_Arranged_Murder.jpg/220px-One_Arranged_Murder.jpg",
      title: "Book3",
      description:
        "One Arranged Murder is the ninth novel and the twelfth book overall written by the Indian author Chetan Bhagat.",
      price: "$30",
      stock: "100",
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588286863l/634583._SY475_.jpg",
      title: "Book4",
      description:
        "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam",
      price: "$40",
      stock: "100",
      quantity: 1,
    },
  ],
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      console.log("add", action.payload);
      // alert("item added to cart")
      // if(state.cart.includes(action.payload)==true)
      return { ...state, cart: [...state.cart, action.payload] };

    case "INCREMENTQUANTITY":
      let tempCart = [...state.cart];
      tempCart[action.payload].quantity = tempCart[action.payload].quantity + 1;
      return { ...state, cart: tempCart };

    case "DECREMENTQUANTITY":
      let temp1Cart = [...state.cart];
      temp1Cart[action.payload].quantity =
        temp1Cart[action.payload].quantity - 1;
      return { ...state, cart: temp1Cart };

    case "REMOVECART":
      console.log(action.payload, "payload");
      let temp2Cart = state.cart.filter((c) => c.id !== action.payload);
      let tempBook = [...state.bookDetails];
      let index = tempBook.findIndex((books) => books.id == action.payload);
      tempBook[index].quantity = 1;
      return { ...state, cart: temp2Cart, bookDetails: tempBook };

    case "CHECKOUT":
      let books = [...state.bookDetails];
      state.cart.map((carts) => {
        let index = books.findIndex((book) => book.id === carts.id);
        books[index].stock = books[index].stock - books[index].quantity;
        books[index].quantity = 1;
      });
      return {
        ...state,
        cart: [],
        bookDetails: books,
      };

    default:
      return { ...state };
  }
};

export default reducer;
