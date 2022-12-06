import React, { useState } from "react";
import "../styles/AddProduct.css";

export default function AddProduct() {
  // Handling change in form
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  // Handling change in form
  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // Handling form Submit
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`products/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((item) => console.log(item));
  }
  return (
    <div>
      <div className="Product">
        <form onSubmit={handleFormSubmit}>
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
                onChange={handleInputChange}
                value={formData.name}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Image</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="image"
                placeholder="Image url..."
                onChange={handleInputChange}
                value={formData.image}
              />
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
                onChange={handleInputChange}
                value={formData.price}
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
                onChange={handleInputChange}
                value={formData.description}
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
