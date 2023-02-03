import React from "react";
import './Loading.css'
import loading from '../../img/LoadingB.gif'

const Loading = () => {

    return (
        <div className="loading--setup--container"> 
        <img src={loading} className="loading--setup"></img>
        </div>
    )
}

export default Loading