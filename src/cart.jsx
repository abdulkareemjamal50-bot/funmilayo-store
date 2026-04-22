import React, { useState } from "react";
import { FaRegHandshake } from "react-icons/fa";

const products = [
  // Beverages
  { id: 1, name: "Milo", price: 2500, category: "Beverages", qty: 1 },
  { id: 2, name: "Bournvita", price: 2600, category: "Beverages", qty: 1 },
  { id: 3, name: "Ovaltine", price: 2400, category: "Beverages", qty: 1 },
//   { id: 13, name: "Hot choco", price:3000, category: "Beverages", qty: 1},

  // Dairy
  { id: 4, name: "Peak Milk", price: 1200, category: "Dairy", qty: 1 },
  { id: 5, name: "Dano Milk", price: 1100, category: "Dairy", qty: 1 },
  { id: 6, name: "Three Crowns Milk", price: 1300, category: "Dairy", qty: 1 },

  // Snacks
  { id: 7, name: "Gala", price: 300, category: "Snacks", qty: 1 },
  { id: 8, name: "Chin Chin", price: 500, category: "Snacks", qty: 1 },
  { id: 9, name: "Plantain Chips", price: 600, category: "Snacks", qty: 1 },

  // Household
  { id: 10, name: "Dettol", price: 1500, category: "Household", qty: 1 },
  { id: 11, name: "Harpic", price: 1800, category: "Household", qty: 1 },
  { id: 12, name: "Morning Fresh", price: 900, category: "Household", qty: 1 }
];

function Cart() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");

  // Add product
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product }]);
    }
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((item) => item.category === filter);

  return (
    <div style={{ padding: "40px" }}>
      {/* Title */}
      <h1 className="tit" style={{ textAlign: "center", paddingTop:"70px" }}>
        Funmilayo Store Shopping Section
      </h1>
      <div>
    <h3 className="che">Review the items in your cart before checkout. You can update quantities, remove products, or continue shopping anytime</h3>
  </div>

      {/* Category Filters */}
      <div style={{ textAlign: "center", marginBottom: "25px",paddingTop:"30px" }}>
        {["All", "Beverages", "Dairy", "Snacks", "Household"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                margin: "5px",
                padding: "8px 15px",
                borderRadius: "6px",
                border: "none",
                background:
                  filter === category ? "lightseagreen" : "#ddd",
                color: filter === category ? "white" : "black"
              }}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              padding: "20px",
              borderRadius: "10px",
              background: "#f8f9fa",
              boxShadow:
                "0px 3px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h4>{product.name}</h4>

            <p>{product.category}</p>

            <p>₦{product.price}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                background: "lightseagreen",
                color: "white",
                padding: "8px 15px",
                border: "none",
                borderRadius: "5px"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={{ marginTop: "40px" }}>
        <h3>Your Cart</h3>

        {cart.length === 0 ? (
          <p>No items added yet</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ddd"
              }}
            >
              {item.name}

              <div>
                <button
                  onClick={() =>
                    decreaseQty(item.id)
                  }
                >
                  -
                </button>

                {item.qty}

                <button
                  onClick={() =>
                    increaseQty(item.id)
                  }
                >
                  +
                </button>

                ₦{item.price * item.qty}

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  style={{
                    marginLeft: "10px",
                    background: "red",
                    color: "white",
                    border: "none"
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <h4 style={{ marginTop: "20px" }}>
          Total: ₦{totalPrice}
        </h4>
      </div>
      <div className="fle">
        <FaRegHandshake className="shake"/>  
      <h4 className="cart">Thank you for shopping with Funmilayo Store. We are committed to providing you with the best grocery shopping experience</h4>
       </div>
    </div>
  );
}

export default Cart;