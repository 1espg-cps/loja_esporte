import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App
