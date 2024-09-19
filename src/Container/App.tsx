import { Route, Routes } from "react-router-dom";
import { Footer, Nav } from "../Components/Layout";
import {Home, Kontakt, Usluge, Projekti} from "../Pages";

function App() {
  return (
    <main className="mainContainer overflow-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/usluge" element={<Usluge />}></Route>
        <Route path="/projekti" element={<Projekti />}></Route>
        <Route path="/kontakt" element={<Kontakt />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
