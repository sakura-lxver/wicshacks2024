import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import './css/Home.css'
import { CardGroup } from "react-bootstrap";
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
          <div className="background-content">
            <h1>Jeonghan's wife</h1>
            <h3>Larissa Franco is the wife of Yoon Jeonghan</h3>
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