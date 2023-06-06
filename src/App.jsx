import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Route from "./components/NavBar/Route";
import HomePage from "./components/Homepage/HomePage";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar isTopOfPage={isTopOfPage} />

      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/offer">
        <div className="pt-32">Offer abadnbaednahbe</div>
      </Route>
      <Route path="/about-me">
        <div className="pt-32">About Me abadnbaednahbe</div>
      </Route>
      <Route path="/portfolio">
        <div className="pt-32">Portfolio abadnbaednahbe</div>
      </Route>
      <Route path="/faq">
        <div className="pt-32">Faq abadnbaednahbe</div>
      </Route>
      <Route path="/contact">
        <div className="pt-32">Contact abadnbaednahbe</div>
      </Route>
    </div>
  );
}

export default App;
