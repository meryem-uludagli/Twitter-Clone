import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import Login from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
