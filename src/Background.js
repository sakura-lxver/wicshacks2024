import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import './css/Home.css'
import { CardGroup } from "react-bootstrap";
import cutiepills from './Pass me my happy pills.gif';
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
        <div className="home-background">
          <div>
            <h1>Jeonghan's wife</h1>
            <div className="background-content">
                <h3 className="background-content">Larissa Franco is the wife of Yoon Jeonghan</h3>
            </div>
           
            <div className="scroll-down-btn-container">

            </div>
            <br /> 
            <div className="bubble">
              <p>This is a circular bubble with text</p>
            </div>
            <div className="fixed-image">
                <img src={cutiepills} alt="Image" style={{ width: '30vw', height: '40vh' }} />
            </div>
            <div className="scroll-down-btn-container"></div>
            <CardGroup className='rounded'>
              <Card style={{ width:'18rem', marginRight: '30px', backgroundColor: '#bde3ff'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight: "bold"}}>91%</Card.Title>
                  <Card.Text>
                    of all prescriptions in the US have a generic substitute
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width:'18rem', marginRight: '30px', backgroundColor: '#bde3ff'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight: "bold"}}>80-85%</Card.Title>
                  <Card.Text>
                    General substitutes cost this much less than brand name drugs
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width:'18rem', marginRight: '30px', backgroundColor: '#bde3ff'}}>
                <Card.Body>
                  <Card.Title style={{fontWeight: "bold"}}>100%</Card.Title>
                  <Card.Text>
                    of generic drugs meet the same FDA standards as brand-name drugs
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </>
    );
  }
  
  export default Background;