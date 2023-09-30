import React, { useState, useEffect } from 'react';

import Select from '../../components/Select';

import './style.css'

function Identification({ id }) {
    const [parentId, setParentId] = useState([]);
    const [category, setCategory] = useState(null);    
    const [subCategory, setSubCategory] = useState(null);
    const [allCategory, setAllCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id === 'category'
            || id === 'produits') {
                const req = await fetch(`https://api.pro-vide.eu/category`);
                const res = await req.json();
                setAllCategory(res);

                let filteredData = res.filter((d) => !d.parentId);
                setCategory(filteredData);
            }
        };

        fetchData();
    }, [id]);

    let holder = id === `actuality` ? `Titre de l'actualité` : `Nom ${id}`;

    return (
        <div className="identification">
            {category && 
                <Select 
                    id={0}
                    
                    data={category} 
                    category={allCategory}

                    parentId={parentId} 
                    setParentId={setParentId}
                    subCategory={subCategory}
                    setSubCategory={setSubCategory}
                />                
            }     
            {subCategory && subCategory.map((element, idx) => (                
                <Select 
                    key={idx}
                    id={idx + 1}
                    
                    data={element}
                    category={allCategory}

                    parentId={parentId}
                    setParentId={setParentId}
                    subCategory={subCategory}
                    setSubCategory={setSubCategory}
                />
            ))}  
            <input type="text" className='inputName' placeholder={holder} />   
            {id === "produits" && 
                <select>
                    <option value="null">Type de produit</option>
                    <option value="neuf">Produit neuf</option>
                    <option value="occasion">Produit occasion</option>
                </select>
            }
        </div>
    )
}

export default Identification;