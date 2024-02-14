import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import PedidoNovia from "./components/PedidoNovia/PedidoNovia";
import SV24 from "./components/SanValentin/SV24";


function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/novia-pedido" element={<PedidoNovia />} />
            <Route path="/sanValentin24" element={<SV24 />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
