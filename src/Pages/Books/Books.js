import React from "react";
import axios from "axios"
import Loading from "../../Component/Loading/Loading";
import {Config} from "../../Config"
import imgA from "../../img/ImgAbsent.png"
import './Books.css'
import ClientAPI from "../../Component/ClientAPI";


const Books = () => {
        const {books, isLoading} = ClientAPI()
        const booksNews = books.slice(0,19)

        return <>
          <div className="books--title--section">
            <h1>Books</h1>
          </div>
          <div className="books--dividing--line"></div>
          {isLoading ? <Loading /> :
          <div className="books--articles--container">
          {booksNews.map((player) => {
            const {title, abstract, multimedia, url, slug_name} = player
            return (
                <div className="books--article--single" key={slug_name}>
                  <a href={url} target="_blank"><img src={multimedia ? multimedia[2].url : imgA} className="books--news--img" ></img></a>
                         <h2 ><a href={url} className="books--title--article" target="_blank">{title}</a></h2>
                         <p className="books--abstract--article">{abstract ? abstract : "For more information open the news."}</p>  
                </div>
            )
          })}
        </div> }
        </>
    }

    export default Books