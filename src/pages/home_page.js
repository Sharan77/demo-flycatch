import React from 'react'

import NavBar from '../components/navbar';

const HomePage = (props) => (
    
    <>
        <NavBar currentRoute={props.match.url}/>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <img className="w-25" src="https://www.flycatchtech.com/img/logos/fc-logo.png" alt="company logo"/>
            <h3  className="mt-5">Flycatch project</h3>
            <h4 className="mt-1">By Sharan</h4>
        </div>
    </>
)

export default HomePage