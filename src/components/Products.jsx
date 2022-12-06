import React, { useEffect, useState } from "react";
import "../styles/Products.css";
import Loading from "./Loading";
import Item from "./Item";

export default function Products({ user }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  console.log(products);

  return (
    <div className="products-container">
      {isLoading ? <Loading /> : <Item products={products} user={user} />}
    </div>
  );
}
