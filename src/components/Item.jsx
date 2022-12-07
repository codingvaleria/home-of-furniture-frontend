import { useNavigate } from "react-router-dom";
import "../styles/Products.css";

export default function Item({ products, user, search, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div>
      {search(products).map((product) => (
        <div className="product" key={product.id}>
          <div className="itemx">
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            ></div>
            <h3
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              {product.name}
            </h3>
            <p className="product-price">
              Kshs. <span>{product.price}</span>
            </p>
            <p>{product.description.substring(0, 40)}...</p>
            {user && (
              <div className="action-price">
                <button className="bt1">
                  <a href={`products/edit/${product.id}`}>Update Item</a>
                </button>
                <button className="bt2" onClick={() => handleDelete(product)}>
                  Delete Item
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
