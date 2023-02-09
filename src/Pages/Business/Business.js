import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Business.css'


const Business = () => {
    const [business, setBusiness] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setBusiness(data.data?.results)
               setIsLoading(false)
        })
        },[])

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