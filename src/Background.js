import Navbar from './components/Navbar';
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
        <Navbar />
        <div className="background">
          <div className="background-content">
            <h1>Jeonghan's wife</h1>
            <h3>Larissa Franco is the wife of Yoon Jeonghan</h3>
            <div className="scroll-down-btn-container">

            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Background;