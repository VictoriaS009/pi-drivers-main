import { Link } from "react-router-dom";

const Landing = () => {
  // Estilos en línea
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
    width: '100%',
  };

  const welcomeStyle = {
    display: 'flex',
    textAlign: 'center',
    marginBottom: '20px',
    flexDirection: 'column',
    gap: '10px',
  };


  const titleContainer = {
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '10px'

  }
  const driverStyle = {
    color: '#fff' // GitHub blue
  };

  const messageStyle = {
    fontSize: '1.2em',
    color: '#fff' // GitHub gray
  };

  const buttonSTARTStyle = {
    backgroundColor: '#28a745', // GitHub green
    color: '#ffffff',
    padding: '10px 20px',
    fontSize: '1.2em',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const buttonSTARTHover = {
    backgroundColor: '#218838' // Darker green on hover
  };

  const F1Style = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px'
  };

  const iframeStyle = {
    width: '100%',
    maxWidth: '560px',
    height: '315px',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={welcomeStyle}>
        <div style={titleContainer}>

        <h1 style={driverStyle}>DRIVERS</h1>
        <h4 style={messageStyle}>To view information about drivers click on the <strong>START</strong> button</h4>
        </div>
        <Link to={"/home"}>
          <button style={buttonSTARTStyle} onMouseOver={e => e.currentTarget.style.backgroundColor = buttonSTARTHover.backgroundColor} onMouseOut={e => e.currentTarget.style.backgroundColor = buttonSTARTStyle.backgroundColor}>START</button>
        </Link>
      </div>
      <div style={F1Style}>
        <iframe style={iframeStyle} src="https://www.youtube.com/embed/YK16URa7X10?si=5KJAlSjthXXCNN-c&amp;controls=0" title="F1 1970 Dutch GP Zandvoort Holland" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe style={iframeStyle} src="https://www.youtube.com/embed/vkdz5XtV_c4?si=itlbFOxpqilfYYuI&amp;controls=0" title="F1 1970 Round 8 German GP Highlights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe style={iframeStyle} src="https://www.youtube.com/embed/DCQEg7VF3KI?si=695wx5-gmqev97Ov&amp;controls=0" title="F1 1974 Round 9 British GP Highlights" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <iframe style={iframeStyle} src="https://www.youtube.com/embed/jzoXc7MYJFg?si=hnlUoUzxN01OBRPN&amp;controls=0" title="F1 1990 Hungary - Riccardo Patrese OnBoard" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Landing;
