import React from "react";

const Header: React.FC = (props) => {
  const { name, image_url, avg_score } = props.attributes.data.attributes;

  const total = props.attributes.data.relationships.reviews.data.length;
  return (
    <div className="wrapper">
      <div>
        <p>name: {name}</p>
        <img src={image_url} style={{ width: "100px" }} />
        <p>image_url: {image_url}</p>
        <p>avg_score: {avg_score}</p>
        <p>total reviews: {total}</p>
      </div>
    </div>
  );
};

export default Header;
