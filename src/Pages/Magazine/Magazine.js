import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Magazine.css'


const Magazine = () => {
    const [magazines, setMagazines] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/magazine.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setMagazines(data.data?.results)
               setIsLoading(false)
        })
        },[])

        const magazinesNews = magazines.slice(0,19)

        return <>
          <div className="magazine--title--section">
            <h1>Magazine</h1>
          </div>
          <div className="magazine--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="magazine--articles--container">
          {magazinesNews.map((player) => {
            const {title, abstract, multimedia, url, slug_name} = player
            return (
                <div className="magazine--article--single" key={slug_name}>
                  <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="magazine--news--img" ></img></a>
                         <h2 ><a href={url} target="_blank" className="magazine--title--article">{title}</a></h2>
                         <p className="magazine--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> 
           }
        </>
    }

    export default Magazine