import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import './css/App.css'
function Background() {
    // Function to scroll down
    const scrollDown = () => {
      window.scrollBy({
        top: window.innerHeight, // Scroll down by the height of the viewport
        behavior: 'smooth' // Smooth scrolling behavior
      });
    };
  
    return (
      <>
      <Navbar/>
        <div className="app-background">
          <div className="background-content">
            <h1>Jeonghan's wife</h1>
            <h3>Larissa Franco is the wife of Yoon Jeonghan</h3>
           
            <div className="scroll-down-btn-container">

            </div>
            <br /> 
            <div className="bubble">
              <p>This is a circular bubble with text</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Background;