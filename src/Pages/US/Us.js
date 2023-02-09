import React from "react";
import axios from "axios";
import Loading from "../../Component/Loading/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Us.css'



const Us = () => {
    const [americans, setAmericans] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/u.s.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setAmericans(data.data?.results)
               setIsLoading(false)
        })
        },[])

        const americansNews = americans.slice(0,19)
       
        return <>
          <div className="us--title--section">
            <h1>U.S.</h1>
          </div>
          <div className="us--dividing--line"></div>
          {isLoading ? <Loading /> :
            <div className="us--articles--container">
                {americansNews.map((american) => {
                    const {title, abstract, multimedia, url, slug_name} = american 
                    return (
                    <div className="us--article--single" key={slug_name}>
                    <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="us--news--img" ></img></a>
                     <h2 ><a href={url} target="_blank" className="us--title--article">{title}</a></h2>
                     <p className="us--abstract--article">{abstract ? abstract : "For more information open the news."}</p>
                     
                        </div>
                    )
                })}
            </div> }
        </> 
    }

export default Us