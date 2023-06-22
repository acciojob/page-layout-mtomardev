
import React from "react";
import './../styles/App.css';
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        
        <Header header = "Welcome to my website"/>
        <Content content = "This is the content of my website." />
        <Footer footer = "@ 2023 My Website. All right reserved."/>
        

    </div>
  )
}

export default App
