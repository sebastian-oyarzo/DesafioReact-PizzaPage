import pizzaIcon from './imgs/Pizza-favicon.ico'
import shoppingIcon from './imgs/Shopping-favicon.ico'
import { useContext } from 'react'
import { Context } from './Context'
import { useNavigate } from 'react-router'

export const Navdar = () => {
  const { Precio } = useContext(Context)
  const Navigate = useNavigate()
  const returnHome = () => {
    Navigate('/')
  }


  return (
    <div className='navdar'>
        <div className='startNavdar' onClick={() => returnHome()}>
            <img className="ico" src={pizzaIcon} alt="icono de pizza" />
            <h4> Pizzeria Mama Mia!</h4>
        </div>
        <div className='endNavdar'>
            <img  className="ico" src={shoppingIcon} alt=" carro de compras" />
            <h4>$:{ Precio } </h4>
        </div>
    </div>
  )
}
