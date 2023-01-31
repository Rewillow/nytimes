import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Technology.css'


const Technology = () => {
    const [techs, setTechs] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/technology.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setTechs(data.data?.results)
               setIsLoading(false)
        })
        },[])

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
                     <a href={url}><img src={multimedia ? multimedia[2].url : imgA} className="tech--news--img" ></img></a>
                     <h2 ><a href={url} className="tech--title--article">{title}</a></h2>
                     <p className="tech--abstract--article">{abstract ? abstract : "For more information open the news."}</p>
                    </div>
                 )
             })}
            </div> }
        </>
    }

export default Technology