import React from "react"
import searchButton from "../img/SearchIcon.svg"
import './SearchButton.css'
import axios from "axios"
import {Config } from "../Config"
import { Link } from "react-router-dom"

const SearchButton = () => {
   const [showBar, setShowBar] = React.useState(false)
   const [term, setTerm] = React.useState('')
   const [text, setText] = React.useState([])
  //  const [isLoading, setIsLoading] = React.useState(true)
 
 
   const handleClick = (e) => {
    e.preventDefault()
    setShowBar(!showBar)
   }

   const handleInputChange = (event) => {
    setTerm(event.target.value);
     
}

   const handleChange = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${Config.apiKey}`)
        .then((data) => {
          console.log(data)
          setText(data.data?.response.docs)
        })
    }
  }

  const handleSubmit = (e) => {
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${Config.apiKey}`)
        .then((data) => {
          console.log(data)
          setText(data.data?.response.docs)
        })
}
      
 
    return (
      
        <form className="search--container"  >
            <button 
                 type="submit" 
                 className="button--search" 
                 onClick={handleClick}>
                 <img src={searchButton} className="search--icon"></img>
                 </button>
                 {showBar && <input 
                                type="text" 
                                placeholder="Search Article" 
                                className="input--field"
                                onChange={handleInputChange}
                                onKeyDown={handleChange}
                                >
                                </input>}
                 <Link to="/results">
                 {showBar && <button type="submit" className="button--go--search" onClick={handleSubmit}>GO</button>}
                 </Link>
        </form>
    )
}



export default SearchButton