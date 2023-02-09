import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import ClientAPI from "../../Component/ClientAPI";
import './World.css'




const World = () => {
const {worlds, isLoading} = ClientAPI()
const worldNews = worlds.slice(0,19)



    return <>
          <div className="world--title--section">
            <h1>World</h1>
          </div>
          <div className="world--dividing--line"></div>
          {isLoading ? <Loading /> :
         <div className="world--articles--container">
            {worldNews.map((world) => {
                const {title, abstract, multimedia, url, slug_name} = world
                return (
                    <div className="world--article--single" key={slug_name}> 
                    <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="world--news--img" ></img></a>
                     <h2><a href={url} target="_blank" className="world--title--article">{title}</a></h2>
                     <p className="world--abstract--article">{abstract ? abstract : "For more information open the news."}</p>
                    </div>
                )
            })}
         </div> }
    </>
}

export default World