export const validateCita = {
  barbero: {
    required: {
      value: true,
      message: "El barbero es requerido",
    },
  },
  hora: {
    required: {
      value: true,
      message: "La hora es requerida",
    },
  },
  fecha: {
    required: {
      value: true,
      message: "La fecha es requerida",
    },
  },
  observaciones: {
    required: {
      value: true,
      message: "Las observaciones son requerida",
    },
    maxLength: {
      value: 254,
      message: "maximo 254 caracteres",
    },
  },
};

