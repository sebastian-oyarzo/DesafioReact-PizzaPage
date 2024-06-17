import { Context } from '../Context'
import { useContext , useEffect  } from 'react'

export const Carrito = () => {

  const { setAddCarrito ,  AddCarrito , Precio , Mayuscula , PuntoDecimal, handlePrecio } = useContext(Context)

  // const borrado = () => {

  // }


  useEffect(() => {
    setAddCarrito(AddCarrito.filter(item => item.AddPrecio != 0 || item.cantidad != 0))
  }, [Precio]);

  return (
    <div className="Carrito">
        <p className="font">Detalle del Pedido:</p>
        {

          AddCarrito.length ? AddCarrito.map((item , key) => (
          <div className='mainCarrito' key={key}>
            <div className='startCarrito'>
              <img className='imgMini' src={item.AddImg} alt="imagen de pizza minimizada" />
              <p>{Mayuscula(item.AddName)} </p>
            </div>
            <div className='endCarrito'>
              <p className='precioMin'>${PuntoDecimal(item.AddPrecio)} </p>
              <button onClick={() => handlePrecio(-item.PrecioInicial , item.AddImg , item.AddName, -1 )} className='resta'>-</button>
              <p>{item.cantidad}</p>
              <button onClick={ () => handlePrecio(item.PrecioInicial , item.AddImg , item.AddName, +1 )} className='suma'>+</button>
            </div>
          </div>
          ))
          :
          <p>no hay items...</p>
          }
          <h2 className='Total'>Total: ${PuntoDecimal(Precio)} </h2>
          <button className='pagar'>Ir a Pagar</button>
    </div>
  )
}