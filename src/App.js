import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Purchase from "./Routes/Purchase";

import './assets/Fonts/fonts.css';
import './assets/Fonts/Pokemon Hollow.ttf'
import './assets/Fonts/Pokemon Solid.ttf'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purchase" element={<Purchase/>} />
      </Routes>

    </div>
  );
}

export default App;
