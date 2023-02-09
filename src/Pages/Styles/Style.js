import React from "react";
import Loading from "../../Component/Loading/Loading";
import imgA from "../../img/ImgAbsent.png"
import './Style.css'
import ClientAPI from "../../Component/ClientAPI";


const Style = () => {
        const {styles, isLoading} = ClientAPI()
        const stylesNews = styles.slice(0,19)

        return <>
          <div className="style--title--section">
            <h1>Style</h1>
          </div>
          <div className="style--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="style--articles--container">
          {stylesNews.map((player) => {
            const {title, abstract, multimedia, url, slug_name} = player
            return (
                <div className="style--article--single" key={slug_name}>
                  <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="style--news--img" ></img></a>
                         <h2 ><a href={url} target="_blank" className="style--title--article">{title}</a></h2>
                         <p className="style--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> }
        </>
    }

    export default Style