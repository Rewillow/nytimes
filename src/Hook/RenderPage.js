import imgA from "../img/ImgAbsent.png"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Config } from "../Config";
import Loading from "../Component/Loading/Loading";
import "./RenderPage.css"

const Category = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/${props.category}.json?api-key=${Config.apiKey}`)
      .then((data) => {
        setData(data.data?.results);
        setIsLoading(false);
      });
  }, []);

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

const World = () => {
    return <Category category="world" />
}

const Us = () => {
    return <Category category="u.s." />
}

const Business = () => {
    return <Category category="business" />
}

const Technology = () => {
    return <Category category="technology" />
}

const Health = () => {
    return <Category category="health" />
}

const Books = () => {
    return <Category category="books" />
}

const Style = () => {
    return <Category category="style" />
}

const Travel = () => {
    return <Category category="travel" />
}
const Sports = () => {
    return <Category category="sports" />;
  };

const Arts = () => {
  return <Category category="arts" />;
};

const Magazine = () => {
    return <Category category="magazine" />
}


export {World}
export {Us}
export {Business}
export {Technology}
export {Health}
export {Books}
export {Style}
export {Travel}
export default Arts;
export {Sports};
export {Magazine}
