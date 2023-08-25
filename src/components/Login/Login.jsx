import style from './Login.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import login from './login.png'
const Login = () => {
    const validar = (input) => {
        let errores = {};
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
            errores.email = 'Ingrese un correo valido'
        }
        if (!input.email) {
            errores.email = 'El correo no puede estar vacio'
        }
        if (input.email.length >= 35) {
            errores.email = 'El correo no puede tener mas de 35 caracteres'
        }
        if (input.password.length < 6 || input.password.length > 10) {
            errores.password = 'La contraseña debe estar entre 6 y 10 caracteres'
        }
        return errores;
    }
    const [input, setInput] = useState({
        email: '',
        password: ''
    })
    const [errores, setErrores] = useState({
        email: '',
        password: ''
    })
    function submitHandler(event) {
        event.preventDefault();
        if (!errores.email && !errores.password) {
            alert('Bienvenido');
        } else {
            alert('Por favor, corrija los errores antes de ingresar');
        }
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

    console.log(input)
    return (
        <div className={style.div}>
            <img src={login} alt="" style={{ width: '200px' }} />
            <form className={style.li} onSubmit={submitHandler}>


                <li><label htmlFor='email' >Correo electronico</label></li>
                <input type='text' placeholder="Correo electronico" name="email" onChange={handleChange} className={style.input} />
                {errores.email && <p>{errores.email}</p>}
                <li><label htmlFor='password'>Constraseña</label></li>
                <input type='password' placeholder="Contraseña" name="password" onChange={handleChange} className={style.input} />
                {errores.password && <p>{errores.password}</p>}

                {Object.keys(errores).length === 0 ? (
                    <NavLink to='/Home'><button className={style.button}>INGRESAR</button></NavLink>
                ) : (
                    <button disabled className={style.button}>INGRESAR</button>
                )}



            </form>
        </div>
    )

}
export default Login;