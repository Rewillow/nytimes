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
import Navbar from "./Navbar";
import SearchResults from "./SearchResults";
import SearchButton from "./SearchButton";

const AppRouter = () => {
    return (
        <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/world" element={<World />} />
            <Route path="/us" element={<Us />} />
            <Route path="/business" element={<Business />} />
            <Route path="/tech" element={<Technology />} />
            <Route path="/health" element={<Health />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/books" element={<Books />} />
            <Route path="/style" element={<Style />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/results" element={<SearchResults />} />
          </Routes>
        </div>
    )
}

export default AppRouter