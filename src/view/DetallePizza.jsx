import { useContext , useEffect } from "react"
import { Context } from "../Context"
import { useParams } from "react-router"
import  PizzaIcon  from '../imgs/Pizza-favicon-16x16.png'
import ShoppingIcon from '../imgs/Shopping-favicon-16x16.png'

export const DetallePizza = () => {
  const { PizzaSelected , setPizzaSelected , pizzas , setPrecio , Precio } = useContext(Context)
  const { id } = useParams();


const filtered = () => {
  const filteredPizza = pizzas.filter( pizza  => pizza.name == id  )
  setPizzaSelected(filteredPizza[0])
}

const handlePrecio = (AddPrecio) => {
  setPrecio(AddPrecio + Precio)
}

useEffect(() => {
  filtered()
  console.log("pizzaSelected es: " , PizzaSelected)
  console.log("pero piiza es :" , pizzas)
}, [id, pizzas]);


//este if fue necesario para esperar a que el estado termine de cargar
if (!PizzaSelected || Object.keys(PizzaSelected).length === 0) {
  return <p>Loading...</p>;
}


  return (
    <div className="DetallePizza">
        <img className="imgDetalle" src={PizzaSelected.img} alt="imagen de pizza" />
      <div className="Detalle">
      <h2 className="id">{id} </h2>
        <p className="Description">{PizzaSelected.desc} </p>
        <h3 >Ingredientes</h3>
          <div className='boxIngredients'>
              { PizzaSelected.ingredients.map((ingrediente , key) => (
                <div className='ingredientes' key={key}>
                  <img src={PizzaIcon} alt="icono de pizza" />
                  <p className='ingrediente'>{ ingrediente }</p>
                </div>
                ))
              }
          </div>
          <div className="endDetalle">
            <h2 className='price'>Precio: $ {PizzaSelected.price} </h2>
            <button onClick={() => handlePrecio(PizzaSelected.price)} className='añadir'>añadir<img src={ShoppingIcon} alt="imagen de carro de compras" /></button>
          </div>

      </div>
    </div>
  )
}
