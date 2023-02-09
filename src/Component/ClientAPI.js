import React from "react";
import { Config } from "../Config";
import axios from "axios";

const ClientAPI = () => {
    const [articles, setArticles] = React.useState([])
    const [worlds, setWorlds] = React.useState([]) // Sezione World
    const [americans, setAmericans] = React.useState([]) // Sezione U.S.
    const [business, setBusiness] = React.useState([]) // Sezione Business
    const [techs, setTechs] = React.useState([]) // Sezione Tech
    const [hearts, setHearts] = React.useState([]) // Sezione Health
    const [players, setPlayers] = React.useState([]) // Sezione Sports
    const [artists, setArtists] = React.useState([]) // Sezione Art
    const [books, setBook] = React.useState([]) // Sezione libri
    const [styles, setStyles] = React.useState([]) // Sezione Style
    const [travels, setTravels] = React.useState([]) // Sezione Travel
    const [isLoading, setIsLoading] = React.useState(true)
    
    // HOME //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setArticles(data.data?.results)
               setIsLoading(false)
        })},[])

    // WORLD // 
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setWorlds(data.data?.results)
               setIsLoading(false)
        })},[])
    
    // US //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/u.s.json?api-key=${Config.apiKey}`)
        .then((data) => {
                setAmericans(data.data?.results)
                setIsLoading(false)
        })},[])

    // BUSINESS //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${Config.apiKey}`)
        .then((data) => {
                setBusiness(data.data?.results)
                setIsLoading(false)
        })},[])
    
    // TECH //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/technology.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setTechs(data.data?.results)
               setIsLoading(false)
        })},[])

    // HEALTH // 
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setHearts(data.data?.results)
               setIsLoading(false)
        })},[])

    // SPORTS //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?api-key=${Config.apiKey}`)
        .then((data) => {
                setPlayers(data.data?.results)
                setIsLoading(false)
        })},[])
    
    // TRAVEL // 
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/travel.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setTravels(data.data?.results)
               setIsLoading(false)
        })},[])

    // ART //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/arts.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setArtists(data.data?.results)
               setIsLoading(false)
        })},[])
    
    // BOOK //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/books.json?api-key=${Config.apiKey}`)
        .then((data) => {
                setBook(data.data?.results)
                setIsLoading(false)
        })},[])

    // STYLE //
    React.useEffect(() => {
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/style.json?api-key=${Config.apiKey}`)
        .then((data) => {
               setStyles(data.data?.results)
               setIsLoading(false)
        })},[])

     return {articles, worlds, americans, business, 
             techs, hearts, players, 
             travels, artists, books, 
             styles, isLoading}
}

export default ClientAPI
