import { Navdar } from "./Navdar";
import { Routes , Route } from "react-router";
import { Home } from "./view/Home";

const App = () => {



  return (
    <div>
      <Navdar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
