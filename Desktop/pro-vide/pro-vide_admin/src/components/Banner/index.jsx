import logo_proVide from "./../../assets/logo-pro-vide.png"
import "./style.css"

function Banner() {
    return (
        <div className="banner">
            <a 
                href="https://www.pro-vide.eu"
                className="logo_entreprise"
                target="blank"
            >
                <img src={logo_proVide} alt="link" />
                <h2>Pro-Vide<br /><span>Créateur de solution</span></h2>
            </a>

            <h3>ESPACE<br /><span>ADMINISTRATIF</span></h3>
            
            <i className="fas fa-gear"></i>
        </div>
    )
}

export default Banner;