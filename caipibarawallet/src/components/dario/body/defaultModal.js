import './defaultModal.css'

function DefaultModal(props) {
    if(!props.showModal)
    {
        return null
    }
    return (
        <div className="modal">
            <div className='modal-content'>
                <div className="modal-header">
                    <h4 className=' modal-title'>{props.title}</h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer"> 
                    <button onClick={props.onClose}>
                        Cancelar
                    </button>
                    &nbsp;
                    <button onClick={props.action}>
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DefaultModal