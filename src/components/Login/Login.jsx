import style from './Login.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import image from './login.png'
import validar from './validar/validar';
const Login = ({ login }) => {
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
        login(setInput)
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
    }
    return (
        <div className={style.div}>
            <img src={image} alt="" style={{ width: '200px' }} />
            <form>
                <li><label htmlFor='email' >Correo electronico</label>
                    <input placeholder="Correo electronico" name="email" onChange={handleChange} className={style.input} />
                    {errores.email && <p>{errores.email}</p>}</li>
                <li><label htmlFor='password'>Constraseña</label>
                    <input placeholder="Contraseña" name="password" onChange={handleChange} className={style.input} />
                    {errores.password && <p>{errores.password}</p>}</li>
                <button onClick={handleSubmit}>Ingresar</button>
            </form>
        </div>
    )

}
export default Login;