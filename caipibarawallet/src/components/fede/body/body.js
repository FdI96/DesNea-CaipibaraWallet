import "./body.css"

function Body() {
    return (
      <div id='body-fede'>
        <div className='operation-box'>
          <h2 className='register-operation-title'>Register a new operation here:</h2>
          <div className='register-operation-content'>
            <form>
              <label>
                Concept:
                <input type="text" name="concept" />
              </label>
              <label>
                Amount:
                <input type="text" name="amount" />
              </label>
              <label>
                Date:
                <input type="text" name="date" />
              </label>
              <label>
                Type:
                <input type="text" name="type" />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    );
  }
  
  export default Body;
  