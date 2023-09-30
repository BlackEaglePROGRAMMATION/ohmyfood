import { useState } from 'react';

import './style.css'

function List({ title, holder }) {
    const [lengthList, updateLength] = useState(["a", "a", "a", "a", "a"]);

    const addInput = () => {
        if (lengthList.length <= 25) {
            updateLength([...lengthList, "a"]);
        }
    }

    const supInput = () => {
        if (lengthList.length >= 0) {
            updateLength(lengthList.slice(0, -1));
        }
    }

    return (
        <div className='list'>
            <h3>{title}</h3>
            <ul>
                {lengthList.map((_, index) => (
                    <li key={index}>
                        <input type="text" placeholder={holder} />
                    </li>
                ))}
            </ul>
            <div className="controller">
                <i className="fas fa-plus" onClick={addInput}></i>
                <i className="fas fa-minus" onClick={supInput}></i>
            </div>
        </div>
    );

}

export default List;