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

//para el detalle de las pizzas se crea una copia de pizzas para filtrar la seleccionada
    const [PizzaSelected, setPizzaSelected] = useState({})

// data de las pizzas que se iran añadiendo:
    const [AddCarrito, setAddCarrito] = useState([])

    const handlePrecio = (AddPrecio , AddImg , AddName , cantidad) => {
      setPrecio(AddPrecio + Precio)
      setAddCarrito( (prevItems) => {
        const existingItem = prevItems.find(item => item.AddName === AddName);

        if(existingItem){
        return prevItems.map(item =>
          item.AddName === AddName?
           { ...item,  cantidad: item.cantidad + cantidad , AddPrecio : item.AddPrecio + AddPrecio  }
            : item
        );
        } else {
          const newObject = {
            id: AddCarrito.length + 1,
            AddImg,
            AddName,
            AddPrecio,
            cantidad : 1 ,
            PrecioInicial : AddPrecio
          }
          setAddCarrito([...AddCarrito , newObject])
        }
      }
      )
    }

  // para que todos los nombres de las pizzas se vean en mayuscula:
    const Mayuscula = (string) => {
      if (!string) return '';
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    // para que todos los numeros tengan punto:
    const PuntoDecimal = (numero) => {
      if(!Number) return '';
      return numero.toLocaleString()

    }

useEffect(() => {
  getPizzas();
  setPrecio(0);
  console.log(pizzas)
}, []);

  return (
    <Context.Provider value={{
                              pizzas ,
                              setPizzas ,
                              Precio ,
                              setPrecio ,
                              PizzaSelected ,
                              setPizzaSelected ,
                              AddCarrito ,
                              setAddCarrito ,
                              handlePrecio ,
                              Mayuscula ,
                              PuntoDecimal
                              }}>
        {children}
    </Context.Provider>
  )
};
export default ContextProvider;