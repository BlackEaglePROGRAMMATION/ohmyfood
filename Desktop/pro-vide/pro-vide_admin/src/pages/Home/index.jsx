import { useState } from "react";

import Banner from "./../../components/Banner"
import Menu from "../../components/Menu";

import Produits from "./../../sections/produits";
import Category from "./../../sections/category";
import Services from "./../../sections/services";
import Account from "./../../sections/account";
import Actuality from "./../../sections/actuality";

import './style.css'

function Home() {
    const [sectActif, setSectActif] = useState()

    const token = sessionStorage.getItem("token");
    if (!token || token === "") {
        return
    }

    const section = [
        <Produits />,
        <Category />,
        <Services />,
        <Account />,
        <Actuality />
    ];

    const colorOnglet = (n) => {
        const onglets = document.querySelectorAll(".menu .onglet");

        for (let element of onglets) {
            element.children[0].style.color = "#444442"; 
            element.children[1].style.color = "#444442";
        }

        onglets[n].children[0].style.color = "#d41217";
        onglets[n].children[1].style.color = "#d41217";
    }

    const showSection = () => {
        if (sectActif || sectActif === 0) {
            const menu = document.querySelector(".menu");
            menu.style.height = "unset";
            colorOnglet(sectActif);
            
            return (section[sectActif]);
        }
    }

    return (
        <div>
            <Banner />
            <Menu setSectActif={setSectActif} />
            {showSection()}
        </div>
    )
}

export default Home;