import styled, { css } from "styled-components";

import { flex } from "../../styles/utilStyles";
import { ContainerFormLogin } from "../Login/login-styles";

export const ContainerNewCitaUsers = styled.main`
  flex-grow: 1;
  background-color: ${(props) => props.theme.fondo};
  ${flex("column")};
  padding: 1rem 0;
  gap: 1rem;
  h2 {
    color: ${(props) => props.theme.azul};
  }
`;
export const ContainerCitasUsers = styled(ContainerNewCitaUsers)`
  width: 100%;
  padding: 1rem;
  display: block;
  h2 {
    padding-bottom: 1rem;
  }
`;
export const ContainerFormCitas = styled(ContainerFormLogin)`
  width: min(450px, 90%);
  background-color: ${(props) => props.theme.claro};
  padding: 1rem;
  border-radius: 1rem;
`;
export const ContainerCitas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: min-content;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 10px;
  min-height: calc(100vh - 50px - 2rem - 54px);
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
`;
export const ContainerCita = styled.article`
  padding: 0.5rem;
  color: ${(props) => props.theme.oscuro};
  position: relative;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.grisClaro};
  ${(props) =>
    props.noDisponible &&
    css`
      cursor: not-allowed;
      &::after {
        content: "LA CITA EXPIRO O HA SIDO RECHAZADA.";
        position: absolute;
        ${flex()};
        text-align: center;
        z-index: 1;
        padding: 10px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(1px);
        border-radius: 8px;
        color: ${(props) => props.theme.claro};
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 1;
      }
    `};
  ${(props) =>
    props.estado === "aceptada" &&
    css`
      border: 2px solid ${(props) => props.theme.azul};
    `};
  ${(props) =>
    props.estado === "rechazada" &&
    css`
      border: 2px solid ${(props) => props.theme.rojo};
    `};
  & > div {
    ${flex("column")};
    align-items: stretch;
  }

  h3 {
    color: ${(props) => props.theme.oscuro};
  }
`;
export const ContainerFotoCita = styled.div`
  ${flex("column")};
  gap: 10px;
  max-width: 250px;
  margin: 0 auto;
  padding: 1rem;

  img {
    border-radius: 50%;
    aspect-ratio: 1;
    object-fit: cover;
    width: min(80%, 200px);
  }
`;
export const ContainerInformacionCita = styled.div`
  background-color: white;
  padding: 0.5rem;
  ${flex("column", "flex-start", "stretch")};
`;
