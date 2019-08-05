import React from 'react';
import { Link } from 'react-router-dom';
import raceResults from '../pages/bigboatResults2018.json';

const RaceList = (props) => {
    return (
    <>
    <h1>Race Results for {props.title}</h1>
    {raceResults.map((result, key) => (
        <div>
            <Link key={key} to={`/results2018/${result.Number}`}>
                <span>{result.Number}</span><span>{result.Name}</span>
            </Link>
        </div>
    ))}
    </>
)};

export default RaceList;