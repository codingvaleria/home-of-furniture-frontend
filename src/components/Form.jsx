import React from "react";

export default function Form({
  handleFormSubmit,
  handleInputChange,
  formData,
  id,
}) {
  return (
    <div className="Product">
      <form onSubmit={handleFormSubmit}>
        <h1>{id ? "Edit Product Form" : "Add Product Form"}</h1>
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
          <input type="submit" value={id ? "Update Product" : "Add Product"} />
        </div>
      </form>
    </div>
  );
}
