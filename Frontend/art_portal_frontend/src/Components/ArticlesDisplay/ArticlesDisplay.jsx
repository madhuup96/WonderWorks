import React from "react";
import "./ArticlesDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import Articles from "../Articles/Articles";

const ArticlesDisplay = ({ category }) => {
  const { articles_list } = useContext(StoreContext);

  return (
    <div className="articles-display" id="articles-display">
      <h2>Top items near you</h2>
      <div className="articles-display-list">
        {articles_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <Articles
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ArticlesDisplay;
