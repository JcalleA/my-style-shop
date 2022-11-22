const base = import.meta.env.VITE_REACT_APP_URL_BASE;
export const getUrlRefrescar = () => base + "api/refrescar";

export const getUrlNewEmpleado = () => base + "/api/empleados/new";
export const getUrlnewCita = () => base + "/api/cita/new";

export const getUrlUpdateEmpleado = (id) => base + `/api/empleados/${id}`;
export const getUrlUpdateCliente = (id) => base + `/api/users/${id}`;

export const getUrlLoginEmpleado = () => base + "/api/empleados";

export const getUrlValidAdmin = () => base + "/api/admin";

export const getUrlBarberos = () => base + "/api/empleados";
export const getUrlCitas = () => base + "/api/cita/";

export const getUrlDeleteCita = (id) => base + `/api/cita/delete/${id}`;
export const getUrlDeleteCorte = (id) =>
  base + `/api/empleados/deletecita/${id}`;

export const getUrlUpdateCita = (id) => base + `/api/cita/update/${id}`;
