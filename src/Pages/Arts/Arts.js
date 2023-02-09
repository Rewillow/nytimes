import React from "react";
import Loading from "../../Component/Loading/Loading";
import ClientAPI from "../../Component/ClientAPI";
import imgA from "../../img/ImgAbsent.png"
import './Arts.css'




const Arts = () => {
        const {artists, isLoading} = ClientAPI() 
        const artistsNews = artists.slice(0,19)

        return <> 
          <div className="artists--title--section">
            <h1>Arts</h1>
          </div>
          <div className="artists--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="artists--articles--container">
          {artistsNews.map((player) => {
            const {title, abstract, multimedia, url, slug_name} = player
            return (
                <div className="artists--article--single" key={slug_name}>
                  <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="artists--news--img" ></img></a>
                         <h2 ><a href={url} target="_blank" className="artists--title--article">{title}</a></h2>
                         <p className="artists--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> 
        }
        </>
    }

    export default Arts