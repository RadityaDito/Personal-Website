import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavigationBar,
  HeroSection,
  Hobbies,
  Footer,
  AboutMe,
  Contact,
  Skills,
  Routing,
} from "./Component/index";
import "./App.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="*"
          element={
            <div className="App">
              <HeroSection />
              <AboutMe />
              <Hobbies />
              <Skills />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/routing" element={<Routing />} />
      </Routes>
    </Router>
  );
}
export default App;
