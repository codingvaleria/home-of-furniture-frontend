import React from "react";
import "./styles/Product.css";

export default function Product() {
  return (
    <div className="item">
      <div className="product-item">
        <div className="product-details">
          <img
            src="https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/6/0/6033_1.jpg"
            alt=""
          />
        </div>
        <div className="product-details">
          <h1>Edwin Aire Leather Recliner Sofa Set</h1>
          <h2>Category</h2>
          <h2>Price</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
            fugiat consequuntur culpa tenetur, magnam dolorum repudiandae quae
            quisquam dolore ab, ut delectus tempore quis iste aliquam officia
            molestiae doloremque laboriosam.
          </p>
          <div className="action-btns">
            <button>Add To Cart</button>
            <button>Go To Cart</button>
          </div>
        </div>
      </div>
      <div className="priviledges">
        <button className="edit-btn">Edit Item</button>
        <button className="delete-btn">Delete Item</button>
      </div>
    </div>
  );
}
