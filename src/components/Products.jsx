import React from "react";
import "../styles/Products.css";

export default function Products({ setShowNavBar }) {
  setShowNavBar(true);

  return (
    <div className="products-container">
      <div className="product">
        <div className="itemx">
          <img
            src="https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/6/0/6033_1.jpg"
            alt=""
          />
          <h3>Edwin Aire Leather Recliner Sofa Set</h3>
          <p>
            Kshs. <span>259995</span>
          </p>
          <p>Loreum suscipit nemo debitis ipsum numquam minima.</p>
          <div className="action-price">
            <button className="bt1">Update Item</button>
            <button className="bt2">Delete Item</button>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="itemx">
          <img
            src="https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/6/0/6033_1.jpg"
            alt=""
          />
          <h3>Edwin Aire Leather Recliner Sofa Set</h3>
          <p>
            Kshs. <span>259995</span>
          </p>
          <p>Loreum suscipit nemo debitis ipsum numquam minima.</p>
          <div className="action-price">
            <button className="bt1">Update Item</button>
            <button className="bt2">Delete Item</button>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="itemx">
          <img
            src="https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/6/0/6033_1.jpg"
            alt=""
          />
          <h3>Edwin Aire Leather Recliner Sofa Set</h3>
          <p>
            Kshs. <span>259995</span>
          </p>
          <p>Loreum suscipit nemo debitis ipsum numquam minima.</p>
          <div className="action-price">
            <button className="bt1">Update Item</button>
            <button className="bt2">Delete Item</button>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="itemx">
          <img
            src="https://elegance.co.ke/pub/media/catalog/product/cache/b7c3a6b28eb4432f8bd6c315e4890c68/6/0/6033_1.jpg"
            alt=""
          />
          <h3>Edwin Aire Leather Recliner Sofa Set</h3>
          <p>
            Kshs. <span>259995</span>
          </p>
          <p>Loreum suscipit nemo debitis ipsum numquam minima.</p>
          <div className="action-price">
            <button className="bt1">Update Item</button>
            <button className="bt2">Delete Item</button>
          </div>
        </div>
      </div>
    </div>
  );
}
