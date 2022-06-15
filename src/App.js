import { Route, Routes } from "react-router-dom";
import ArticleCreate from "./ArticleCreate";
import ArticleFull from "./ArticleFull";
import ArticleLict from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleCreate />} />
        <Route path="/create" element={<ArticleLict />} />
        <Route path="/:id" element={<ArticleFull />} />
      </Routes>
    </div>
  );
}

export default App;
