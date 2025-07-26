import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Reservation } from "./pages/Reservation";
// import Peliculas from "./pages/Peliculas";
// import Cines from "./pages/Cines";
// import Promociones from "./pages/Promociones";
// import Alimentos from "./pages/Alimentos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservas" element={<Reservation />} />
        {/* <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/cines" element={<Cines />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/alimentos" element={<Alimentos />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
