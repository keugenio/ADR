
import React from 'react';

const HomePage = () => (
    <React.Fragment>
        <div className="container">
            <div className="jumbotron bg-primary text-white text-center d-flex flex-column justify-content-around align-items-center ">
                <div>
                    <h1 className="display-5">Welcome to the 2019 ADR Race app</h1>
                </div>
                <div>
                    <p className="lead">
                        <div className="btn btn-danger btn-lg">Let's Go!!</div>
                    </p>
                </div>
            </div> 
            <p className="lead">Track your canoe/SUP standing in this year's ADR race!</p>
            <hr className="my-4" />
            <p>Make sure to register your entry at http://anotherdamrace.us before you begin.  Once registered, we'll update this app with your entry info.</p>
        </div>
        </React.Fragment>
);

export default HomePage;