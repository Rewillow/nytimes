import React from "react";
import { Config } from "../Config";
import axios from "axios";


const ClientAPI = (category) => {
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
      setIsLoading(true)
        axios.get(`https://api.nytimes.com/svc/news/v3/content/nyt/${category}.json?api-key=${Config.apiKey}`)
          .then((data) => {
            setData(data.data?.results);     
            setIsLoading(false) 
          });
      }, [category]);

      return [data, isLoading]
}

export default ClientAPI