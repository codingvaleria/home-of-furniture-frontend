import React from "react";

export default function Form({
  handleFormSubmit,
  handleInputChange,
  formData,
  id,
}) {
  return (
    <div className="Product">
      <form id="add-form" onSubmit={handleFormSubmit}>
        <h1>{id ? "Edit Product Form" : "Add Product Form"}</h1>

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
          <input type="submit" value={id ? "Update Product" : "Add Product"} />
        </div>
      </form>
    </div>
  );
}
