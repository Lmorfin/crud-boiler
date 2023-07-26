import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FooterBanner from "./components/FooterBanner";
import { Toaster } from "react-hot-toast";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <div className="flex">
            <Navbar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
          <Toaster />
          <FooterBanner />
        </BrowserRouter>
      </div>
  );
}

export default App;
