import "./body.css"
import React, { useEffect, useState } from 'react';
import ShowRecords from "../showRecords/showRecords";
import axiosRequest from '../../../request'
const urlServer = 'http://localhost:3030/'

function Body() {
  const [records, setRecords] = useState({})

  useEffect(() => {
    const url = urlServer + 'operations'
    const option = {
      method: 'GET',
      body:{},
      headers:''
    }
    const response = axiosRequest(url, option)
                      .then( response => {
                        setRecords(response.data)

                        console.log(records, response)
                      } )
                      .catch(error => console.log(error))
    return response
  }, []);

  return (
    <div id='body-fede'>
      <div className='operation-box'>
        <div className="operations-and-records">
          <div className='select-operations'>
            <h2 className='register-operation-title'>Select an operation:</h2>
            <button className="operation-btn">Register a new operation.</button>
            <button className="operation-btn">Edit an operation.</button>
            <button className="operation-btn">Delete an operation.</button>
            <button className="operation-btn"> Display all the records.</button>
          </div>
          <ShowRecords records={records}/>
        </div>
      </div>
        
    </div>
    );
}
  
  export default Body;
  