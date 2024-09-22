import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const { logout } = useContext(UserContext)

    return (
        <div className="perfil">
            <h1>Mi Perfil</h1>
            <p>Email: usuario@ejemplo.com</p>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    )
}

export default Profile
