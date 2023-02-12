import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import { Config } from "../../Config";
import imgA from "../../img/ImgAbsent.png"
import '../Home/Home.css'


const Home = () => {
    const [articles, setArticles] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    
    React.useEffect(() => {
       axios.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${Config.apiKey}`)
       .then((data) => {
              setArticles(data.data?.results)
              setIsLoading(false)
       })},[])
       
       const topNews = articles.slice(0,1)
       const miniNews = articles.slice(2,5)
       const firstLineNews = articles.slice(6,18)

       const validSections = ["World", "U.S.", "Business", "Tech", "Health", 
       "Sports", "Arts", "Books", "Style", "Travel", "Magazine" ]

       const handleSections = (section) => {
           if(validSections.includes(section)) {
            window.location.pathname = section
           } else {
            window.location.pathname = "/"
           }}

      return <>
           {isLoading ? <Loading /> : 
                   <div className="home--articles--container">
                    <div className="dividing--line">
                        <h1  className="first--dividing--line--text">Featured Articles</h1>
                      </div> 
                    <div className="top--mini--news--container">
                          <div className="top--news--general">
                          {topNews.map((article) => {
                          const {title, abstract, multimedia, url, slug_name, section} = article
                          return (
                          <div className="top--news--container" key={slug_name}>
                              <div className="top--news--data" key={slug_name}>
                              <a href={url} target="_blank" rel="noreferrer noopener"><img src={multimedia ? multimedia[2].url : imgA} className="top--news--img"></img></a>
                              <h3 className="top--news--section" onClick={() => handleSections(section)}>{section}</h3>
                               <div className="top--news--info--text">  
                                  <h2 className="top--news--title--h2" ><a href={url} className="top--news--title" target="_blank" rel="noreferrer noopener">{title}</a></h2>
                                  <h4 className="top--news--abstract">{abstract ? abstract : "For more details open the news."}</h4>
                               </div>
                              </div>
                          </div>
                       )
                     })} </div> 
                            <div className="mini--news--general">
                            {miniNews.map((article) => {
                              const {title, abstract, multimedia, url, slug_name, section} = article
                              return (
                                <div className="mini--news--container" key={slug_name}>
                                 <a href={url} target="_blank" rel="noreferrer noopener"><img src={multimedia ? multimedia[2].url : imgA} className="mini--news--img"></img></a>
                                  <div className="mini--news--info--text">
                                  <h3 className="mini--news--section" onClick={() => handleSections(section)}>{section}</h3>
                                      <h2 className="mini--news--title--h2"><a href={url} className="mini--news--title" target="_blank" rel="noreferrer noopener">{title}</a></h2>
                                      <p className="mini--news--abstract">{abstract ? abstract : "For more details open the news."}</p>
                                  </div>
                                </div>
                              )
                            })}</div>
                         </div>

                          <div className="dividing--line2">
                          <h1  className="dividing--line--text">Read More</h1>
                          </div>
                          <div className="main--articles--general">
                          {firstLineNews.map((article) => {
                          const {title, abstract, multimedia, url, slug_name, section} = article
                          return (
                          <div className="main--articles--container" key={slug_name}>
                              <div className="main--articles--data" key={slug_name}>
                              <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="main--articles--img" rel="noreferrer noopener"></img></a>
                              <h3 className="main--articles--section" onClick={() => handleSections(section)}>{section}</h3>
                               <div className="main--articles--info--text">
                                  <h2 ><a href={url} className="main--articles--title" target="_blank" rel="noreferrer noopener">{title ? title : "Title not avaible."}</a></h2>
                                  <p className="main--articles--abstract">{abstract ? abstract : "Abstract not avaible. For more details open the news."}</p>
                               </div>
                              </div>
                          </div>
                          )
                          })} </div> 
                 </div>
                 }
      </>
}

export default Home 
