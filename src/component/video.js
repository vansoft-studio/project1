import React, { Component } from 'react';
import '../App.css';
class Background extends Component {
  render() {
    return (
      <div class="first">
        <div class="content">
          <h1><b><i>videobackground is the new cool thing...</i> </b> </h1> <br></br>
          <div className="hai"><h3><span><b> would you like it on your website? </b></span></h3></div>
        </div>
        <video autoPlay muted loop src={require(`../asset/wow.mp4`)} width="1920" height="1080" fluid />
      </div>
    )
  }
}
export default Background
