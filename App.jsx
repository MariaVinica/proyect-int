import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import EquipmentDetail from "./Routes/Detail"; 
import Contact from "./Routes/Contact";
import Favorites from "./Routes/Favorites";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <ContextProvider>
        <div className={`App ${theme}`}>
          <Navbar toggleTheme={toggleTheme} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/equipment/:id" exact component={EquipmentDetail} />
            <Route path="/contact" component={Contact} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  );
}

export default App;







