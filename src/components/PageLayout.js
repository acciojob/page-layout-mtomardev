import React from "react";

const PageLayout = ({heading, fContent, children}) =>{
    return(
        <div>
            <header>{heading}</header>
            {/* <h1>{heading}</h1> */}
            {children}
            <footer>{fContent}</footer>
            {/* <h3>{fContent}</h3> */}
        </div>
    )
}

export default PageLayout