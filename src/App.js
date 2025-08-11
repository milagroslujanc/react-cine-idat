import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages
import { Home } from "./pages/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Reservation } from "./pages/Reservation";
import { ReservationSummary } from "./pages/ReservationSummary";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservas" element={<Reservation />} />
        <Route path="/peliculas" element={<Home />} />
        <Route path="/resumenReserva" element={<ReservationSummary />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
