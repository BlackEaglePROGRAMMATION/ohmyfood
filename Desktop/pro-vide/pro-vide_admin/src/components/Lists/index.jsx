import List from '../../components/List';

import './style.css'

function Lists() {      
    return (
        <div className='container-list'>
            <List title="Liste avantage" holder="Élément avantageux" />
            <List title="Liste caractéristiques" holder="Élément caractéristique" />
            <List title="Fichier à télécharger" holder="Lien du fichier" />
        </div>
    )
}

export default Lists;