import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import Login from "./pages/login";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/feed" element={<Feed />} />
          <Route path="/profil" element={<h1>Profil</h1>} />
          <Route path="/ayarlar" element={<h1>Ayarlar</h1>} />
          <Route path="/mesajlar" element={<h1>Mesajlar</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
