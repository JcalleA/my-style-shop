import styled from "styled-components";
import { flex } from "../../styles/utilStyles";

export const ContainerFooter = styled.footer`
  ${flex()};
  padding: 1.5rem;
  .p-footer {
    text-align: center;
    color: ${(props) => props.theme.claro} !important;
  }
  background: ${(props) => props.theme.azul} !important;
`;
