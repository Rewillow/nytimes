import React from "react";
import { Config } from "../../Config";
import { useParams } from "react-router-dom";
import imgA from "../../img/ImgAbsent.png"
import Loading from "../Loading/Loading";
import './SearchResults.css'


const SearchResults = () => {
     const [searchArticles, setSearchArticles] = React.useState([])
     const [isLoading, setIsLoading] = React.useState(true)
     const {term} = useParams()
     const link = "https://www.nytimes.com/"



     const getArticles = async (term) => {
      const data = await fetch (`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${Config.apiKey}`)
      const articles = await data.json()
      setSearchArticles(articles.response.docs)
      setIsLoading(false)
     }

     React.useEffect(() => {
      getArticles(term)
      setIsLoading(true)
     }, [term])

     const validSections = ["World", "U.S.", "Business", "Tech", "Health", 
                            "Sports", "Arts", "Books", "Style", "Travel", 
                            "Magazine" ]

     const handleSection = (section) => {
      if (validSections.includes(section)) {
        window.location.pathname = section;
      } else {
        window.location.pathname = '/';
      }
    };

     return <>
        <div className="title--article">
        <h1 className="title">Search results for:  {term} </h1>
        </div>
        <div className="render--dividing--line"></div>
        {isLoading ? <Loading /> : 
        <div className="search--articles--container">        
        {searchArticles.map((article) => {
        const {multimedia, web_url, _id, abstract, headline, section_name} = article
        let imageURL = "";
         if (multimedia.length > 0) {
         const image = multimedia.find(media => media.subtype === "xlarge");
         if (image) {
         imageURL = link + image.url;
         }
         }
          return (
              <div key={_id} className="search--article--single">
              <a href={web_url} target="_blank"><img src={ imageURL || imgA} className="search--news--img"></img></a>
              <h3 className="search--section--article" onClick={() => handleSection(section_name)}>{section_name}</h3>
              <h2><a href={web_url} target="_blank" rel="noreferrer noopener" className="search--title--article">{headline.main}</a></h2>
              <p className="search--abstract--article">{abstract}</p>
              </div>
            )
          })}
        </div>
        }

     </>
}

export default SearchResults
