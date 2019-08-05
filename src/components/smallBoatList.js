import React from 'react';
import { Link } from 'react-router-dom';
import smallRaceResults from '../pages/raceResultsSmallboat2018';
import bigBoatResults from '../pages/bigboatResults2018';


const RaceList = (props) => {
    var raceResults = ((props.raceType ==="small") ? smallRaceResults : bigBoatResults);
    var raceLink = ((props.raceType === "small") ? "smallResults2018" : "bigResults2018")
    return (

    <>

    <h1>Race Results for {props.title}</h1>
    <div className="row">
        <div className="col-2 text-right">Entry ID</div>
        <div className="col-10">Name</div>
    </div>
    {raceResults.map((result, key) => (
        <div className="row" key={key} >
        <div className="col-2 text-right" key={key} >{result.Number}</div>
        <div className="col-10">
            <Link key={key} to={`/${raceLink}/${result.Number}`}>
                {result.Name}
            </Link>
        </div>
        </div>
    ))}
    </>
)};

export default RaceList;