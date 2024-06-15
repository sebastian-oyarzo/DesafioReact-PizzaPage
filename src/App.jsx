import { Navdar } from "./Navdar";
import { Routes , Route } from "react-router";
import { Home } from "./view/Home";
import { DetallePizza } from "./view/DetallePizza";

const App = () => {



  return (
    <div>
      <Navdar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<DetallePizza />} />
      </Routes>
    </div>
  );
};
export default App;
