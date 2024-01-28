
import { Routes, Route, useLocation } from "react-router-dom";
//import LandingPage from "./components/LandingPage/LandingPage";
//import Cards from "./components/Cards/Cards";
//import Nav from "./components/Nav/Nav";
//import Detail from "./components/Detail/Detail";
//import FormCreateDriver from "./components/FormCreateDriver/FormCreateDriver";
//import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<FormCreateDriver />} />
      </Routes>
    </div>
  );
}

export default App;


<div className="App">
{pathname !== "/login" && <Nav onSearch={onSearch} />}

