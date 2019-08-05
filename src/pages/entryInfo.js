
import React, { useState, useEffect } from 'react';

import smRaceResults from './raceResultsSmallboat2018';
import bgRaceResults from './bigboatResults2018';


const raceResults = smRaceResults.concat(bgRaceResults);

function ObjectLength( object ) {
    var length = 0;
    for( var key in object ) {
        if( object.hasOwnProperty(key) ) {
            ++length;
        }
    }
    return length;
};

const EntryInfo = ({ match }) => {
    const entryID = parseInt(match.params.entryID);      

    const result = raceResults.find(result=> parseInt(result.Number) === entryID);

    // const [resultInfo, setResultInfo] = useState({time:0});
    
    // useEffect(()=>{
    //     setResultInfo({time:'1:04:23'})
    // }, [entryID])

    if (!result) return <h1>Racer {entryID.type} does not exist!</h1>

    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <h4>Entry Profile {result.Number}:</h4>
                    <h3>{result.Name}</h3>
                      <ul key={result.Number}>
                        <li>Overall: {result.Overall} out of {ObjectLength(raceResults)} entrants in small craft division</li>
                        <li>Division: {result.Division} in the  {result.Category} {result.Age} {result.Gender} category</li>
                        <li>Time:  {result.Time}</li>                       
                      </ul>
                      <a className="btn btn-primary btn-sm" href="javascript:history.back()">Back</a>
                </div>
            </div>
        </React.Fragment>
    )
};

export default EntryInfo;