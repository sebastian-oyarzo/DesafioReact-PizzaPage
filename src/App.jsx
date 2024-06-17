import { Navdar } from "./components/Navdar";
import { Routes , Route  } from "react-router";
import { Home } from "./view/Home";
import { DetallePizza } from "./view/DetallePizza";
import { Carrito } from "./view/Carrito";
import { Navigate } from 'react-router-dom'
const App = () => {

  return (
    <div>
      <Navdar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizza/:id" element={<DetallePizza />} />
        <Route path="/pizza/:*" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
export default App;
