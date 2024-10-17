import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import "./students.css"
import img_group from "../../assets/group.png"
import img_1 from "../../assets/new.png"
import Button from 'react-bootstrap/Button'
import axios from "axios"
import { AddStudent } from '../../URL/url';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




const AddStudents = ({  fetchStudents }) => {
  const navigate=useNavigate()
 //form -EDUCATION
  const [showfieldHsc,setshowFieldHsc]=useState(false)
  const [showfieldDeg,setshowFieldDeg]=useState(false)

//Form Auto Total
  const [userinput,setuserInput]=useState('')
  const [result,setResult]=useState('')


  //checkbox
  const [isMarried,setisMarried]=useState(false)
  const [isUnMarried,setIsUnMarried]=useState(false)
  const [isMale,setIsMale]=useState(false)
  const [isFemale,setIsFemale]=useState(false)

  //form
  const [StudentFirstName,setStudentFirstName]=useState("")
  const [StudentLastName,setStudentLastName]=useState("")
  const [FatherName,setFatherName]=useState("")
  const [BloodGroup,setBloodGroup]=useState("")
  const [EducationalQualification,setEducationalQualification]=useState("")
  const [Address,setAddress]=useState("")
  const [ContactNumber,setContactNumber]=useState("")
  const [EducationInsititute,setEducationInsititute]=useState("")
  const [GraduationDate,setGraduationDate]=useState("")
  const [TotalMarks,setTotalMarks]=useState("")
  const [InsitituteOFStudied,setInsitituteOFStudied]=useState("")
  const [GraduatedDate,setGraduatedDate]=useState("")
  const [FeePaid,setFeePaid]=useState("")
  const [imageUrl,setImageUrl]=useState(null)
  const [totalfee,settotalfee]=useState(5000)
  
//Auto total

  const constantValue = 50000
  
  
  let handlefee=(e)=>{
    let newvalue=e.target.value
    setuserInput(newvalue)
    calculatefee(newvalue)
  }

  let calculatefee=(userInput)=>{
    setResult(constantValue-userInput)
  }

  let commonHandleChange=(e)=>{
    handlefee(e)
    setFeePaid(e.target.value)
  }

  // form EDUCATION
    const handleClickDeg=()=>{
      setshowFieldDeg(!showfieldDeg)
    }
    const handleClickHsc=()=>{
      setshowFieldHsc(!showfieldHsc)
    }
 
    
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formdata = new FormData();
    formdata.append("image", imageUrl);
    formdata.append("StudentFirstName", StudentFirstName);
    formdata.append("StudentLastName", StudentLastName);
    formdata.append("FatherName", FatherName);
    formdata.append("BloodGroup", BloodGroup);
    formdata.append("Address", Address);
    formdata.append("ContactNumber", ContactNumber);
    formdata.append("EducationInsititute", EducationInsititute);
    formdata.append("GraduationDate", GraduationDate);
    formdata.append("TotalMarks", TotalMarks);
    formdata.append("InsitituteOFStudied", InsitituteOFStudied);
    formdata.append("GraduatedDate", GraduatedDate);
    formdata.append("isMale", isMale);
    formdata.append("isFemale", isFemale);
    formdata.append("isMarried", isMarried);
    formdata.append("isUnMarried", isUnMarried);
    formdata.append("FeePaid", FeePaid);
    formdata.append("totalfee", totalfee);
    formdata.append("result", result);
    formdata.append("EducationalQualification", EducationalQualification);

  //  for (let [key, value] of formdata.entries()) {
  //    console.log(key, value); // Ensure image is appended correctly
  //  }
    try {
      const response = await axios.post(AddStudent, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Student detail added successfully");
      // navigate("/viewstudents");
      resetForm();
      fetchStudents()
    } catch (error) {
      console.error('Error uploading student details:', error);
      toast.error("Failed to add student details");
    }
  };
  
  const resetForm = () => {
    setStudentFirstName("");
    setStudentLastName("");
    setFatherName("");
    setBloodGroup("");
    setEducationalQualification("");
    setContactNumber("");
    setAddress("");
    setEducationInsititute("");
    setGraduatedDate("");
    setGraduationDate("");
    setInsitituteOFStudied("");
    setFeePaid("");
    settotalfee("");
    setResult("");
    setTotalMarks("");
    setImageUrl("");
    setisMarried(false);
    setIsMale(false);
    setIsFemale(false);
    setIsUnMarried(false);
  };

  return (
    <div className="formspace">
      <form className="form-horizontal form_center" onSubmit={handleSubmit}>
        <div className="btn1">
          <button type="button" className="btn btn-outline-info mt-3 btn-1">
            <Figure>
              <Figure.Image width={20} height={50} alt="100x50" src={img_1} />
              <Figure.Caption> Add Students</Figure.Caption>
            </Figure>
          </button>
          <Link to="/viewstudents">
            <button
              className="btn btn-outline-warning btn-1 mt-3 "
              type="button"
            >
              <Figure>
                <Figure.Image
                  width={20}
                  height={50}
                  alt="100x50"
                  src={img_group}
                />
                <Figure.Caption>View Students</Figure.Caption>
              </Figure>
            </button>
          </Link>
        </div>
        <br />
        <Row>
          <Form.Label className="mx-auto" column="sm" lg={2}>
            Student First Name
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="text"
              placeholder="First Name"
              value={StudentFirstName}
              onChange={(e) => setStudentFirstName(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Student Last Name
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="text"
              placeholder="Last Name"
              value={StudentLastName}
              onChange={(e) => setStudentLastName(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Father Name
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="text"
              placeholder="Father Name"
              value={FatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Blood Group
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="text"
              placeholder="Blood Group"
              value={BloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Qualificaion
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="text"
              placeholder="Educational qualification"
              value={EducationalQualification}
              onChange={(e) => setEducationalQualification(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Address
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="text"
              placeholder="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Contact Number
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="number"
              placeholder="Contact Number"
              value={ContactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Gender
          </Form.Label>
          <Col className="d-flex ">
            <div className="form-check">
              <input
                className="form-check-input "
                type="checkbox"
                value={isMale}
                id="defaultCheck1"
                onChange={() => setIsMale(!isMale)}
              />
              <label className="form-check-label mx-2" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={isFemale}
                id="defaultCheck1"
                onChange={() => setIsFemale(!isFemale)}
              />
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
          <Col>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions1"
                value={isMarried}
                onChange={() => setisMarried(!isMarried)}
              />
              <label className="form-check-label" for="inlineRadio1">
                {" "}
                Married
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions2"
                value={isUnMarried}
                onChange={() => setIsUnMarried(!isUnMarried)}
              />
              <label className="form-check-label" for="inlineRadio2">
                {" "}
                Un-Married
              </label>
            </div>
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Higher Education
          </Form.Label>
          <Col className="d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                onClick={handleClickHsc}
              />
              <label className="form-check-label mx-2" for="inlineRadio1">
                HSC
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                onClick={handleClickDeg}
              />
              <label className="form-check-label" for="inlineRadio2">
                DIPLAMO
              </label>
            </div>
          </Col>
        </Row>
        <div>
          {showfieldHsc && (
            <div>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Educational Insititute
                </Form.Label>
                <Col>
                  <Form.Control
                    className="inputform"
                    size="sm"
                    type="text"
                    placeholder="Studied insititute"
                    value={EducationInsititute}
                    onChange={(e) => setEducationInsititute(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Graduation Date
                </Form.Label>
                <Col>
                  <Form.Control
                    className="inputform"
                    size="sm"
                    type="date"
                    placeholder="Graduated date"
                    value={GraduationDate}
                    onChange={(e) => setGraduationDate(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Total Marks
                </Form.Label>
                <Col>
                  <Form.Control
                    className="inputform"
                    size="sm"
                    type="number"
                    placeholder="Total Markes scored"
                    value={TotalMarks}
                    onChange={(e) => setTotalMarks(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
          )}
        </div>
        <br />
        <div>
          {showfieldDeg && (
            <div>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Insititute Of Studeied
                </Form.Label>
                <Col>
                  <Form.Control
                    className="inputform"
                    size="sm"
                    type="text"
                    placeholder="Insitute"
                    value={InsitituteOFStudied}
                    onChange={(e) => setInsitituteOFStudied(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Graduated Date
                </Form.Label>
                <Col>
                  <Form.Control
                    className="inputform"
                    size="sm"
                    type="date"
                    placeholder="Date of Graduation"
                    value={GraduatedDate}
                    onChange={(e) => setGraduatedDate(e.target.value)}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Form.Label column="sm" lg={2}>
                  Total Marks
                </Form.Label>
                <Col>
                  <Form.Control
                    className="inputform"
                    size="sm"
                    type="number"
                    placeholder="Total markes"
                    value={TotalMarks}
                    onChange={(e) => setTotalMarks(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
          )}
        </div>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Total Fee
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="number"
              value={constantValue}
              placeholder="Total Fee"
              defaultValue
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Fee Paid
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="number"
              value={FeePaid}
              placeholder="Paid Fee"
              onChange={commonHandleChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Balance Fee
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="text"
              value={result}
              placeholder="Balance"
              onClick={(e) => setResult(e.target.value)}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column="sm" lg={2}>
            Attachement
          </Form.Label>
          <Col>
            <Form.Control
              className="inputform"
              size="sm"
              type="file"
              accept="image/*"
              // value={imageUrl}
              onChange={(e) => setImageUrl(e.target.files[0])}
              placeholder="Attachments of bills or photo"
            />
          </Col>
        </Row>
        <br />
        <Button
          size="sm"
          className="button-submit"
          variant="primary"
          type="submit"
        >
          Add Studet Detail
        </Button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default AddStudents


