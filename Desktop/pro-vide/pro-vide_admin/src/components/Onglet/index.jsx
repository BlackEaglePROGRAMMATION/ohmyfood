import "./style.css"

function Onglet({ id, name, logo, setSectActif }) {
    const chooseSection = () => {
        setSectActif(id);
    }

    return (
        <div 
            className="onglet"
            onClick={chooseSection}
        >
            <i className={logo}></i>
            <h4>{name}</h4>
        </div>
    )
}

export default Onglet;