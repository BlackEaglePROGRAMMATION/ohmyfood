import './style.css'

function ModalSelector({ id, content, setModal }) {

    return (
        <div 
            onClick={() => setModal(id)}
            className={"btn-choose-modal colorBtn-" + content.color}
        >
            <i className={content.logo}></i>
            <p>{content.type}</p>
        </div>
    )
}

export default ModalSelector;