// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";

// export default class News extends Component {
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//   }

//   async componentDidMount() {
//     console.log("Component Mounted");
//     this.setState({ loading:true}); // set loading to true while fetching data
   

//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=science&page=1&apiKey=c021928abb95405d98f8f7fe7151a847&pageSize=12`
//       // `https://newsapi.org/v2/everything?q=${this.props.searchTerm}&page=1&apiKey=c021928abb95405d98f8f7fe7151a847&pageSize=20`
//       // `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
//     );
//     console.log(response.status);
//     const parsedData = await response.json();

//     var articles = parsedData.articles;
//     this.setState({
//       articles: articles,
//       loading: false,
//       totalResults: parsedData.totalResults,
//     }); // set loading to false when data is received
//   }

//   handlePrevious = async () => {
//     this.setState({ loading: true, articles: [] });
//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=cricket&page=${
//         this.state.page - 1
//       }&apiKey=c021928abb95405d98f8f7fe7151a847&pageSize=12`
//     );
//     const parsedData = await response.json();
//     console.log("previous");
//     var articles = parsedData.articles;
//     this.setState({ articles: articles, page: this.state.page - 1,loading: false });
//   };

//   handleNext = async () => {
//     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
//     } else {
//       this.setState({ loading: true, articles: [] });
//       const response = await fetch(
//         `https://newsapi.org/v2/everything?q=cricket&page=${
//           this.state.page + 1
//         }&apiKey=c021928abb95405d98f8f7fe7151a847&pageSize=12`
//       );
//       const parsedData = await response.json();
//       console.log("next");
//       console.log(this.state.totalResults / 20);
//       console.log(this.state.page);

//       var articles = parsedData.articles;
//       this.setState({ articles: articles, page: this.state.page + 1,loading: false });
//     }
//   };

  

//   render() {
//     return (
//       <div className="container my-4">
//         <h1 className="text-center">Latest Cricket News</h1>
//         {this.state.loading ? <Spinner /> : null}
//         <div className="row ">
//           {this.state.articles.map((ele) => {
//             return (
//               <div className="col-md-4 my-3" key={ele.url}>
//                 <NewsItem
//                   title={ele.title ? ele.title.slice(0, 67) : ""}
//                   description={
//                     ele.description ? `${ele.description.slice(0, 95)}...` : ""
//                   }
//                   imgUrl={ele.urlToImage}
//                   readMore={ele.url}
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <div className="container d-flex justify-content-between">
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handlePrevious}
//             disabled={this.state.page <= 1}
//           >
//             &larr; Previous
//           </button>
//           <button
//             type="button"
//             className="btn btn-dark"
//             onClick={this.handleNext}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  
  const fetchNews = async () => {
    setLoading(true);
    
    
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${props.searchTerm}&page=${page}&apiKey=c021928abb95405d98f8f7fe7151a847&pageSize=12`
    );
    const parsedData = await response.json();
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

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
      <h1 className="text-center">Latest Cricket News</h1>
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

News.defaultProps = {
  searchTerm: "science"
};
