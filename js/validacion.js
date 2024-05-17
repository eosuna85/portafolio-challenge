const formulario = document.getElementById('formulario');
const expresiones = {
    lname: /^[A-Za-z]{1,20}$/, // solo letras.
    fname: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
};
