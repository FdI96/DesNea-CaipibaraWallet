import { useEffect, useState } from "react"
import "./body.css"

function Body(props) {

    const [operations, setOperation] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/operations', {
            method: 'GET'
        }).then((response) => {
            return response.json();
        }).then((result) => {
            setOperation(result);
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
            <h4>List of Operations</h4>
            <table>
                <thead>
                    <tr>
                        <th>Concept</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {operations.map((card, index) => {
                        return (
                            <tr>
                            <td>{card.concept}</td>
                            <td>{card.amount}</td>
                            <td>{card.date}</td>
                            <td>{card.type}</td>
                            <td>&nbsp;</td>
                        </tr>
                        )
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Body
