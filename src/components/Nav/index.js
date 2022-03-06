import React, { useEffect } from "react";

const Nav = (props) => {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
      <nav className="nav-header">
        <h1 className="nav-title">
          <a href="/">Monika Kothari</a>
        </h1>
        
          {categories.map((category) => (
            <p
              className={`mx-1 ${currentCategory.name === category.name &&
                "navActive"}`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {category.name}
              </span>
            </p>
          ))}
      </nav>
  );
}

export default Nav;
