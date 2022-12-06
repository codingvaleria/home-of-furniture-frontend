import { useNavigate } from "react-router-dom";
import "../styles/Products.css";

export default function Item({ products, user, search }) {
  const navigate = useNavigate();

  return (
    <div>
      {search(products).map((product) => (
        <div className="product" key={product.id}>
          <div className="itemx">
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
            <h3>{product.name}</h3>
            <p className="product-price">
              Kshs. <span>{product.price}</span>
            </p>
            <p>{product.description.substring(0, 40)}...</p>
            {user && (
              <div className="action-price">
                <button
                  className="bt1"
                  onClick={() => navigate(`/${product.id}`)}
                >
                  Update Item
                </button>
                <button className="bt2">Delete Item</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
