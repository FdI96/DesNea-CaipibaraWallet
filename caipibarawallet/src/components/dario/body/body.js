import { useEffect, useState } from "react"
import "./body.css"
import AddOperation from "./addoperation"

function Body(props) {
    const [refresh, setRefresh] = useState(false)
    const [operations, setOperation] = useState([])
    const [balance, setBalance] = useState(0)
    const [addOperation, setAddOperation] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3004/operations', {
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((result) => {
            setOperation(result);

            var balance = 0;
            result.forEach(element => {
                balance += parseInt(element.amount) * (element.type === 'income' ? 1 : -1);
            });
            setBalance(balance);

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
            setOperation(result);

            var balance = 0;
            result.forEach(element => {
                balance += parseInt(element.amount) * (element.type === 'income' ? 1 : -1);
            });
            setBalance(balance);

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
                    <AddOperation volverDeAddOperation = {volverDeAddOperation} />
                </div>
            :
            <div>
                <div className="balance">Balance: {balance} dollars</div>
                <h4>List of Operations</h4>
                <div style={{textAlign: 'left', marginBottom: '10px'}}>
                    <button style={{height: '30px'}} onClick = {() => {
                        setAddOperation(true);
                    }}>Add Operation</button>
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
                                    <td className="actions"><button style={{height: '30px'}}>Edit Operation</button> <button style={{height: '30px'}}>Delete Operation</button></td>
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
