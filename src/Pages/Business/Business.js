import React from "react";
import Loading from "../../Component/Loading/Loading";
import imgA from "../../img/ImgAbsent.png"
import './Business.css'
import ClientAPI from "../../Component/ClientAPI";


const Business = () => {
        const {business, isLoading} = ClientAPI()
        const businessNews = business.slice(0,19)

        return <>
          <div className="business--title--section">
            <h1>Business</h1>
          </div>
          <div className="business--dividing--line"></div>
          {isLoading ? <Loading /> :
            <div className="business--articles--container">
                {businessNews.map((busines) => {
                    const {title, abstract, multimedia, url, slug_name} = busines
                    return (
                        <div className="business--article--single" key={slug_name}>
                            <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="business--news--img" ></img></a>
                            <h2 ><a href={url} className="business--title--article" target="_blank">{title}</a></h2>
                            <p className="business--abstract--article">{abstract ? abstract : "For more information open the news."}</p>
                            
                        </div>
                    )
                })}
            </div> }
        </>
    }

    export default Business