import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Purchase from "./Routes/Purchase";

import './assets/Fonts/fonts.css';
import './assets/Fonts/Pokemon Hollow.ttf'
import './assets/Fonts/Pokemon Solid.ttf'
import { PurchaseContextProvider } from "./context/purchase";
import { ShowElementsProvider } from "./context/showElements";

function App() {
  return (
    <div className="App">
      <PurchaseContextProvider>
        <ShowElementsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="purchase" element={<Purchase/>} />
          </Routes>
        </ShowElementsProvider>
      </PurchaseContextProvider>
    </div>
  );
}

export default App;
