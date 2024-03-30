import React, { useContext } from "react";
import "./Articles.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const Articles = ({ id, name, price, description, image }) => {
  const { cartArticles, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="articles">
      <div className="articles-image-container">
        <img className="articles-image" src={image} alt="" />
        {!cartArticles[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add}
            alt=""
          />
        ) : (
          <div className="articles-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove}
              alt=""
            />
            <p>{cartArticles[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.plus} alt="" />
          </div>
        )}
      </div>

      <div className="articles-info">
        <div className="articles-name-rating">
          <p>{name}</p>
          <img className="star-rating" src={assets.rating_stars} />
        </div>
        <p className="articles-description">{description}</p>
        <p className="articles-price">Rs {price}</p>
      </div>
    </div>
  );
};

export default Articles;
