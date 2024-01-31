import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = (onSearch) => {
  const location = useLocation();

  // Estilos en línea
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e1e4e8',
    flexDirection: 'row',
    width: '100%'
  };

  const buttonStyle = {
    backgroundColor: '#0366d6',
    color: '#ffffff',
    padding: '10px 20px',
    marginLeft: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.3s'
  };

  const hoverStyle = {
    backgroundColor: '#004080'
  };

  const landingButtonStyle = { ...buttonStyle, backgroundColor: '#28a745' };
  const homeButtonStyle = { ...buttonStyle, backgroundColor: '#0366d6' };
  const cardsapiButtonStyle = { ...buttonStyle, backgroundColor: '#6f42c1' };
  const cardsdbButtonStyle = { ...buttonStyle, backgroundColor: '#28a745' };
  const cardsXTeamsButtonStyle = { ...buttonStyle, backgroundColor: '#d73a49' };
  const formButtonStyle = { ...buttonStyle, backgroundColor: '#0366d6' };

  return (
    <div>
      <header style={containerStyle}>
        {location.pathname === "/home" && <SearchBar onSearch={onSearch} />}
        <Link to={"/"}>
          <button style={landingButtonStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = landingButtonStyle.backgroundColor}>Landing</button>
        </Link>
        <Link to={"/home"}>
          <button style={homeButtonStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = homeButtonStyle.backgroundColor}>Home</button>
        </Link>
        <Link to={"/home/cardsapi"}>
          <button style={cardsapiButtonStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = cardsapiButtonStyle.backgroundColor}>Cards API</button>
        </Link>
        <Link to={"/home/cardsdb"}>
          <button style={cardsdbButtonStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = cardsdbButtonStyle.backgroundColor}>Cards DB</button>
        </Link>
        <Link to={"/home/cardsxteams"}>
          <button style={cardsXTeamsButtonStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = cardsXTeamsButtonStyle.backgroundColor}>Cards X Team</button>
        </Link>
        <Link to={"/formCreateDriver"}>
          <button style={formButtonStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = formButtonStyle.backgroundColor}>Create</button>
        </Link>
      </header>
    </div>
  );
};

export default Nav;
