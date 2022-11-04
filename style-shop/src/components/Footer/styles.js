import styled from "styled-components";

import { flex } from "../../styles/utilStyles";

export const ContainerFooter = styled.footer`
  ${flex()};
  padding: 1rem;
  p {
    text-align: center;

    color: ${(props) => props.theme.claro};
  }
  background-color: ${(props) => props.theme.azul};
`;
