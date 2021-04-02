import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import Home from "./pages/Home"; 
import HomeTwo from "./pages/HomeTwo"; 
import Service from "./pages/Service";   
import SingleService from "./pages/SingleService";   
import SingleGallery from "./pages/SingleGallery";   
import SingleBlog from "./pages/SingleBlog";   
import Blog from "./pages/Blog"; 
import Gallery from "./pages/Gallery"; 
import About from "./pages/About"; 
import Team from "./pages/Team"; 
import Contact from "./pages/Contact"; 
import NotFound from "./pages/NotFound"; 


function App() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home"}`}
            component={Home}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-two"}`}
            component={HomeTwo}
          />  
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />  
          <Route exact path={`${process.env.PUBLIC_URL + '/service'}`} 
          component={Service}
          /> 
          <Route path={`${process.env.PUBLIC_URL + '/service/:serviceID'}`} 
          component={SingleService}
          />
          <Route path={`${process.env.PUBLIC_URL + '/gallery/:galleryID'}`} 
          component={SingleGallery}
          />
          <Route path={`${process.env.PUBLIC_URL + '/blog/:blogID'}`} 
          component={SingleBlog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/gallery"}`}
            component={Gallery}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
