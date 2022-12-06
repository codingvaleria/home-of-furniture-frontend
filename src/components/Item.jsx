import { useNavigate } from "react-router-dom";
import "../styles/Products.css";

export default function Item({ products }) {
  const navigate = useNavigate();

  return (
    <div>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="itemx">
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <p>
              Kshs. <span>{product.price}</span>
            </p>
            <p>{product.description.substring(0, 40)}...</p>
            <div className="action-price">
              <button
                className="bt1"
                onClick={() => navigate(`/${product.id}`)}
              >
                Update Item
              </button>
              <button className="bt2">Delete Item</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
