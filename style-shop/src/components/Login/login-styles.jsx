import styled from "styled-components";

import { flex, media, Button } from "../../styles/utilStyles"; 

export const ContainerLogin = styled.div`
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  background-color: white;
  ${flex("column")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 13em;
  width: min(400px, 90%);
  max-height: 100%;
  overflow-y: auto;
  ${media.laptop} {
    position: relative;
    height: min-content;
  } ;
`;

export const TitleLogin = styled.h3`
  color: #1E1E1E;
  font-size: 2rem;
`;

export const ContainerFormLogin = styled.div`
  width: 100%;
  form {
    ${flex("column", "center", "stretch")};
    gap: 10px;
  }
`;
export const ParrafoAvisoRegister = styled.p`
  font-size: 12px;
  text-align: center;
  a {
    color: ${(props) => props.theme.azul};
  }
`;

export const ContainerCabecera = styled.div`
  ${flex()};
  position: relative;
  width: 100%;
`;

export const ButtonAdmin = styled(Button)`
  font-size: 12px;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: -10px;
  right: 0;
  color: ${(props) => props.theme.azul};
`;

export const ContainerLogin2 = styled.div`
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  background-color: white;
  ${flex("column")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 20em;
  width: min(400px, 90%);
  max-height: 100%;
  overflow-y: auto;
  ${media.laptop} {
    position: relative;
    height: min-content;
  } ;
`;