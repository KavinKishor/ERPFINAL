import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DeleteStudent, GetStudent, UpdateStudent } from '../../URL/url';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './students.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const ViewStudents = ({ allstudatas, fetchStudents, setAllstudatas }) => {
  const [editingStudentId, setEditingStudentId] = useState(null);
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

  const handleEdit = (studentId) => {
    setEditingStudentId(studentId);
  };

  const handleDelete = (studentId) => {
    axios
      .delete(`${DeleteStudent}/${studentId}`)
      .then((res) => {
        setAllstudatas((prevStuData) => prevStuData.filter((student) => student._id !== studentId));
        toast.success('Student deleted');
        fetchStudents();
      })
      .catch((error) => {
        console.error('Error deleting student:', error);
        toast.error('Failed to delete student');
      });
  };

  const handleInputChange = (e, studentId, field) => {
    const updatedValue = e.target.value;
    setAllstudatas((prevStuData) =>
      prevStuData.map((student) =>
        student._id === studentId ? { ...student, [field]: updatedValue } : student
      )
    );
  };

  const handleDateChange = (date, studentId, field) => {
    setAllstudatas((prevStuData) =>
      prevStuData.map((student) =>
        student._id === studentId ? { ...student, [field]: date } : student
      )
    );
  };
  
//update to server
  const handleSave = (studentId) => {
    setEditingStudentId(null);
    const editedStudent = allstudatas.find((student) => student._id === studentId);
  
    const formData = new FormData();
    Object.keys(editedStudent).forEach((key) => {
      if (key !== 'newImage') {
        formData.append(key, editedStudent[key]);
      }
    });
  
    if (editedStudent.newImage) {
      formData.append('image', editedStudent.newImage);
    }
  
    axios
      .put(`${UpdateStudent}/${studentId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        fetchStudents();
        toast.success('Student updated successfully');
      })
      .catch((error) => {
        console.error('Error updating student:', error);
        toast.error('Failed to update student');
      });
  };
  
// date formate update
  const formatDate = (date) => {
    return date ? format(new Date(date), 'dd/MM/yyyy', { locale: ptBR }) : '-';
  };
  //image update
  const handleImageChange = (e, studentId) => {
    const file = e.target.files[0];
    setAllstudatas((prevStuData) =>
      prevStuData.map((student) =>
        student._id === studentId ? { ...student, newImage: file } : student
      )
    );
  };




  return (
    <div className="view_student">
      <div className="text-center header">
        <h2>Students List</h2>
        <p>Total Students: {allstudatas.length}</p>
      </div>
      <div className="tablespace">
        <table className="table_border">
          <thead className="table_top">
            <tr>
              <th style={{ outline: 'none' }}>SNO</th>
              <th style={{ outline: 'none' }}>First Name</th>
              <th className="p-3">Last Name</th>
              <th>Father Name</th>
              <th>Blood Group</th>
              <th>Gender</th>
              <th>Marital Status</th>
              <th>Address</th>
              <th>Educational Qualification</th>
              <th>Educational Institute (HSC)</th>
              <th>Graduated Date (HSC)</th>
              <th>Institute of Studied (DIPLOMA)</th>
              <th>Graduation Date (DIPLOMA)</th>
              <th>Total Marks (%)</th>
              <th>Total Fee</th>
              <th>Fee Paid</th>
              <th>Balance Fee</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ alignItems: 'center' }}>
            {currentItem.map((student, index) => (
              <tr key={student._id}>
                <td>{firstIndex + index + 1}</td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.StudentFirstName}
                      onChange={(e) => handleInputChange(e, student._id, 'StudentFirstName')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.StudentFirstName || '-'}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.StudentLastName}
                      onChange={(e) => handleInputChange(e, student._id, 'StudentLastName')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.StudentLastName || '-'}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.FatherName}
                      onChange={(e) => handleInputChange(e, student._id, 'FatherName')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.FatherName || '-'}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.BloodGroup}
                      onChange={(e) => handleInputChange(e, student._id, 'BloodGroup')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.BloodGroup || '-'}</span>
                  )}
                </td>
                <td>{student.booleanValue ? 'Female' : 'Male'}</td>
                <td>{student.booleanValue ? 'Unmarried' : 'Married'}</td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.Address}
                      onChange={(e) => handleInputChange(e, student._id, 'Address')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.Address || '-'}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.EducationalQualification}
                      onChange={(e) =>
                        handleInputChange(e, student._id, 'EducationalQualification')
                      }
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.EducationalQualification || '-'}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.EducationInsititute}
                      onChange={(e) => handleInputChange(e, student._id, 'EducationInsititute')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.EducationInsititute || '-'}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <DatePicker
                      selected={student.GraduatedDate ? new Date(student.GraduatedDate) : null}
                      onChange={(date) => handleDateChange(date, student._id, 'GraduatedDate')}
                      dateFormat="dd/MM/yyyy"
                      locale={ptBR}
                      className="form-control border"
                    />
                  ) : (
                    <span>{formatDate(student.GraduatedDate)}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="text"
                      value={student.InsitituteOFStudied}
                      onChange={(e) => handleInputChange(e, student._id, 'InsitituteOFStudied')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.InsitituteOFStudied || '-'}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <DatePicker
                      selected={student.GraduationDate ? new Date(student.GraduationDate) : null}
                      onChange={(date) => handleDateChange(date, student._id, 'GraduationDate')}
                      dateFormat="dd/MM/yyyy"
                      locale={ptBR}
                      className="form-control border"
                    />
                  ) : (
                    <span>{formatDate(student.GraduationDate)}</span>
                  )}
                </td>
                <td>
                  {editingStudentId === student._id ? (
                    <input
                      type="number"
                      value={student.TotalMarks}
                      onChange={(e) => handleInputChange(e, student._id, 'TotalMarks')}
                      className="form-control border"
                    />
                  ) : (
                    <span>{student.TotalMarks || '-'}</span>
                  )}
                </td>
                <td>{student.totalfee || '-'}</td>
                <td>{student.FeePaid || '-'}</td>
                <td>{student.result || '-'}</td>
                <td>
  {editingStudentId === student._id ? (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, student._id)}
        className="form-control"
      />
      <Image
        src={student.newImage ? URL.createObjectURL(student.newImage) : require(`../../imgs/${student.imageUrl}`)}
        // roundedCircle
        alt="photo"
        width="100px"
      />
    </div>
  ) : (
     <Image
     src={require(`../../imgs/${student.imageUrl}`)}
                      // roundedCircle
                      alt="photo"
                      width="100px"
                      height="100px"
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
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student._id)}
                  >
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
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
              disabled={currentPage === 1}
            >
              Prev
            </a>
          </li>

          {Array.from({ length: nthpage }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </a>
            </li>
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

