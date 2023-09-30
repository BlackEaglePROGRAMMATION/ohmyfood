import { useState } from 'react';

import ModalSelector from '../../components/ModalSelector';
import btnChooseModal from "./../../data/btn-choose-modal";

import Create from '../../modals/Create';
import Update from '../../modals/Update';
import Delete from '../../modals/Delete';

import './style.css'

function Category() {
    const [modals, setModal] = useState();

    const section = [
        <Create 
            id="category"
            title="Ajouter catégorie"            
        />,
        <Update 
            id="category"
            title="Modifier catégorie"            
        />,
        <Delete 
            id="category"
            title="Supprimer catégorie"
        />
    ]

    return (
        <div className='sect-category'>
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

export default Category;