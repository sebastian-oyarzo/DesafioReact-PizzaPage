import { createContext , useState , useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {

// toda la data de las pizzas:
    const [pizzas, setPizzas] = useState([]);
// NOTA: no considere necesario filtrar la info por medio de un .map, ya que todos los datos seran utilizados
    const getPizzas = async () => {
      const response = await fetch('/pizzas.json');
      const data = await response.json();
      setPizzas(data);
    };

// precio de las pizzas que se vera reflejado en el navdar:
    const [Precio, setPrecio] = useState(0);

//para el detalle de las pizzas se crea una copia de pizzas filtrado para filtrar la seleccionada
    const [PizzaSelected, setPizzaSelected] = useState({})




useEffect(() => {
  getPizzas();
  setPrecio(0);
}, []);

  return (
    <Context.Provider value={{pizzas , getPizzas , Precio , setPrecio , PizzaSelected, setPizzaSelected}}>
        {children}
    </Context.Provider>
  )
};
export default ContextProvider;