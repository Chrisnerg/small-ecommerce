import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
        <HomePage products={products} />
    </div>
  );
}
