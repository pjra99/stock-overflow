import "./assets/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import Portfolio from "./Screens/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
