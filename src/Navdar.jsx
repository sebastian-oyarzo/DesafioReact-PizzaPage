import pizzaIcon from './imgs/Pizza-favicon.ico'
import shoppingIcon from './imgs/Shopping-favicon.ico'
export const Navdar = () => {
  return (
    <div className='navdar'>
        <div className='startNavdar'>
            <img className="ico" src={pizzaIcon} alt="icono de pizza" />
            <h4> Pizzeria Mama Mia!</h4>
        </div>
        <div className='endNavdar'>
            <img  className="ico" src={shoppingIcon} alt=" carro de compras" />
            <h4>$:0.000</h4>
        </div>
    </div>
  )
}
