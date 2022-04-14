import "./body.css"
import React, { useEffect, useReducer, useState } from 'react';
import ShowRecords from "../Records/showRecords/showRecords";
import axiosRequest from '../../../request'
import RegisterRecords from "../Records/registerRecords/registerRecords";
import DeleteRecords from "../Records/deleteRecords/deleteRecords";
import EditRecords from "../Records/editRecords/editRecords";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectStatus, selectAllRecords, fetchRecords } from "../Records/reducer/fedeReducer";
// add this in a dinamyc way
const urlServer = 'http://localhost:3030/'

function Body() {

  const dispatch = useDispatch()
  const [component, setComponent] = useState('records')

  const [records, setRecords] = useState([])

  const allRecords = useSelector(selectAllRecords)

  const recordStatus = useSelector(selectStatus)

  useEffect(() => {
    if (recordStatus === 'idle') {
      dispatch(fetchRecords())
    }
    console.log(recordStatus, allRecords)
  }, [recordStatus, dispatch])

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const switchRenders = () => {
    switch (component) {
      case 'records':
        return <ShowRecords records={allRecords}/>
      case 'register':
        return <RegisterRecords />
      case 'delete':
        return <DeleteRecords />
      case 'edit':
        return <EditRecords />
      default:
        return <ShowRecords records={allRecords}/>
    }
  }

  const WinOneDollar = () => {
    
    let randomNumber = getRandomInt(0,10);

    if (randomNumber >= 5) {
      dispatch(increment())
    } else {
      dispatch(decrement())
    }
  }

  var balance = useSelector((state) => state.fede.myMoney)

  return (
    <div id='body-fede'>
      <div className='operation-box'>
        <div className="operations-and-records">
          <div className='left-panel'>
            <div className="random-test" onClick={() => WinOneDollar()}>Win or Lose 1$ randomly just by clicking</div>
            <div className="balance-box">
              <div id="balance">Balance:</div>
              <div id="balance-amount">{balance}</div>     
            </div>
            <h2 className='register-operation-title'>Select an operation:</h2>
            <div className="select-operations">
              <button className="operation-btn" onClick={() => setComponent('register')}>Register a new operation.</button>
              <button className="operation-btn" onClick={() => setComponent('edit')}>Edit an operation.</button>
              <button className="operation-btn" onClick={() => setComponent('delete')}>Delete an operation.</button>
              <button className="operation-btn" onClick={() => setComponent('records')}> Display the latest records.</button>
            </div>
            
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
  