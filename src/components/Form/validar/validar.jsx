export default function validar  (input) {
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
    if (input.password.length < 6 ) {
        errores.password = 'La contraseña debe tener mas de 6 caracteres'
    }
    if(!input.password){
        errores.password = 'La constraseña no puede estar vacia'
    }
    return errores;
}