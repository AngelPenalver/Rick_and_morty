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
    if (input.password.length < 6 || input.password.length > 10) {
        errores.password = 'La contraseña debe estar entre 6 y 10 caracteres'
    }
    return errores;
}