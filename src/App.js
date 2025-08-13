import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import pages
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./pages/Home";
import { MovieDetail } from './pages/MovieDetail';
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
        <Route path="/movie-detail" element={<MovieDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
