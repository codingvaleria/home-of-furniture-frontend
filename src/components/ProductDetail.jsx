import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import "../styles/Product.css";
import { BASE_URL } from "../config";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    fetch(`${BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      });
  };

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Product = () => {
    return (
      <div className="single-item">
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div className="info">
          <h1>{product.name}</h1>
          <h2>{product.category}</h2>
          <h3>Kshs. {product.price}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <Product />}</div>;
}
