import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArticleList() {
  const [articles, setArticles] = useState(null);

  useEffect(function () {
    axios
      .get("https://news-d5e47-default-rtdb.firebaseio.com/articles.json")
      .then(({ data }) => {
        const newArticles = Object.keys(data).map((id) => {
          return { id: id, ...data[id] };
        });
        setArticles(newArticles);
      });
  }, []);

  let output = "Loading...";
  if (articles !== null) {
    output = articles.map((article) => (
      <li key={article.id}>
        
        <Link to={'/' + article.id}>{article.title}</Link>
        
      </li>
    ));
  }

  return <ul>{output}</ul>;
}

export default ArticleList;
