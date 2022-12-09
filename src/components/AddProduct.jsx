import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import "../styles/AddProduct.css";
import Form from "./Form";
import { BASE_URL } from "../config";

export default function AddProduct() {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(params.id);
  const [errors, setErrors] = useState([]);
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

  // Handling form Submit
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`${BASE_URL}/products/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((product) => console.log(product));
          alert("Product added successfully");
          navigate("/");
        } else {
          res.json().then((errorData) => setErrors(errorData.errors));
        }
      })
      .then((item) => console.log(item));
  }

  return (
    <div>
      <Form
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
        id={id}
        errors={errors}
      />
    </div>
  );
}
