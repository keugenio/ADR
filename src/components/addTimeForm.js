import React, { useState, } from 'react';


const addTimeForm = () => {
    var moment = require('moment');
    const [entryID, setEntryID] = useState('entryID:-1')
    moment().format();
    return (
    <>
            <form id="addEntry">
                <div className="form-group">
                    <label for="entryNumber">Entry Number</label>
                    <input type="text" className="form-control" id="entryNumber" placeholder="Entry Number"  value={entryID} onChange={(event) = setEntryID(event.target.value)}/>
                    <small  className="form-text text-muted">Enter the racer's entry ID</small>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>        
    </>
)};

export default addTimeForm;
