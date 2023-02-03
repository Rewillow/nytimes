import React from "react";

import {Routes, Route} from 'react-router-dom'
import Home from "../Pages/Home/Home"
import World from "../Pages/World/World"
import Us from "../Pages/US/Us";
import Business from "../Pages/Business/Business";
import Technology from "../Pages/Technology/Technology";
import Health from "../Pages/Health/Health";
import Sports from "../Pages/Sports/Sports";
import Arts from "../Pages/Arts/Arts";
import Books from "../Pages/Books/Books";
import Style from "../Pages/Styles/Style";
import Travel from "../Pages/Travel/Travel";
import Magazine from "../Pages/Magazine/Magazine";
import Navbar from "../Component/Navbar/Navbar";
import SearchResults from "./SearchResults/SearchResults";
// import SearchButton from "./SearchButton";

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