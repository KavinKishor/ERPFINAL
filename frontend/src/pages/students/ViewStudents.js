import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DeleteStudent, GetStudent, UpdateStudent } from '../../URL/url'
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const ViewStudents = ({ allstudatas, fetchStudents,setAllstudatas }) => {
  //get
  // const [allstudatas, setAllstudatas] = useState([]);

  //crud
  const [editingStudentId, setEditingStudentId] = useState(null);

  //pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = Math.min(firstIndex + recordsPerPage, allstudatas.length);
  const currentItem = allstudatas.slice(firstIndex, lastIndex);
  const nthpage = Math.ceil(allstudatas.length / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nthpage) {
      setCurrentPage(currentPage + 1);
    }
  };
  //get
  // useEffect(() => {
  //   axios.get(GetStudent).then((res) => setAllstudatas(res.data));
  // }, []);
  // console.log(allstudatas);
  //crud

  const handleEdit = (studentId) => {
    setEditingStudentId(studentId);
  };

  const handleDelete = (studentId) => {
    axios
      .delete(`${DeleteStudent}/${studentId}`)
      .then((res) => {
        
        setAllstudatas((prevStuData) => prevStuData.filter(student => student._id !== studentId));
       
        // window.location.reload();
        toast.success("student deleted");
        fetchStudents()
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting customer:", error);
        toast.error("Failed to delete customer");
      });
  };

  const handleInputChange = (e, studentId, field) => {
    const updatedValue = e.target.value;
    setAllstudatas((prevStuData) =>
      prevStuData.map((student) =>
        student._id === studentId
          ? { ...student, [field]: updatedValue }
          : student
      )
    );
  };

  const handleSave = (studentId) => {
    setEditingStudentId(null);
    const editedStudent = allstudatas.find(
      (student) => student._id === studentId
    );
    axios
      .put(`${UpdateStudent}/${studentId}`, editedStudent)
      .then(() => {
        axios
          .get(GetStudent)
          .then((res) => setAllstudatas(res.data))
          .catch((error) => console.error("Error fetching customers:", error));
      })
      .catch((error) => {
        console.error("Error updating customer:", error);
      });
  };

  return (
    <div className="view_student">
      <div className="text-center header">
        <h2>Students List</h2>
        <p>Total Students:{allstudatas.length}</p>
      </div>
      <div className="tablespace">
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th style={{ outline: "none" }}>SNO</th>
              <th style={{ outline: "none" }}>First Name</th>
              <th>Last Name</th>
              <th>Father Name</th>
              <th>Blood Group</th>
              <th>Gender</th>
              <th>Marrital Statusr</th>
              <th>Address</th>
              <th>Educational Qualification</th>
              <th>Educational Insititute(HSC)</th>
              <th>Graduated Date(HSC)</th>
              <th>Institute of studied(DIPLAMO)</th>
              <th>Graduation Date(DIPLAMO)</th>
              <th>Total Marks(%)</th>
              <th>Total Fee</th>
              <th>Fee Paid</th>
              <th>Balance Fee</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ alignItems: "center" }}>
            {currentItem.map((student, i) => {
              return (
                <tr key={student._id}>
                  <td>{firstIndex + i + 1}</td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.StudentFirstName}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "StudentFirstName")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.StudentFirstName}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.StudentLastName}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "StudentLastName")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.StudentLastName}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.FatherName}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "FatherName")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.FatherName}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.BloodGroup}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "BloodGroup")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.BloodGroup}</span>
                    )}
                  </td>
                  <td>{student.booleanValue ? "Female" : "Male"}</td>
                  <td>{student.booleanValue ? "Unmarried" : "Married"}</td>

                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.Address}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "Address")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.Address}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.EducationalQualification}
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            student._id,
                            "EducationalQualification"
                          )
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.EducationalQualification}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.EducationInsititute}
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            student._id,
                            "EducationInsititute"
                          )
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.EducationInsititute}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="date"
                        value={student.GraduatedDate}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "GraduatedDate")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.GraduatedDate}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="text"
                        value={student.InsitituteOFStudied}
                        onChange={(e) =>
                          handleInputChange(
                            e,
                            student._id,
                            "InsitituteOFStudied"
                          )
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.InsitituteOFStudied}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="date"
                        value={student.GraduationDate}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "GraduationDate")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.GraduationDate}</span>
                    )}
                  </td>
                  <td>
                    {editingStudentId === student._id ? (
                      <input
                        type="number"
                        value={student.TotalMarks}
                        onChange={(e) =>
                          handleInputChange(e, student._id, "TotalMarks")
                        }
                        class="form-control border"
                      />
                    ) : (
                      <span>{student.TotalMarks}</span>
                    )}
                  </td>
                  <td>{student.totalfee}</td>
                  <td>{student.FeePaid}</td>
                  <td>{student.result}</td>
                  <td>
                  {editingStudentId === student._id ? (
                    <div key={student._id}>
                      <Col xs={6} md={4}>
                        <Image
                          src={require(`../../imgs/${student.imageUrl}`)}
                          roundedCircle
                          alt="photo"
                          width="100px"
                        />
                      </Col>
                      
                    </div>
                     ) : (
                      <Image
                          src={require(`../../imgs/${student.imageUrl}`)}
                          roundedCircle
                          alt="photo"
                          width="100px"
                        />
                    )}
                  </td>
                  <td className="action_btns">
                    {editingStudentId === student._id ? (
                      <button
                        className="mx-2 btn btn-success"
                        onClick={() => handleSave(student._id)}
                      >
                        <i className="bi bi-check2-square"></i>
                      </button>
                    ) : (
                      <button
                        className="mx-2 btn btn-primary"
                        onClick={() => handleEdit(student._id)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    )}
                    <div>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(student._id)}
                      >
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={prevPage}
              disable={currentPage === 1}
            >
              Prev
            </a>
          </li>

          {Array.from({ length: nthpage }, (_, i) => (
            <a
              href="#"
              className={`page-link ${currentPage === i + 1 ? "active" : ""}`}
              key={i}
              onClick={() => handlePageChange(i + 1)}
              disabled={currentPage === i + 1}
            >
              {i + 1}
            </a>
          ))}

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ViewStudents;
