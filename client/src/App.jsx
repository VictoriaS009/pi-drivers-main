import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import FormCreateDriver from "./views/FormCreateDriver/FormCreateDriver";
import CardsAPI from "./views/CardsAPI/CardsAPI";
import CardsDB from "./views/CardsDB/CardsDB";
import CardsXTeams from "./views/CardsXTeams/CarsXTeams";

function App() {
  const location = useLocation();

  // Estilos en línea
  const appStyle = {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f6f8fa',
    width: '100%',
    backgroundImage: 'url("https://res.cloudinary.com/dhjlbf6xs/image/upload/v1706723086/pokemon/SL-072519-21910-21_lgb2qa.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div style={appStyle}>
      {location.pathname !== "/" && <Nav />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/home/cardsapi" element={<CardsAPI />} />
        <Route path="/home/cardsdb" element={<CardsDB />} />
        <Route path="/home/cardsxteams" element={<CardsXTeams />} />
        <Route path="/formCreateDriver" element={<FormCreateDriver />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
