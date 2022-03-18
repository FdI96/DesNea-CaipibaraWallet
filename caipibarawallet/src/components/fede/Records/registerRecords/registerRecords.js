export default function RegisterRecords() {
    return (
        <div>
            <h1>Register some records</h1>
            <div id='form'>
                <div id="id">
                    <div className="id-div">
                        Id:
                    </div>
                    <input placeholder="Id..."/>
                </div>
                <div id="concept">
                    <div className="id-concept">
                        Concept:
                    </div>
                    <input placeholder="Concept..."/>
                </div>
                <div id="amount">
                    <div className="id-amount">
                        Amount:
                    </div>
                    <input placeholder="Amount..."/>
                </div>
                <div id="date">
                    <div className="id-date">
                        Date:
                    </div>
                    <input placeholder="Date..."/>
                </div>
                <div id="type">
                    <div className="id-type">
                        Type:
                    </div>
                    <input placeholder="Type..."/>
                </div>

                <button>Submit</button>
            </div>
        </div>
    )
}