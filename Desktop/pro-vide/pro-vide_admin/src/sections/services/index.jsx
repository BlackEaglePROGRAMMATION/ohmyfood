import { useState } from 'react';

import ModalSelector from '../../components/ModalSelector';
import btnChooseModal from "./../../data/btn-choose-modal";

import Create from '../../modals/Create';
import Update from '../../modals/Update';
import Delete from '../../modals/Delete';

import './style.css'

function Services() {
    const [modals, setModal] = useState();

    const section = [
        <Create 
            id="services"
            title="Ajouter service"            
        />,
        <Update 
            id="services"
            title="Modifier service"            
        />,
        <Delete 
            id="services"
            title="Supprimer service"
        />
    ]

    return (
        <div className='sect-services'>
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

export default Services;