import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/AddProduct.css";

export default function EditProduct() {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(params.id);
  const navigate = useNavigate();

  // Handling change in form
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
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
  // Updating details
  useEffect(() => {
    if (id) {
      fetch(`/products/${id}`)
        .then((resp) => resp.json())
        .then((item) => {
          setFormData(item);
        });
    }
  }, [id]);

  // Handling form Submit
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`/products/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          navigate(`/products/${id}`);
        }
      })
      .then((item) => console.log(item));
  }

  return (
    <div>
      <div className="Product">
        <form id="add-form" onSubmit={handleFormSubmit}>
          <h1>Edit Product Form</h1>

          <div className="input-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name of the product..."
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>
          <div className="input-control">
            <label htmlFor="name">Category</label>
            <input
              type="text"
              name="category"
              placeholder="Choose category e.g Living-Room, Dining-Room, Kitchen, Bedroom..."
              onChange={handleInputChange}
              value={formData.category}
            />
          </div>
          <div className="input-control">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              placeholder="Image url..."
              onChange={handleInputChange}
              value={formData.image}
            />
          </div>

          <div className="input-control">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              placeholder="product price e.g 420"
              onChange={handleInputChange}
              value={formData.price}
            />
          </div>

          <div className="input-control">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              placeholder="Write something about the product.."
              onChange={handleInputChange}
              value={formData.description}
            ></textarea>
          </div>
          <div className="row">
            <input type="submit" value="Update Product" />
          </div>
        </form>
      </div>
    </div>
  );
}
