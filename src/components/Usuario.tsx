import React, { useState } from 'react'

interface User {
    uid: string;
    name: string;
} 

export const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = ()=>{
        setUser({
            uid: 'ABC123',
            name: 'Fernando Herrera'
        })
    }
  return (
    <div className='mt-5'>
        <h3>Usuario: useState</h3>
        <button className='btn btn-outline-primary' onClick={login}>Login</button>

        {
            !user 
            ? <pre className='mt-4'>No hay usuario</pre>
            : <pre className='mt-4'>{ JSON.stringify(user) }</pre>
        }

        
    </div>
  )
}
