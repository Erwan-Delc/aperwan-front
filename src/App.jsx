// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact" // 👈 Importe la page contact

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> {/* 👈 Ajoute cette ligne */}
      </Routes>
    </Router>
  )
}

export default App
