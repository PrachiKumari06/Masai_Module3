import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./component/ProductList";

export default function App() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Pen", price: 10 },
    { id: 2, name: "Book", price: 50 },
    { id: 3, name: "Bag", price: 500 },
  ];

  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
