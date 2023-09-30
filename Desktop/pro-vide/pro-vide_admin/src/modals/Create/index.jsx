import { useState  } from 'react';

import Identification from '../../components/Identification';
import TextAndImage from '../../components/TextAndImage';
import Lists from '../../components/Lists';

import './style.css'

function Create({ id, title }) {
    const [preview, setPreview] = useState(null);

    const isModalProduit = id === "produits";

    return (
        <div className='modal modal-create'>
            <h2>{title}</h2>            
            <Identification id={id} />
            <TextAndImage preview={preview} setPreview={setPreview} />
            {isModalProduit && <Lists />}
        </div>
    )
}

export default Create;