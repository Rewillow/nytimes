import React from "react"
import searchButton from "../../img/SearchIcon.svg"
import './SearchButton.css'
import { Link, useNavigate } from "react-router-dom"

const SearchButton = () => {
   const [showBar, setShowBar] = React.useState(false)
   const [input, setInput] = React.useState("")
   const navigate = useNavigate()
 
 
   const handleClick = (e) => {
    e.preventDefault()
    setShowBar(!showBar)
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/results/${input}`)
    setShowBar(!showBar)
    setInput("")
   }

   const handlePress = (e) => {
    if (e.key === "Enter") {
        navigate(`/results/${input}`)
        setShowBar(!showBar)
        setInput("")
    }
    
   }


  
    return (
        <form className="search--container" onSubmit={handleSubmit} >
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
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handlePress}
                                value={input}
                                >
                                </input>}
                 <Link to="/results">
                 {showBar && <button type="submit" className="button--go--search" onClick={handleSubmit}>GO</button>}
                 </Link>
        </form>
    )
}



export default SearchButton