import React from "react";
import "../styles/AddProduct.css";

export default function AddProduct() {
  return (
    <div>
      <div className="Product">
        <form>
          <h1>Add Product Form</h1>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="name"
                placeholder="Name of the product..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Image</label>
            </div>
            <div className="col-75">
              <input type="text" name="image" placeholder="Image url..." />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Price</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                name="price"
                placeholder="product price e.g 420"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Description</label>
            </div>
            <div className="col-75">
              <textarea
                name="description"
                placeholder="Write something about the product.."
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
