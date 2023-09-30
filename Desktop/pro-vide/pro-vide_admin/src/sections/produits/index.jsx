import { useState } from 'react';

import ModalSelector from '../../components/ModalSelector';
import btnChooseModal from "./../../data/btn-choose-modal";

import Create from '../../modals/Create';
import Update from '../../modals/Update';
import Delete from '../../modals/Delete';

import './style.css'

function Produits() {
    const [modals, setModal] = useState();

    const section = [
        <Create 
            id="produits"
            title="Ajouter produit"            
        />,
        <Update 
            id="produits"
            title="Modifier produit"            
        />,
        <Delete 
            id="produits"
            title="Supprimer produit"
        />
    ]

    return (
        <div className='sect-produits'>
            <div className="menu-choose-modal">
                {btnChooseModal.map((element, idx) => (
                    <ModalSelector
                        key={element.type + idx}
                        id={idx}
                        content={element}
                        setModal={setModal}
                    />)
                )}
            </div>
            {section[modals]}
        </div>
    )
}

export default Produits;