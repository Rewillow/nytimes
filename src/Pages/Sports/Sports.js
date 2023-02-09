import React from "react";
import Loading from "../../Component/Loading/Loading";
import imgA from "../../img/ImgAbsent.png"
import ClientAPI from "../../Component/ClientAPI";
import './Sports.css'


const Sports = () => {
        const {players, isLoading} = ClientAPI()
        const playersNews = players.slice(0,19)

        return <>
          <div className="players--title--section">
            <h1>Sports</h1>
          </div>
          <div className="players--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="players--articles--container">
          {playersNews.map((player) => {
            const {title, abstract, multimedia, url, slug_name} = player
            return (
                <div className="players--article--single" key={slug_name}>
                  <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="players--news--img" ></img></a>
                         <h2 ><a href={url} target="_blank" className="players--title--article">{title}</a></h2>
                         <p className="players--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> }
        </>
    }

    export default Sports