import React from "react";
import "../styles/Products.css";

export default function Item({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="itemx">
            <img
              src="https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/6/0/6033_1.jpg"
              alt=""
            />
            <h3>{product.name}</h3>
            <p>
              Kshs. <span>{product.price}</span>
            </p>
            <p>{product.description.substring(0, 50)}...</p>
            <div className="action-price">
              <button className="bt1">Update Item</button>
              <button className="bt2">Delete Item</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
