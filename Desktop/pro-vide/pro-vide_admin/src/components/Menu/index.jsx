import Onglet from "../Onglet";

import menus from "./../../data/menus"

import "./style.css"

function Menu({ setSectActif }) {    
    return (
        <div className="menu">
            {menus.map((element, idx) => (
                <Onglet 
                    key={idx} 
                    id={idx} 
                    name={element.name} 
                    logo={element.logo} 
                    setSectActif={setSectActif} 
                />
            ))}
        </div>
    )
}

export default Menu;