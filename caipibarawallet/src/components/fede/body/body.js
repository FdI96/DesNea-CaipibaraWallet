import "./body.css"
import React, { useEffect, useState } from 'react';
import ShowRecords from "../Records/showRecords/showRecords";
import axiosRequest from '../../../request'
import RegisterRecords from "../Records/registerRecords/registerRecords";
import DeleteRecords from "../Records/deleteRecords/deleteRecords";
import EditRecords from "../Records/editRecords/editRecords";
// add this in a dinamyc way
const urlServer = 'http://localhost:3030/'

function Body() {
  const [component, setComponent] = useState('records')

  const [records, setRecords] = useState([])

  const fetchRecords = () => {
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
  }

  useEffect(() => fetchRecords(), []);

  const switchRenders = () => {
    switch (component) {
      case 'records':
        return <ShowRecords records={records}/>
      case 'register':
        return <RegisterRecords />
      case 'delete':
        return <DeleteRecords />
      case 'edit':
        return <EditRecords />
      default:
        return <ShowRecords records={records}/>
    }
  }

  return (
    <div id='body-fede'>
      <div className='operation-box'>
        <div className="operations-and-records">
          <div className='select-operations'>
            <h2 className='register-operation-title'>Select an operation:</h2>
            <button className="operation-btn" onClick={() => setComponent('register')}>Register a new operation.</button>
            <button className="operation-btn" onClick={() => setComponent('edit')}>Edit an operation.</button>
            <button className="operation-btn" onClick={() => setComponent('delete')}>Delete an operation.</button>
            <button className="operation-btn" onClick={() => setComponent('records')}> Display the latest records.</button>
          </div>
          <div id='display-box'>
            {switchRenders()}
          </div>
          
        </div>
        
      </div>
        
    </div>
    );
}
  
  export default Body;
  