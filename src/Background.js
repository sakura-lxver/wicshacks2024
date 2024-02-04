import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import './css/Home.css'
import { CardGroup } from "react-bootstrap";
import cutiepills from './Pass me my happy pills.gif';
import speech from './speech_bubble.png';
import poppinpills from './poppin_pills (2).png';
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
                <img src={cutiepills} alt="Image" style={{ width: '35vw', height: '45vh' }} />
            </div>
            <div className="fixed-image-pills">
                <img src={poppinpills} alt="Image" style={{ width: '30vw', height: '37vh' }} />
            </div>
            <div className="fixed-image-speech">
                <img src={speech} alt="Image" style={{ width: '17vw', height: '25vh' }} />
                <div className="text-overlay">
                    Click here to livechat with me!
                </div>
                <button class="speech-button">
                    <a href="/jeonghan">Click me!</a>
                </button>
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