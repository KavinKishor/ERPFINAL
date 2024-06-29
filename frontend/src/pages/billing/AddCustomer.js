import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./customer.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


import { useState } from "react";
import { toast } from 'react-toastify';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { AddCustomers,UpdateCustomers } from "../../URL/url";

function AddCustomer({fetchCustomers}) {

  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const navigate=useNavigate()
  //ADD customers 
  const [CustomerName,setCustomerName]=useState("")
  const [CustomerAddress,setCustomerAddress]=useState("")
  const [CustomerContact,setCustomerContact]=useState("")
  const [CustomerGST,setCustomerGST]=useState("")
  const [cusData,setCustData]=useState([])
  //

//post
 const submitCustomer=(e)=>{
  e.preventDefault()
  axios.post(AddCustomers,{CustomerName,CustomerAddress,CustomerContact,CustomerGST})
.then((res)=>
  {console.log(res.data)
  toast.success("customer added successfully")
  setCustomerName("")
  setCustomerAddress("")
  setCustomerContact("")
  setCustomerGST("")
  fetchCustomers()
  
}
).catch((err)=>(console.log(err)))

}

    //Pagenation
 const [currentPage,setCurrentPage]=useState(1)
 const recordsPerpage=5;
 const StartIndex=(currentPage-1)*recordsPerpage
 const lastIndex=Math.min(StartIndex+recordsPerpage,cusData.length)
 const currentItems=cusData.slice(StartIndex,lastIndex)
 const lastPage=Math.ceil(cusData.length/recordsPerpage)
 const handlePage=(pageNumber)=>{
  setCurrentPage(pageNumber)
}

const handlePrev=()=>{
if(currentPage!==1){
  setCurrentPage(currentPage-1)
}
}
const handleNext=()=>{
if(currentPage!==lastPage){
  setCurrentPage(currentPage+1)
}
}

//

  //updatecustomer

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (v) =>{
    setShow(true)
    setCustomerName(v.CustomerName)
    setCustomerAddress(v.CustomerAddress)
    setCustomerContact(v.CustomerContact)
    setCustomerGST(v.CustomerGST)
    setSelectedCustomerId(v.id)
  } 
  const editCustomer=()=>{
    
  }
  const delCustomer=()=>{
    console.log("delete");
  } 

  const updateCustomer=(v)=>{
      axios.put(`${UpdateCustomers}/${v.id}`,{CustomerName,CustomerAddress,CustomerContact,CustomerGST})
   setCustomerName("")
   setCustomerAddress("")
   setCustomerContact("")
   setCustomerGST("")
  }

//
  // const {
  //   submitCustomer,setCustomerGST,CustomerGST,setCustomerContact,CustomerContact,
  //   setCustomerAddress,CustomerAddress,setCustomerName,CustomerName}=useContext(customerContext)
    
 return (
    <div>
    <form className='customer' onSubmit={submitCustomer}>
        <Row>
            <h3 className='title'>Add Customers</h3>
        </Row>
      <Row>
        <Form.Label className ="mx-3" column="sm" lg={2}>
        Customer Name
        </Form.Label>
        <Col>
          <Form.Control required size="sm" type="text" placeholder="Customer Name" value={CustomerName} onChange={(e=>setCustomerName(e.target.value))} />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label className ="mx-3" column="sm" lg={2}>
        Address
        </Form.Label>
        <Col>
          <Form.Control  required size="sm" type="text" placeholder="Address" value={CustomerAddress} onChange={(e=>setCustomerAddress(e.target.value))} />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label className ="mx-3" column="sm" lg={2}>
        Contact Nmuber
        </Form.Label>
        <Col>
          <Form.Control required size="sm" type="number" placeholder="Contact Number"value={CustomerContact} onChange={(e=>setCustomerContact(e.target.value))}  />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label className ="mx-3" column="sm" lg={2}>
        Customer Gst
        </Form.Label>
        <Col>
          <Form.Control required size="sm" type="text" placeholder="Customer GST"value={CustomerGST} onChange={(e=>setCustomerGST(e.target.value))}  />
        </Col>
      </Row>
      <br />
      <div className='btn_container'>
      <Button variant="primary" className='btn_customer' type='submit'>ADD</Button>
    <Link to='/viewcustomers'><Button variant="primary" className='btn_customer' type='submit'>View</Button></Link>
      </div>
      <br />
      </form>
     </div>
  );
}

export default AddCustomer;