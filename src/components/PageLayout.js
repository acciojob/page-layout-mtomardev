import React from "react";

const PageLayout = ({header, footer, children}) =>{
    return(
        <div>
            <header>{header}</header>
            {/* <h1>{heading}</h1> */}
            {children}
            <footer>{footer}</footer>
            {/* <h3>{fContent}</h3> */}
        </div>
    )
}

export default PageLayout