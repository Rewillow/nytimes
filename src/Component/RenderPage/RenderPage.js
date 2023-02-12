import imgA from "../../img/ImgAbsent.png"
import React, { useState} from "react";
import Loading from "../Loading/Loading";
import "./RenderPage.css"
import ClientAPI from "../ClientAPI";

const Category = (props) => {
  const [data, isLoading] = ClientAPI(props.category)
  const results = data.slice(0, 19);

  return (
    <>
      <div className="render--title--section">
        <h1>{props.category}</h1>
      </div>
      <div className="render--dividing--line"></div>
      {isLoading ? <Loading /> :
        <div className="render--articles--container">
          {results.map((item) => {
            const { title, abstract, multimedia, url, slug_name } = item;
            return (
              <div className="render--article--single" key={slug_name}>
                <a href={url} target="_blank">
                  <img src={multimedia ? multimedia[2].url : imgA} className="render--news--img" />
                </a>
                <h2>
                  <a href={url} target="_blank" rel="noreferrer noopener" className="render--title--article">
                    {title}
                  </a>
                </h2>
                <p className="render--abstract--article">
                  {abstract ? abstract : "For more information open the news."}
                </p>
              </div>
            );
          })}
        </div>
      }
    </>
  );
};


export default Category
