import { useEffect, useState } from "react";
import "./addoperation.css"

function AddOperation(props)
{
    const [id, setId] = useState(null)
    const [concept, setConcept] = useState(null)
    const [amount, setAmount] = useState(null)
    const [date, setDate] = useState(null)
    const [type, setType] = useState(null)

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
            props.volverDeAddOperation();
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <div id="dario-addoperation" className="flex justify-center">

            <div class="block p-6 rounded-lg bg-white max-w-sm">
                <h4 style={{fontWeight: 'bold'}}>
                    Add Operation
                </h4>
                <form>
                    <div class="form-group">
                    <label for="exampleInputId1" class="self-start form-label inline-block mb-2 text-gray-700">Id</label>
                    <input type="email" onChange={handleId} class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputId1"
                        aria-describedby="emailHelp" placeholder="Enter Id" />
                    
                    </div>
                    <div class="form-group">
                    <label for="exampleInputConcept1" class="form-label inline-block mb-2 text-gray-700">Concept</label>
                    <input type="text" onChange={handleConcept} class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputConcept1"
                        placeholder="Enter Concept" />
                    </div>
                    <div class="form-group">
                    <label for="exampleInputAmount1" class="form-label inline-block mb-2 text-gray-700">Amount</label>
                    <input type="text" onChange={handleAmount} class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputAmount1"
                        placeholder="Enter Amount" />
                    </div>
                    <div class="form-group">
                    <label for="exampleInputDate1" class="form-label inline-block mb-2 text-gray-700">Date</label>
                    <input type="text" onChange={handleDate} class="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputDate1"
                        placeholder="Enter Date" />
                    </div>

                    <div class="form-group mb-6">
                        <label for="exampleInputType1" class="form-label inline-block mb-2 text-gray-700">Type</label>

                        <select onChange={handleType} class="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputType1" aria-label="Default select example">
                            <option value="" disabled selected>Select your option</option>
                            <option value="income">Income</option>
                            <option value="outcome">Outcome</option>
                        </select>
                    </div>
                    
                    <button type="button" class="
                        inline-block 
                        px-6 
                        py-2.5 
                        bg-gray-200 
                        text-gray-700
                        font-medium 
                        text-xs 
                        leading-tight 
                        uppercase 
                        rounded 
                        shadow-md 
                        hover:bg-gray-900 
                        hover:shadow-lg 
                        focus:bg-gray-900 
                        focus:shadow-lg 
                        focus:outline-none 
                        focus:ring-0 
                        active:bg-gray-900 
                        active:shadow-lg 
                        transition 
                        duration-150 
                        ease-in-out" onClick={props.volverDeAddOperation}>Cancel</button> 
                    <button type="button" class="
                        px-6
                        py-2.5
                        bg-gray-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out" onClick={registerOperation}>Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddOperation