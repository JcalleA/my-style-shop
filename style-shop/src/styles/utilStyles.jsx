import styled from "styled-components";

//media querys for responsive for page
export const media = {
    blaptop: "@media (min-width:1300px)",
    laptop: "@media (min-width:1100px)", 
    tablet: "@media (min-width:768px)", 
    stablet: "@media (min-width:600px)", 
    mobile: "@media (min-width:480px)", 
}

export const theme = {
    colors: {
        fondo: "F8F9F9", 
        fondoOscuro: "#3E3E3E",
        claro: "#EEE",
        oscuro: "#1E1E1E",
        grisClaro: "rgb(190, 190, 190)",
        azulOscuro: "#0b235a",
        azul: "#0d2C76",
        azulClaro: "#1844a8",
        rojo: "#e72622",
        rojoOscuro: "#a31a18",
        amarillo: "#ffc602"
    },

};

export const flex =(direction = "row", jc = "center", ai = "center") => {
    return `
        display: flex;
        justify-content:${jc};
        flex-direction:${direction};
        align-items:${ai}
    `;
};

export const grid = (columns = 1) => {
    return `
        display: grid;
        grid-template-columns:repeat(${columns}, 1fr);
    `;
};

export const ContainerInput = styled.div`
    ${flex("column", "center", "flex-start")};
    gap: 5px;
    width: 100%;
    label {
        font-size: 12px;
        color: ${ (props) => props.theme.colors.oscuro };
    }
    input {
        width: 100px;
        &::placeholder {
            font-size: 14px;
        }
    }
    textArea {
        width: 100%;
        border: 1px solid rgb(190, 190, 190);
        border-radius: 5px;
        outline: none;
        padding: 0.5rem;
    }
`;

export const Button = styled.button`
    background-color: ${(props) => 
    props.bgr ? theme.colors.rojo : theme.colors.azul};
    color: ${(props) => props.color || theme.colors.claro};
    cursor: pointer;
    padding: 0.5rem, 1rem;
    border.radius: 0.5rem;
    transition: transform 0.3s ease;
    :hover {
        transform: scale(1.01);
    }
    :disabled {
        cursor: not-allowed;
        opacity: 0.8;
        ${flex()};
        gap: 10px
    }
`;
export const H1 = styled.h1`
    cursor: pointer;
`;