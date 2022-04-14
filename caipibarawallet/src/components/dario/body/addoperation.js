import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addoperation.css"
import { updateBalance, fetchOperationById } from '../reducer/darioReducer'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function AddOperation(props)
{
    let navigate = useNavigate();

    const { operationId } = useParams();
    console.log(operationId);
    const dispatch = useDispatch()

    const [id, setId] = useState(null)
    const [concept, setConcept] = useState(null)
    const [amount, setAmount] = useState(null)
    const [date, setDate] = useState(null)
    const [type, setType] = useState(null)

    var operation = useSelector(state => fetchOperationById(state, operationId)) 
    useEffect(function() {
        if(operation) {

            setId(operation.id);
            setConcept(operation.concept);
            setAmount(operation.amount);
            setDate(operation.date);
            setType(operation.type);

        }
    }, [])
    

    const handleId = (ev) => {
        setId(ev.target.value);
    }

    const handleConcept = (ev) => {
        setConcept(ev.target.value);
    }

    const handleAmount = (ev) => {
        setAmount(ev.target.value);    
    }   

    const handleDate = (ev) => {
        setDate(ev.target.value);
    }

    const handleType = (ev) => {
        setType(ev.target.value);
    }

    const updateOperation = () => {
        var data = {
            id: id,
            concept: concept,
            amount: amount,
            date: date,
            type: type
        }

        fetch('http://localhost:3004/operations/'+ id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            console.log(response);
            //dispatch(updateBalance(parseInt(amount) - props.operation.amount))
            navigate('/dario/home', {replace: true})

        }).catch((error) => {
            console.log(error);
        })
    }

    const registerOperation = () => {
        var data = {
            id: id,
            concept: concept,
            amount: amount,
            date: date,
            type: type
        }

        fetch('http://localhost:3004/operations/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
            
        }).then((response) => {
            console.log(response);
            navigate('/dario/home', {replace: true})

            //dispatch(updateBalance(parseInt(amount)))
            
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <div id="dario-addoperation" className="flex justify-center">

            <div class="block p-6 rounded-lg bg-white max-w-sm">
                <h4 style={{fontWeight: 'bold'}}>
                    {operationId ? 'EDIT OPERATION' : 'ADD OPERATION'}
                </h4>

                <table className="operationForm">
                    <tr>
                        <td><label>Id</label></td>
                        <td><input type="text" onChange={handleId} value={ id } disabled = {operationId ? true : false} /></td>
                    </tr>
                    <tr>
                        <td><label>Concept</label></td>
                        <td><input type="text" onChange={handleConcept} value = {concept} /></td>
                    </tr>
                    <tr>
                        <td><label>Amount</label></td>
                        <td><input type="text" onChange={handleAmount} value = { amount } /></td>
                    </tr>
                    <tr>
                        <td><label>Date</label></td>
                        <td><input type="text" onChange={handleDate} value = { date } /></td>
                    </tr>
                    <tr>
                        <td><label>Type</label></td>
                        <td>
                            <select onChange={handleType} value= { type } disabled = {operationId ? true : false}>
                                <option value="" disabled selected>Select your option</option>
                                <option value="income">Income</option>
                                <option value="outcome">Outcome</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <button className="form" type="button" >
                                <Link to='/dario/home'>
                                    Cancel
                                </Link>
                            </button>
                            &nbsp;
                            <button className="form" type="button"onClick={() => {
                                if(operationId)
                                {
                                    updateOperation();
                                }
                                else{
                                    registerOperation();
                                }
                            }}>Submit</button>
                        </td>
                    </tr>
                </table>
                
            
            </div>
            
        </div>
    )
}

export default AddOperation