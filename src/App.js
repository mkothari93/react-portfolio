import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    { name: "About", description: "Learn more about me!" },
    { name: "Projects", description: "A glimpse of some of my work" },
    { name: "Contact", description: "Contact me to connect" },
    { name: "Resume", description: "Click here to download my resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    if (currentCategory.name === "About") {
      return <About currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "Projects") {
      return <Projects currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "Contact") {
      return <Contact currentCategory={currentCategory} />;
    }
    if (currentCategory.name === "Resume") {
      return <Resume currentCategory={currentCategory} />;
    }
  };

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
