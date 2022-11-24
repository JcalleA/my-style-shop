export const formatearFecha = (date) => {
    const fecha = date ? new Date(date) : new Date();
    const fechaFormateada = new Intl.DateTimeFormat("fr-CA").format(fecha);
    return fechaFormateada;
};