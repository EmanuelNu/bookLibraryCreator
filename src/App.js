import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from "./pages/index.js";
import Create from "./pages/create.js";
import View from "./pages/view.js";
import Store from "./store/store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
