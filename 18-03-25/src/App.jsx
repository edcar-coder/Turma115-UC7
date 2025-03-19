import React  from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import BandDetalhes from "./pages/BandDetalhes/BandDetalhes";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/band/:id" element={<BandDetalhes/>} />
    </Routes>
    </BrowserRouter>
  );
}
    
export default App;
