import React, { useEffect } from "react";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header>
      <nav>
        <h1>
          <a href="/">Monika Kothari</a>
        </h1>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
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
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
