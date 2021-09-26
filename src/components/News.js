import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";

const News =(props) =>{
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    
    
    const  loadNews = async() =>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setPage({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setLoading(false);
        settotalResults(parsedData.totalResults)
    }
    useEffect(() => {
        loadNews();
    }, []);

  return (
    <div className='newsDiv'>
      <h2 className='text-center text-uppercase my-4'>Top picks of Feedly</h2>
          <div className='newsCards'>
                {articles.map((e) => {
                return (
                  <div key={e.url} className='col-md-4'>
                    <Newsitem
                      author={e.author ? e.author : "Unknown"}
                      source={e.source.name}
                      date={e.publishedAt}
                      title={e.title ? e.title.slice(0, 45) : ""}
                      description={
                        e.description ? e.description.slice(0, 88) : ""
                      }
                      imgUrl={e.urlToImage ? e.urlToImage : ""}
                      newsUrl={e.url ? e.url : ""}
                    />
                  </div>
                );
              })}
            </div>
    </div>
  );
}

  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
