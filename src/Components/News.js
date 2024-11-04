

import React, { useState, useEffect,useCallback } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${props.category}&page=${page}&apiKey=c021928abb95405d98f8f7fe7151a847&pageSize=12`
      );
      const parsedData = await response.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }, [props.category, page]); // Dependencies for fetchNews

  // useEffect to call fetchNews
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);  // Add props.category to the dependency array

  const handlePrevious = async () => {
    setPage(page - 1);
  };

  const handleNext = async () => {
    if (page + 1 > Math.ceil(totalResults / 12)) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Latest {props.category} News</h1>
      {loading ? <Spinner /> : null}
      <div className="row ">
        {articles.map((ele) => {
          return (
            <div className="col-md-4 my-3" key={ele.url}>
              <NewsItem
                title={ele.title ? ele.title.slice(0, 67) : ""}
                description={
                  ele.description ? `${ele.description.slice(0, 90)}...` : ""
                }
                imgUrl={ele.urlToImage}
                readMore={ele.url}
              />
            </div>
          );
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlePrevious}
          disabled={page <= 1}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;




