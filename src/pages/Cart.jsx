import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice } = useContext(CartContext)
    const { token } = useContext(UserContext)

    return (
        <div className="container mt-4">
            <h2>Carrito de Compras</h2>
            <ul className="list-group">
                {cart.map(pizza => (
                    <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <img src={pizza.img} alt={pizza.name} width="50" />
                        <span>{pizza.name}</span>
                        <span>${pizza.price}</span>
                        <div>
                            <button onClick={() => decreaseQuantity(pizza.id)} className="btn btn-danger">-</button>
                            <span className="mx-2">{pizza.count}</span>
                            <button onClick={() => increaseQuantity(pizza.id)} className="btn btn-success">+</button>
                            <button onClick={() => removeFromCart(pizza.id)} className="btn btn-danger mx-2">Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className="mt-4">Total: ${totalPrice.toLocaleString()}</h3>
            <button className="btn btn-primary mt-2" disabled={!token}>Pagar</button> {/* Botón de pago deshabilitado */}
            {!token && <p className="text-danger mt-2">Debes iniciar sesión para realizar el pago.</p>}
        </div>
    )
}

export default Cart
