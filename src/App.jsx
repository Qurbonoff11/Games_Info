import { Route, Routes } from "react-router-dom";
import Libs from "./routes/Libs";
import Store from "./routes/Store";
import Community from "./routes/Community";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/libs" element={<Libs />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
