import React from 'react';
import Background from './component/background_video';
import ContactPage from './component/contact_page';
import Slideshow from './component/image_slide';
import Login from './component/login_page';


import './App.css';


function App() {
  return (
   
    
       
    
      <div className="App">
      <Background />
      <div className="alignment">
        <Slideshow/>
        </div>
        <div className="bg_img">
          <Login></Login>
          </div>
        <div className="App-background">
          <ContactPage/>
        </div>
       
      </div>
  )
}
export default App;