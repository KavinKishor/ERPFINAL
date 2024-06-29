import Card from 'react-bootstrap/Card';
import "./dashboard.css"
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

function Dashboard({alldatas,cusData,allstudatas}) {
  return (
    <div className='card_class'>
      <Card bg={"warning"} className='cardspace'
      text='light'>
      <Card.Header> EMPLOYEES</Card.Header>
      <Card.Body>
      
        <Card.Title className="total"><FaUsersCog /> ({alldatas.length})</Card.Title>
        
      </Card.Body>
    </Card>
    <Card bg={"dark"}className='cardspace'
      text='light'>
      <Card.Header>STUDENTS</Card.Header>
      <Card.Body>
        <Card.Title className="total"><FaUserGraduate /> ({allstudatas.length})</Card.Title>
       
      </Card.Body>
    </Card>
    <Card
    bg={"info"}
    text='light' className='cardspace'>
      <Card.Header>CUSTOMERS</Card.Header>
      <Card.Body>
        <Card.Title className="total"><FaUsers /> ({cusData.length})</Card.Title>
        
      </Card.Body>
    </Card>
    <Card bg={"danger"}className='cardspace'
      text='light'>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        
      </Card.Body>
    </Card>
    <div>
     <Link to='/'><button className='btn btn-warning' >Log-out</button></Link> 
    </div>
    </div>
       
  );
}

export default Dashboard;