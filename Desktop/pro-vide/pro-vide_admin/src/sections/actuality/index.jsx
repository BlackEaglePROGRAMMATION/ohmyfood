import { useState } from 'react';

import ModalSelector from '../../components/ModalSelector';
import btnChooseModal from "./../../data/btn-choose-modal";

import Create from '../../modals/Create';
import Update from '../../modals/Update';
import Delete from '../../modals/Delete';

import './style.css'

function Actuality() {
    const [modals, setModal] = useState();

    const section = [
        <Create 
            id="actuality"
            title="Ajouter actualité"            
        />,
        <Update 
            id="actuality"
            title="Modifier actualité"            
        />,
        <Delete 
            id="actuality"
            title="Supprimer actualité"
        />
    ]

    return (
        <div className='sect-actuality'>
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

export default Actuality;