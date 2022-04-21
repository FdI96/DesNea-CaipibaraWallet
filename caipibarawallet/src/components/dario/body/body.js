import { useCallback, useEffect, useState } from "react"
import "./body.css"
import { Link } from 'react-router-dom'
import DefaultModal from "./defaultModal"
import { useSelector, useDispatch } from 'react-redux'
import { updateBalance, setBalance, fetchOperations } from "../reducer/darioReducer"

function Body(props) {

    const dispatch = useDispatch()

    const [refresh, setRefresh] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [operation, setOperation] = useState(null)
    const [concept, setConcept] = useState('')

    const balance = useSelector((state) => state.dario.balance)
    const operations = useSelector((state) => state.dario.operations)
    const status = useSelector((state) => state.dario.status)


    useEffect(() => {
        dispatch(fetchOperations())
    }, [refresh]);

    useEffect(() => {
        dispatch(fetchOperations())
    }, []);

   

    const deleteOperation = () => {
        fetch('http://localhost:3004/operations/' + operation.id, {
            method: 'DELETE',
            body: null,
            headers:{
                "Content-Type": "application/ json"
            }
        }).then((response) => {
            console.log(response);
            //dispatch(updateBalance(operation.amount * (-1)))
            setShowModal(false);
            setRefresh(!refresh);
        }).catch((error) => {
            console.log(error);
        })
        
    }

    let rows;
    if(status === 'loading')
    {
        rows = <span>loading</span>
    }
    else if (status === 'failed')
    {
        rows = <span>Failed</span>
    }
    else if(status === 'succeeded')
    {
        rows = operations.map((card, index) => {
            return (
                <tr key={index}>
                    <td>{card.id}</td>
                    <td>{card.concept}</td>
                    <td>{card.amount}</td>
                    <td>{card.date}</td>
                    <td>{card.type}</td>
                    <td className="actions">
                        <Link to={`/dario/home/operation/edit/${card.id}`} className="link">
                            <button>Edit Operation</button>
                        </Link>
                        &nbsp;
                        <button className="actions" onClick={() => {
                            setOperation(card);
                            setConcept(card.concept);
                            setShowModal(true);
                        }}>Delete Operation</button>
                    </td>
                </tr>
            )
        })
        
    }

    return (
        <div id="bodytable">
            
            <div>
                <div className="balance">BALANCE: {balance}</div>
                <h4 className="font-bold">LIST OF OPERATIONS</h4>
                <div style={{textAlign: 'left', marginBottom: '10px'}}>
                    <Link to={"/dario/home/operation/add"}>
                        <button>Add Operation</button>
                    </Link>
                    
                
                </div>
                <table id="operations">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Concept</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th className="actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
            
            <DefaultModal showModal = {showModal} onClose={() => {setShowModal(false)}}
                title = "DELETE OPERATION" action = {deleteOperation}>
                <p>¿ Do you wish to eliminate the operation  <b>{concept}</b> ?</p>
            </DefaultModal>
        </div> 
    )
}

export default Body
