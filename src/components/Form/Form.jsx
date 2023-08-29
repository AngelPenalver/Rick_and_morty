
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import image from './login.png'
import validar from './validar/validar';
const Form = ({ login }) => {
    const[userData, setUserData] = useState({
        email:'',
        password:''
    })
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [errores, setErrores] = useState({
        email: '',
        password: ''
    })
    function handleSubmit(event) {
        event.preventDefault();
        login(userData)
    }
    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
        setErrores(validar({
            ...input,
            [event.target.name]: event.target.value
        }))
        setUserData({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div >
            <img src={image} alt="" style={{ width: '200px' }} />
            <form>
                <li><label htmlFor='email' >Correo electronico</label>
                    <input placeholder="Correo electronico" name="email" onChange={handleChange}
                    value={userData.email}/>
                    {errores.email && <p>{errores.email}</p>}</li>
                <li><label htmlFor='password'>Constraseña</label>
                    <input placeholder="Contraseña" name="password" onChange={handleChange} value={userData.password}/>
                    {errores.password && <p>{errores.password}</p>}</li>
                <button onClick={handleSubmit}>Ingresar</button>
            </form>
        </div>
    )

}
export default Form;