import React, { Component } from 'react'
import '../App.css';


 
class Abc extends Component {
  render () {

    return (
    
    
  <div>

    
<div class="content">
  <h1>video background is the new cool thing..</h1>
  
 <h1> would you like it on your website?</h1>
 
  </div>

 

<video src={require(`../asset/web.mp4`)} loop autoPlay width="1920" height="1080" />


</div>
  
    )
  }
}
export default Abc


