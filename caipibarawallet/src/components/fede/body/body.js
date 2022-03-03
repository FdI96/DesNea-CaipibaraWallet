import "./body.css"
import ShowRecords from "../showRecords/showRecords";

function Body() {
  

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
          <ShowRecords/>
        </div>
      </div>
        
    </div>
    );
}
  
  export default Body;
  