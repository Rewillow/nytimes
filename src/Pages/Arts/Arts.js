import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import { Config } from "../../Config";
import imgA from "../../img/ImgAbsent.png"
import './Arts.css'




const Arts = () => {
    const [artists, setArtists] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/arts.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setArtists(data.data?.results)
               setIsLoading(false)
        })
        },[])

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