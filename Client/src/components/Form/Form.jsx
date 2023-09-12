import { useState } from 'react';
import image from './login.png'
import validar from './validar/validar';
import style from './Form.module.css'
const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
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
        <div className={style.div}>

            <img src={image} alt="" className={style.img} />
            <form>
                <div className={style.form}>
                    {errores.email && <span className={style.span}>{errores.email}</span>}
                    <label htmlFor='email' className={style.label}>Correo electronico</label>
                    <input placeholder="Correo electronico" name="email" onChange={handleChange}
                        value={userData.email} className={style.input} />
                </div>
                <div className={style.form}>

                    {errores.password && <span className={style.span}>{errores.password}</span>}
                    <label htmlFor='password' className={style.label}>Contraseña</label>
                    <input placeholder="Contraseña" name="password" onChange={handleChange} value={userData.password}
                        className={style.input} />
                </div>
                {Object.keys(errores).length > 0 ? (
                    <button disabled onClick={handleSubmit} className={style.button1}>
                        Ingresar
                    </button>
                ) : (
                    <button onClick={handleSubmit} className={style.button}>
                        Ingresar
                    </button>
                )}


            </form>


        </div>
    )

}
export default Form;