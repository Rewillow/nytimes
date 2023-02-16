import React from "react";

import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Navbar from "./Component/Navbar/Navbar";
import SearchResults from "./Component/SearchResults/SearchResults";
import Category from "./Component/RenderPage/RenderPage";

const AppRouter = () => {
    return (
        <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world" element={<Category category="world" />} />
            <Route path="/us" element={<Category category="u.s." />} />
            <Route path="/business" element={<Category category="business" />} />
            <Route path="/tech" element={<Category category="technology" />} />
            <Route path="/health" element={<Category category="health" />} />
            <Route path="/sports" element={<Category category="sports" />} />
            <Route path="/arts" element={<Category category="arts" />} />
            <Route path="/books" element={<Category category="books" />} />
            <Route path="/style" element={<Category category="style" />} />
            <Route path="/travel" element={<Category category="travel" />} />
            <Route path="/magazine" element={<Category category="magazine" />} />
            <Route path="/results/:term" element={<SearchResults />} />
          </Routes>
        </div>
    )
}

export default AppRouter