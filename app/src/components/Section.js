import React from "react";

const Section = ({ children }) => {
    return (
        <div style={{ margin: "10px" }}>
            {children}
        </div>
    );
}; 
//Usamos los children para pasar las propiedades de el return como un componente

export default Section;