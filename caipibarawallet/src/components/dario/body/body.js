import { useEffect, useState } from "react"
import "./body.css"

function Body(props) {

    const [operations, setOperation] = useState([])
    const [balance, setBalance] = useState(0)
    const [modal, setModal] = useState(false)

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

    const addOperation = () => {
        var data = {
            id: 7,
            concept: "algo",
            amount: "algo",
            date: "20200225",
            type: "income"
        }
        fetch('http://localhost:3004/operations/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
            
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    const editOperation = () => {
        console.log('edit operation');
    }

    const deleteOperation = () => {
        console.log('delete operation');
    }


    return (
        <div id="dariobody">
            
            <div>
                <div className="balance">Balance: {balance} dollars</div>
                <h4>List of Operations</h4>
                <div style={{textAlign: 'left', marginBottom: '10px'}}>
                    <button style={{height: '30px'}}>Add Operation</button>
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
                                <tr>
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
        </div> 
    )
}

export default Body
