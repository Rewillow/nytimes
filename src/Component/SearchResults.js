import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {

  const locationState = useLocation().state
  if (!locationState) return <p>Loading...</p>
  const {text, term} = locationState
  
    return (
        <div>
          <h2>Search Results for "{term}"</h2>
          {text && term ? (
            <ul>
               {text.map((docs) => {
                const {abstract} = docs
                return (
                  <p>{abstract}</p>
                )
               })}
            </ul> 
          ) : (
            <p>No results found</p>
          )}
        </div>
    )
}

export default SearchResults
