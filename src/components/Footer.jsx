import React from "react";
import logoLinkedin from '../assets/linkedin-logo.png';
import logoPhone from '../assets/phone-logo.png';
import logoTwitter from '../assets/twitter-logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-5" style={{ backgroundColor: "#00c8c8", position: "fixed", left: "0", bottom: "0", width: "100%", opacity: 0.7}}>
      <div className="max-w-7xl mx-auto text-center">
        
        <div style={{ marginBottom: "15px", display: "flex", justifyContent:"flex-end", marginTop: "20px", marginRight:"10px"}}>
          <a href="https://twitter.com/NuweIo" target="_blank" rel="noopener noreferrer">
            <img src={logoTwitter} alt="Twitter URL" style={{ width: "30px", height: "30px", marginRight: "10px", verticalAlign: "middle" }} />
          </a>
          <a href="https://www.linkedin.com/company/nuweio/" target="_blank" rel="noopener noreferrer">
            <img src={logoLinkedin} alt="LinkedIn URL" style={{ width: "30px", height: "30px", marginRight: "10px", verticalAlign: "middle" }} />
          </a>
          <a href="tel:+1234567890">
            <img src={logoPhone} alt="Phone example" style={{ width: "30px", height: "30px", marginRight: "10px", verticalAlign: "middle" }} />
          </a>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ color: "black", fontSize: "14px", marginBottom: "10px", justifyContent: "center", alignItems: "center" }}>© 2023 FemCoders. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

