import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Health.css'


const Health = () => {
    const [hearts, setHearts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setHearts(data.data?.results)
               setIsLoading(false)
        })
        },[])

        const heartsNews = hearts.slice(0,19)

    return <>
        <div className="health--title--section">
          <h1>Health</h1>
        </div>
        <div className="health--dividing--line"></div>
        {isLoading ? <Loading /> :
        <div className="health--articles--container">
       {heartsNews.map((heart) => {
            const {title, abstract, multimedia, url, slug_name} = heart
            return (
                <div className="health--article--single" key={slug_name}>
                    <a href={url}><img src={multimedia ? multimedia[2].url : imgA} className="health--news--img" ></img></a>
                         <h2 ><a href={url} className="health--title--article">{title}</a></h2>
                         <p className="health--abstract--article">{abstract ? abstract : "For more information open the news."}</p>
                         
                </div>
            )
       })}
       </div>
         }
    </>
    }
export default Health