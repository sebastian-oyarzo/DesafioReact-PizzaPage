import { useContext , useEffect } from "react"
import { Context } from "../Context"
import { useParams } from "react-router"
import  PizzaIcon  from '../imgs/Pizza-favicon-16x16.png'
import ShoppingIcon from '../imgs/Shopping-favicon-16x16.png'
 import { useNavigate } from 'react-router'

export const DetallePizza = () => {
  const { PizzaSelected , setPizzaSelected , pizzas , handlePrecio , Mayuscula , PuntoDecimal } = useContext(Context)
  const { id } = useParams();

const filtered = () => {
  const filteredPizza = pizzas.filter( pizza  => pizza.name == id  )
  setPizzaSelected(filteredPizza[0])
}

useEffect(() => {
  filtered()
}, [id, pizzas]);


const Navigate = useNavigate()
const volverHome = () => {
  Navigate('/')
}
//este if fue necesario para esperar a que el estado termine de cargar, ademas da la opcion de volver a home si tarda demaciado o no existe la ruta
if (!PizzaSelected || Object.keys(PizzaSelected).length === 0) {
  return (
    <div className="invalidaRuta">
          <p>Loading...</p>
          <p>la pizza no existe o no se ha podido cargar</p>
          <button className="danger" onClick={() =>volverHome()}>volver a Home</button>
    </div>
  )
}
  return (
    <div className="DetallePizza">
        <img className="imgDetalle" src={PizzaSelected.img} alt="imagen de pizza" />
      <div className="Detalle">
      <h2 className="id">{Mayuscula(id)} </h2>
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
            <h2 className='price'>Precio: $ {PuntoDecimal(PizzaSelected.price)} </h2>
            <button  onClick={() => handlePrecio(PizzaSelected.price , PizzaSelected.img , PizzaSelected.name, +1)} className='añadir'>añadir<img src={ShoppingIcon} alt="imagen de carro de compras" /></button>
          </div>
      </div>
    </div>
  )
}