import React from "react";
import "./styles/AddProduct.css";

export default function AddProduct() {
  return (
    <div>
      <div className="Product">
        <div className="AddProduct">
          <form>
            <h1>CREATE PRODUCT FORM</h1>
            <div className="input-control">
              <label>Title</label>
              <input type="text" required name="title" />
            </div>
            <div className="input-control">
              <label>Price</label>
              <input type="number" name="price" required />
            </div>
            <div className="input-control">
              <label>Description</label>
              <textarea cols="" rows="5" name="description" required></textarea>
            </div>
            <div className="input-control">
              <label>Image URL</label>
              <input type="text" name="image" required />
            </div>
            <div className="input-control">
              <button type="submit">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
