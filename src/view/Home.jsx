import { useContext  } from 'react'
import { useNavigate } from 'react-router'
import imageHome from '../imgs/pizzaHome.png'
import { Context } from '../Context'
import  PizzaIcon  from '../imgs/Pizza-favicon-16x16.png'
import ShoppingIcon from '../imgs/Shopping-favicon-16x16.png'
import EyesIcon from '../imgs/Eyes-favicon-16x16.png'

export const Home = () => {

  const { pizzas , Precio , setPrecio } = useContext(Context)
  const Navigate = useNavigate()

    const handlePrecio = (AddPrecio) => {
      setPrecio(AddPrecio + Precio)
    }

    const handleClick = (PizzaName) => {
      Navigate('/pizza/' + PizzaName)
     }

  return (
    <>
      <div className='pizzaHome'>
        <img className='imgsPizzaHome' src={imageHome} alt="background pizza" />
        <div className='onImg'>
            <h1>¡Pizzería Mama Mía!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </div>
       <div className='main'>
         { pizzas.length ? pizzas.map((pizzaCard, key) => (
          <div key={key} className='card'>
            <img className='imgCard' src={pizzaCard.img} alt="imagen de pizza" />
            <h3 >{pizzaCard.name}</h3>
            <h5>ingredientes: </h5>
            <div className='boxIngredients'>
              {pizzaCard.ingredients.map((ingrediente , key) => (
                <div className='ingredientes' key={key}>
                  <img src={PizzaIcon} alt="icono de pizza" />
                  <p className='ingrediente'>  {ingrediente}</p>
                </div>
                ))
              }
            </div>
              <h2 className='price'>$ {pizzaCard.price} </h2>
              <div className='buttons'>
                <button onClick={() => handleClick(pizzaCard.name)} className='verMas'> ver mas<img src={EyesIcon} alt="imagen de 2 ojos" /></button>
                <button onClick={() => handlePrecio(pizzaCard.price)} className='añadir'>añadir<img src={ShoppingIcon} alt="imagen de carro de compras" /></button>
              </div>
          </div>
        ))
        :
        <p>cargando...</p>
        }
      </div>
    </>
  )
}