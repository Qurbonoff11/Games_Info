import { Route, Routes } from "react-router-dom";
import Libs from "../routes/Libs";
import Store from "../routes/Store";
import Community from "../routes/Community";

const Main = () => {
  return (
    <main className="w-full min-h-screen bg-slate-950 mt-12">
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/libs" element={<Libs />} />
        <Route path="/contact" element={<Community />} />
      </Routes>
    </main>
  );
};

export default Main;
