import React, {  useState } from 'react'
import { toast } from 'react-toastify';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import img_group from "../../assets/group.png"
import img_1 from "../../assets/new.png"
import Button from 'react-bootstrap/Button'
import axios from "axios"
import { AddEmployees } from '../../URL/url';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const AddEmployeespage = ({fetchEmployees}) => {
const navigate=useNavigate()

  //checkbox
  const [isMarried,setisMarried]=useState(false)
  const [isUnMarried,setIsUnMarried]=useState(false)
  const [isMale,setIsMale]=useState(false)
  const [isFemale,setIsFemale]=useState(false)

  //form
  const [EmployeeFirstName,setEmployeeFirstName]=useState("")
  const [EmployeeLastName,setEmployeeLastName]=useState("")
  const [FatherName,setFatherName]=useState("")
  const [BloodGroup,setBloodGroup]=useState("")
  const [EducationalQualification,setEducationalQualification]=useState("")
  const [Address,setAddress]=useState("")
  const [ContactNumber,setContactNumber]=useState("")
  const [Dateofbirth,setDateofbirth]=useState("")
  const [Emailid,setEmailid]=useState("")
  const [Salary,setSalary]=useState("")
  const [Dateofjoining,setDateofjoining]=useState("")
  const [Dateofrelieveing,setDateofrelieveing]=useState("")
  const [Experience,setExperience]=useState("")
  const [imageUrl,setimageUrl]=useState(null)
 
//form Final

  const handleSubmit =async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("EmployeeFirstName", EmployeeFirstName);
    formData.append("EmployeeLastName", EmployeeLastName);
    formData.append("FatherName", FatherName);
    formData.append("BloodGroup", BloodGroup);
    formData.append("EducationalQualification", EducationalQualification);
    formData.append("Address", Address);
    formData.append("ContactNumber", ContactNumber);
    formData.append("Dateofbirth", Dateofbirth);
    formData.append("Emailid", Emailid);
    formData.append("Salary", Salary);
    formData.append("Dateofjoining", Dateofjoining);
    formData.append("Dateofrelieveing", Dateofrelieveing);
    formData.append("isMale", isMale);
    formData.append("isFemale", isFemale);
    formData.append("isMarried", isMarried);
    formData.append("isUnMarried", isUnMarried);
    formData.append("Experience", Experience);
    formData.append("image", imageUrl);
    try{
      const response=await axios.post(AddEmployees, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
          toast.success("Employee detail added successfully");
          navigate("/viewempolyees");
          resetForm();
          fetchEmployees()
        }catch (error) {
            console.error('Error uploading employee details:', error);
            toast.error("Failed to add employee details");
          }
    }
    const resetForm=()=>{
          setEmployeeFirstName("");
          setEmployeeLastName("");
          setFatherName("");
          setBloodGroup("");
          setEducationalQualification("");
          setContactNumber("");
          setAddress("");
          setDateofbirth("");
          setEmailid("");
          setSalary("");
          setDateofjoining("");
          setDateofrelieveing("");
          setExperience("");
          setimageUrl(null);
          setisMarried(false);
          setIsMale(false);
          setIsFemale(false);
          setIsUnMarried(false);
        }
  return (
            <div >  
          <form className="form-horizontal form_center" onSubmit={handleSubmit}>
          <div className="btn1">
            <button type="button" className="btn btn-outline-info btn-1 mt-3"><Figure>
                <Figure.Image
                
                  width={20}
                  height={50}
                  alt="100x50"
                  src={img_1}/>
                <Figure.Caption> Add Employees</Figure.Caption>
                </Figure></button>
                  <Link to="/viewstudents"><button className='btn btn-outline-warning btn-1 mt-3 ' type="button" ><Figure>
                <Figure.Image
                  width={20}
                  height={50}
                  alt="100x50"
                  src={img_group}/>
                <Figure.Caption>View Employees</Figure.Caption>
              </Figure></button></Link>
            </div>
              <br />
              <Row>
                <Form.Label className ="mx-auto" column="sm" lg={2}>
                Employee First Name
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="text" placeholder="First Name" value={EmployeeFirstName} onChange={(e)=>setEmployeeFirstName(e.target.value)} />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                Employee Last Name
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="text" placeholder="Last Name" value={EmployeeLastName} onChange={(e)=>setEmployeeLastName(e.target.value)}   />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Father Name
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="text" placeholder="Father Name"value={FatherName} onChange={(e)=>setFatherName(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                Blood Group
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="text" placeholder="Blood Group" value={BloodGroup} onChange={(e)=>setBloodGroup(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                Date of Birth
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="date" placeholder="Date of Birth" value={Dateofbirth} onChange={(e)=>setDateofbirth(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                Email ID
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="email" placeholder="Emailid" value={Emailid} onChange={(e)=>setEmailid(e.target.value)} />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                Educataion Qualification
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="text" placeholder="Education" value={EducationalQualification} onChange={(e)=>setEducationalQualification(e.target.value)} />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Address
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="text" placeholder="Address" value={Address} onChange={(e)=>setAddress(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Contact Number
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="number" placeholder="Contact Number" value={ContactNumber} onChange={(e)=>setContactNumber(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                Gender
                </Form.Label>
                <Col className='d-flex '>
                <div className="form-check">
                  <input className="form-check-input " type="checkbox" value={isMale} id="defaultCheck1"onChange={()=>setIsMale(!isMale)}  />
                      <label className="form-check-label mx-2" for="flexRadioDefault1">
                        Male
                      </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value={isFemale} id="defaultCheck1" onChange={()=>setIsFemale(!isFemale)} />
                      <label className="form-check-label" for="flexRadioDefault1">
                        Female
                      </label>
                </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                Marital Status
                </Form.Label>
                <Col >
              

                                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions1"  value={isMarried} onChange={()=>setisMarried(!isMarried)}/>
                        <label className="form-check-label" for="inlineRadio1"> Married</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio"  name="inlineRadioOptions2"  value={isUnMarried}  onChange={()=>setIsUnMarried(!isUnMarried)}/>
                        <label className="form-check-label" for="inlineRadio2"> Un-Married</label>
                      </div>


                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Salary
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="number" value={Salary} placeholder="salary"  onChange={(e)=>setSalary(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Date of Joining
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="date"  value={Dateofjoining}   placeholder="Date of joinig" onChange={(e)=>setDateofjoining(e.target.value)} />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Date of Relieveing
                </Form.Label>
                <Col>
                  <Form.Control className='inputform'  size="sm" type="date" value={Dateofrelieveing} placeholder="Date of Relieveing" onChange={(e)=>setDateofrelieveing(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Experience year
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="number" value={Experience} placeholder="Experience" onChange={(e)=>setExperience(e.target.value)}  />
                </Col>
              </Row>
              <br />
              <Row>
              <Form.Label column="sm" lg={2}>
                  Photo
                </Form.Label>
                <Col>
                  <Form.Control className='inputform' size="sm" type="file" accept='image/*' onChange={(e)=>setimageUrl(e.target.files[0])} placeholder="Attachments of bills or photo"  />
                </Col>
              </Row>
              <br />
              
              <Button column="sm" variant="primary" type='submit' className='button-submit'>Add Studet Detail</Button>
              <br/>
              <br />
        </form>
    </div>
  )
}

export default AddEmployeespage