import { useState  } from 'react';

import './style.css'

function TextAndImage({ preview, setPreview }) {  
    const [imgSrc, setImgSrc] = useState(null);

    const showPreview = (urlCover) => {
        setPreview(urlCover);
    
        const reader = new FileReader();
        reader.onloadend = () => {
            setImgSrc(reader.result);
        }
    
        if (urlCover) {
            reader.readAsDataURL(urlCover);
        }
    }

    const fileChange = (e) => {
        const selectedFile = e.target.files[0];
        e.target.value = null;

        showPreview(selectedFile);
    };
    

    return (
        <div className='container-text-image'>
            <textarea placeholder='Texte'></textarea>
            <div className="inputCover">
                {preview && <i className='fas fa-xmark' onClick={() => { setPreview(null); setImgSrc(null) }}></i>}
                {!preview && <i className='fas fa-image'></i>}
                {!preview && <label>+ Image de couverture</label>}
                {preview && <img src={imgSrc} alt='preview-cover' />}
                <input 
                    type="file" 
                    onChange={fileChange}
                />
            </div>
        </div>
    )
}

export default TextAndImage;