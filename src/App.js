import React, { useState, useEffect } from 'react';
import Article from "./Article.js";
import Header from "./Header.js";
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
      fetch("https://hn.algolia.com/api/v1/search?query=react")
      .then((response) => response.json())
      .then((response) => {
          const newArticles = response.hits.map((result) => ({
              text: result.title,
              url: result.url,
              num_comments: result.num_comments,
              isCompleted: false,
          }))
        .sort((a, b) => (a.num_comments > b.num_comments ? -1:1));
        setArticles(newArticles);
        setQuery(response.query);
      });
  }, []);

  return (
    <div className="app">
      <Header q={query} />
      <div className="todo-list">
        {articles.map((article, index) => (
          <Article
            key={index}
            index={index}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
