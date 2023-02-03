import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Travel.css'


const Travel = () => {
    const [travels, setTravels] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/travel.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setTravels(data.data?.results)
               setIsLoading(false)
        })
        },[])

        const travelsNews = travels.slice(0,19)

        return <>
          <div className="travels--title--section">
            <h1>Travel</h1>
          </div>
          <div className="travels--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="travels--articles--container">
          {travelsNews.map((player) => {
            const {title, abstract, multimedia, url, slug_name} = player
            return (
                <div className="travels--article--single" key={slug_name}>
                  <a href={url}><img src={multimedia ? multimedia[2].url : imgA} className="travels--news--img" ></img></a>
                         <h2 ><a href={url} className="travels--title--article">{title}</a></h2>
                         <p className="travels--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> }
        </>
    }

    export default Travel