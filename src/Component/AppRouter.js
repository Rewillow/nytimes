import React from "react";

import {Routes, Route} from 'react-router-dom'
import Home from "../Pages/Home/Home"
import Navbar from "./Navbar/Navbar";
import SearchResults from "./SearchResults/SearchResults";
import { World, Us, Sports, Business, Technology, Health, Books, Style, Travel, Magazine} from "./RenderPage/RenderPage";
import Arts from "./RenderPage/RenderPage";

const AppRouter = () => {
    return (
        <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/World" element={<World />} />
            <Route path="/U.S." element={<Us />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/Tech" element={<Technology />} />
            <Route path="/Health" element={<Health />} />
            <Route path="/Sports" element={<Sports />} />
            <Route path="/Arts" element={<Arts />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/Style" element={<Style />} />
            <Route path="/Travel" element={<Travel />} />
            <Route path="/Magazine" element={<Magazine />} />
            <Route path="/results/:term" element={<SearchResults />} />
          </Routes>
        </div>
    )
}

export default AppRouter