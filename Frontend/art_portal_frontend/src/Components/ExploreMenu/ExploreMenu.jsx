import React from "react";
import "./ExploreMenu.css";
import { article_list } from "../../assets/assets";
const ExploreMenu = (category, setCategory) => {
  return (
    <div className="explore-articles" id="explore-articles">
      <h1>Explore our menu</h1>
      <p className="explore-articles-text">
        Choose from diverse artworks a featuring delectable array of decorative
        items that beautify your home and surroundings
      </p>
      <div className="explore-articles-list">
        {article_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.article_name ? "All" : item.article_name
                )
              }
              key={index}
              className="explore-articles-list-item"
            >
              <img
                className={category === item.article_name ? "active" : ""}
                src={item.article_image}
                alt=""
              />
              <p>{item.article_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
