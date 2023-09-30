import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./style.css"

function Login() {
    const navigate = useNavigate();
    const [isVisible, setVisibility] = useState(false);
    
    const changeVisibility = () => {
        setVisibility(isVisible === true ? false : true)
    }

    const connection = async () => {
        const id = document.querySelector(".login .input_id").value;
        const pw = document.querySelector(".login .input_password").value;

        if (id !== "" && pw !== "") {
            const connected = await postConnection(id, pw);

            if (connected.token) {
                sessionStorage.setItem("token", connected.token);
                navigate("/Home");
                return
            }            
        }
    }

    async function postConnection(user, password) {
        try {
            const req = await fetch("https://api.pro-vide.eu/admin/login", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: user,
                    password: password
                })
            });
            const res = await req.json();
            return res;

        } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
        }
    }

    return (
        <div className="login">
            <h1>ESPACE<br /><span>ADMINISTRATIF</span></h1>
            
            <div className="div_input-login">
                <label>Identifiant :</label>
                <input
                    type="text" 
                    className="input_id"
                />
            </div>

            <div className="div_input-login">
                <label>Mot de passe :</label>
                
                <div className="div_input-password">
                    <input                     
                        className="input_password"
                        type={isVisible === false ? "password" : "text"} 
                    />

                    <i 
                        onClick={() => {changeVisibility()}} 
                        className="fas fa-eye-slash"
                    >                        
                    </i>
                </div>
            </div>
        
            <button 
                className="btn_connection"
                onClick={() => connection()}
            >
                Connexion
            </button>
        </div>
    )
}

export default Login;