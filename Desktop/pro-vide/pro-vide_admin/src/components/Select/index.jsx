import './style.css'

function Select({ id, data, category, parentId, setParentId, subCategory, setSubCategory }) {
    if (!data || data.length === 0) {
        return null;
    }

    const addParent = (e) => {
        if (parentId.length === 0) {
            setParentId([e.target.value]);
            const prevChild = category.filter((d) => d.parentId === e.target.value);
            setSubCategory([prevChild]);
            return;
        }

        const prevChild = category.filter((d) => d.parentId === e.target.value);        
        const updatedSubCategory = [...subCategory];
        
        updatedSubCategory[id] = prevChild;
        updatedSubCategory.splice(id + 1);

        setSubCategory(updatedSubCategory);

        const updatedParentId = [...parentId];
        
        updatedParentId[id] = e.target.value;
        updatedParentId.splice(id + 1);

        setParentId(updatedParentId);
    };

    return (
        <select 
            className='select'
            onChange={(e) => addParent(e)}
        >
            <option value="null">Aucun parent sélectionner</option>

            {data.map((element, idx) => (
                <option key={idx} value={element._id}>{element.name}</option>
            ))}
        </select>
    )
}

export default Select;