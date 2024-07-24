import Signup from "./components/Signup";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="log-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
