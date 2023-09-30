import './style.css'

function Delete({ id, title }) {

    return (
        <div className='modal modal-delete'>
            <h2>{title}</h2>
        </div>
    )
}

export default Delete;