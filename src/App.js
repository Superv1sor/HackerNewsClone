import React, { useState, useEffect } from 'react';
import Article from "./Article.js";
import Header from "./Header.js";
import './App.css';
import Pagination from "./Pagination";
//import './index.css';
//import './style2.css';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [pageCount, setPageCount] = useState(50); // api support up to a maximum of 50 page only
  const [currentPage, setCurrentPage] = useState(0);
  // const [stylePath, setStylePath] = useState("./index.css");

  const fetchData = () => {
    setLoading(true);
    let endpoint = `https://hn.algolia.com/api/v1/search?query=${query}&page=${currentPage}&tags=story`;
    fetch(endpoint)
    .then((response) => response.json())
    .then((response) => {
        setLoading(false);
        const newArticles = response.hits.map((result) => ({
          text: result.title,
          url: result.url,
          points: result.points,
          comments: result.num_comments,
          author: result.author,
          created: result.created_at_i,
          isCompleted: false
        }))
      .sort((a, b) => (a.num_comments > b.num_comments ? -1:1));
      setArticles(newArticles);
      setQuery(response.query);
    })
    // Error handling
    .catch(error => {
      setLoading(false);
      alert(error);
    });
  }

  useEffect(() => {
      fetchData(setArticles);
      // Automatic data refresh after 5 minutes
      const interval = setInterval(() => {
        fetchData(setArticles);
      }, 300000);
      return () => clearInterval(interval);
  }, [query]);

  const expandArticle = (index) => {
    setSelectedIndex(index);
  }

   return (
    <div className="default light">
     
      <div className="container">
        <Header setQuery={setQuery} />
        {/*Display spinner if news are loading*/}
        <div className="loader-container" style={loading ? {display:"block"} : {display:"none"}}> 
          <div className="loader"></div>
        </div>
        <section className="SearchResults" style={loading ? {display:"none"} : {display:"block"}}>
          <div className="SearchResults_container">
            {/*Check if search gave results*/}
            <div className="search-term">{articles.length ? `${articles.length} News about "${query}": ` : `No news found for "${query}"`}</div>
            {articles.map((article, index) => (
              <Article
                key={index}
                index={index}
                selectedIndex = {selectedIndex}
                article={article}
                expand={expandArticle}
              />
            ))}
          </div>
        </section>
        <div className="pagination" style={loading ? {display:"none"} : {display:"block"}}>
       <Pagination pageCount={pageCount} pageChange={pageChange}/>
      </div>
      </div>
      
   )}