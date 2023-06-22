import React from "react";

const PageLayout = ({heading, fContent, children}) =>{
    return(
        <div>
            <h1>{heading}</h1>
            {children}
            <h3>{fContent}</h3>
        </div>
    )
}

export default PageLayout