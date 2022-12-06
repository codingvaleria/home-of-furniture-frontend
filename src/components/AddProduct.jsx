import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../styles/AddProduct.css";
import Form from "./Form";

export default function AddProduct() {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(params.id);
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

    fetch(`products/${id ? +id : ""}`, {
      method: id ? "PATCH" : "POST",
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
      <Form
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
        id={id}
      />
    </div>
  );
}
