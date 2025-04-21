import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";
import Home3 from "./Components/Home3";
import Navbar from "./Components/Navbar"; // Assuming Navbar is imported
import Services from "./Components/Services";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/virraj" element={<Home3 />} />
          <Route path="/services"element={<Services />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;