import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Sports.css'

const Sports = () => {
    const [players, setPlayers] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setPlayers(data.data?.results)
               setIsLoading(false)
        })
        },[])

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
                  <a href={url}><img src={multimedia ? multimedia[2].url : imgA} className="players--news--img" ></img></a>
                         <h2 ><a href={url} className="players--title--article">{title}</a></h2>
                         <p className="players--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> }
        </>
    }

    export default Sports