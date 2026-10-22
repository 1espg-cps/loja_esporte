import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />

      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App
