
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout 
        heading = "Welcome to my website"
        fContent = "@ 2023 My Website. All right reserved"
        >
          <p>This is the content of my website</p>
        </PageLayout>


    </div>
  )
}

export default App
