import { Route, Routes } from "react-router-dom";
import { Nav } from "../Components/Layout";
import {Home, Kontakt, Usluge} from "../Pages";

function App() {
  return (
    <main className="mainContainer">
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/usluge" element={<Usluge />}></Route>
          <Route path="/kontakt" element={<Kontakt />}></Route>
        </Routes>
      </div>
      
    </main>
  );
}

export default App;
