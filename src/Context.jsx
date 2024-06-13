import { createContext , useState , useEffect } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [pizzas, setPizzas] = useState([]);

    // NOTA: no considere necesario filtrar la info por medio de un .map, ya que todos los datos seran utilizados
    const getPizzas = async () => {
      const response = await fetch('/pizzas.json');
      const data = await response.json();
      setPizzas(data);
    };

useEffect(() => {
  getPizzas()
  console.log("pizza de context es:" , pizzas)
}, [])


  return (
    <Context.Provider value={{pizzas , getPizzas}}>
        {children}
    </Context.Provider>
  )
}
export default ContextProvider