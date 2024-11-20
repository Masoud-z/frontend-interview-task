import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { BookMarks, Feed, PageNotFound } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="/bookmarks" element={<BookMarks />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
