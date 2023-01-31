import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Style.css'


const Style = () => {
    const [styles, setStyles] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/style.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setStyles(data.data?.results)
               setIsLoading(false)
        })
        },[])

        const stylesNews = styles.slice(0,19)

        return <>
          <div className="style--title--section">
            <h1>Style</h1>
          </div>
          <div className="style--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="style--articles--container">
          {stylesNews.map((player) => {
            const {title, abstract, multimedia, url, slug_name} = player
            return (
                <div className="style--article--single" key={slug_name}>
                  <a href={url}><img src={multimedia ? multimedia[2].url : imgA} className="style--news--img" ></img></a>
                         <h2 ><a href={url} className="style--title--article">{title}</a></h2>
                         <p className="style--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> }
        </>
    }

    export default Style