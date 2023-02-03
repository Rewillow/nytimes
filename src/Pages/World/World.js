import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './World.css'




const World = () => {
    const [worlds, setWorlds] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setWorlds(data.data?.results)
               setIsLoading(false)
        })
        },[])

    const worldNews = worlds.slice(0,19)

    return <>
          <div className="world--title--section">
            <h1>World</h1>
          </div>
          <div className="world--dividing--line"></div>
          {isLoading ? <Loading /> :
         <div className="world--articles--container">
            {worldNews.map((world) => {
                const {title, abstract, multimedia, url, slug_name} = world
                return (
                    <div className="world--article--single" key={slug_name}> 
                    <a href={url}><img src={multimedia ? multimedia[2].url : imgA} className="world--news--img" ></img></a>
                     <h2 ><a href={url} className="world--title--article">{title}</a></h2>
                     <p className="world--abstract--article">{abstract ? abstract : "For more information open the news."}</p>
                    </div>
                )
            })}
         </div> }
    </>
}

export default World