import React from "react";

const Category = ({ match }) => {
  console.log(match.params.categoryId);
  return (
    <div className="category">
      <h2>CATEGORY</h2>
    </div>
  );
};

export default Category;
