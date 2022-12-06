import React, { useEffect, useState } from "react";
import "../styles/Products.css";
import Loading from "./Loading";
import Item from "./Item";
import Filter from "./Filter";

export default function Products({ user }) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilter(data);
        setIsLoading(false);
      });
  }, []);

  console.log(products);
  const filterProducts = (category) => {
    const updatedList = products.filter(
      (product) => product.category === category
    );
    setFilter(updatedList);
  };

  // search state
  const [query, setQuery] = useState("");

  const keys = ["name", "description"];

  function search(data) {
    return data.filter((data) =>
      keys.some((key) => data[key].toLowerCase().includes(query.toLowerCase()))
    );
  }

  const infomations = filter.filter((data) =>
    keys.some((key) => data[key].toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="products-container">
      <Filter
        input={setQuery}
        setFilter={setFilter}
        filterProducts={filterProducts}
        products={products}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Item products={filter} user={user} search={search} />
      )}
    </div>
  );
}
