import Home from "./Home";
import Navigation from "./Navigation";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Contact from "./Contact";
import Project from "./Project";
import Footer from "./Footer";

const Routing = () => {
    return(
        <div>
            <Router>
            <Navigation />
                <Routes>
                    <Route exact path="/"  element={<Home />} />
                    <Route path="/project"  element={<Project />} />
                    <Route path="/contact"  element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

export default Routing;