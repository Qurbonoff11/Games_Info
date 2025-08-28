import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home";
import About from "../routes/About";
import Contact from "../routes/Contact";
import Pricing from "../routes/Pricing";

const Main = () => {
  return (
    <main className="w-full min-h-screen bg-slate-950 mt-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </main>
  );
};

export default Main;
