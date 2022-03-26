import { useEffect, useState } from "react"
import "./body.css"
import AddOperation from "./addoperation"
import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, setBalance } from "../reducer/darioReducer"

function Body(props) {

    const dispatch = useDispatch()

    const [refresh, setRefresh] = useState(false)
    const [operations, setOperations] = useState([])
    const [addOperation, setAddOperation] = useState(false)
    const [operation, setOperation] = useState(null)

    const balance = useSelector((state) => state.dario.balance)
    const counter = useSelector((state) => state.dario.counter)


    useEffect(() => {
        fetch('http://localhost:3004/operations', {
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((result) => {
            setOperations(result);
            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    }, [refresh]);

    useEffect(() => {
        fetch('http://localhost:3004/operations', {
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((result) => {
            setOperations(result);

            var balance = 0;
            result.forEach(element => {
                balance += parseInt(element.amount) * (element.type === 'income' ? 1 : -1);
            });

            dispatch(setBalance(balance));

            console.log(result);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    

    const editOperation = () => {
        console.log('edit operation');
    }

    const deleteOperation = () => {
        console.log('delete operation');
    }

    const volverDeAddOperation = () => {
        setAddOperation(!addOperation);
        setRefresh(!refresh);
    }
    return (
        <div id="dariobody">
            {addOperation === true ?
                <div>
                    <AddOperation volverDeAddOperation = {volverDeAddOperation} operation = {operation} />
                </div>
            :
            <div>
                <div className="balance">BALANCE: {balance}</div>
                <h4 className="font-bold">LIST OF OPERATIONS</h4>
                <div style={{textAlign: 'left', marginBottom: '10px'}}>
                    <button onClick = {() => {
                        setOperation(null);
                        setAddOperation(true);
                    }} className="actions">Add Operation</button>
                   
                </div>
                <table>
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
                        {operations.map((card, index) => {
                            return (
                                <tr key={index}>
                                    <td>{card.id}</td>
                                    <td>{card.concept}</td>
                                    <td>{card.amount}</td>
                                    <td>{card.date}</td>
                                    <td>{card.type}</td>
                                    <td className="actions">
                                        <button onClick={ () => {
                                            setOperation(card);
                                            setAddOperation(true);
                                        }} className="actions">Edit Operation</button> &nbsp;
                                        <button className="actions">Delete Operation</button>
                                    </td>
                            </tr>
                            )
                            
                        })}
                    </tbody>
                </table>
            </div>
            }
        </div> 
    )
}

export default Body
