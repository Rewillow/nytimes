import React from "react";
import Loading from "../../Component/Loading/Loading";
import imgA from "../../img/ImgAbsent.png"
import './Technology.css'
import ClientAPI from "../../Component/ClientAPI";


const Technology = () => {
        const {techs, isLoading} = ClientAPI()
        const techsNews = techs.slice(0,19)

        return <>
          <div className="tech--title--section">
            <h1>Technology</h1>
          </div>
          <div className="tech--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="tech--articles--container">
             {techsNews.map((tech) => {
                 const {title, abstract, multimedia, url, slug_name} = tech 
                 return (
                    <div className="tech--article--single" key={slug_name}>
                     <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="tech--news--img" ></img></a>
                     <h2 ><a href={url} target="_blank" className="tech--title--article">{title}</a></h2>
                     <p className="tech--abstract--article">{abstract ? abstract : "For more information open the news."}</p>
                    </div>
                 )
             })}
            </div> }
        </>
    }

export default Technology