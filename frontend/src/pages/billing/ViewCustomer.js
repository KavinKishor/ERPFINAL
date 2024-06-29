import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteCustomers, GetCustomers, UpdateCustomers } from "../../URL/url";
import "./customer.css";
import { toast } from "react-toastify";
const ViewCustomer = ({setCustData,cusData,fetchCustomers}) => {
  //get
  // const [cusData, setCustData] = useState([]);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerpage = 5;
  const lastPage = Math.ceil(cusData.length / recordsPerpage);
  const startIndex = (currentPage - 1) * recordsPerpage;
  const endIndex = Math.min(startIndex + recordsPerpage, cusData.length);
  const currentItems = cusData.slice(startIndex, endIndex);
  //CRUD
  const [editingCustomerId, setEditingCustomerId] = useState(null);

  //get
  // useEffect(() => {
  //   axios
  //     .get(GetCustomers)
  //     .then((res) => setCustData(res.data))
  //     .catch((error) => console.error("Error fetching customers:", error));
  // }, []);
  //pagination
  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  //crud
  const handleEdit = (customerId) => {
    setEditingCustomerId(customerId);
  };

  const handleDelete = (customerId) => {
    axios
      .delete(`${DeleteCustomers}/${customerId}`)
      .then((res) => {
        setCustData((prevCusData)=>prevCusData.filter(customer=>customer._id!==customerId))
        // window.location.reload();
        toast.success("Customer deleted");
        fetchCustomers()
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting customer:", error);
        toast.error("Failed to delete customer");
      });
  };

  const handleInputChange = (e, customerId, field) => {
    const updatedValue = e.target.value;
    setCustData((prevCusData) =>
      prevCusData.map((customer) =>
        customer._id === customerId
          ? { ...customer, [field]: updatedValue }
          : customer
      )
    );
  };

  const handleSave = (customerId) => {
    setEditingCustomerId(null);
    const editedCustomer = cusData.find(
      (customer) => customer._id === customerId
    );
    axios
      .put(`${UpdateCustomers}/${customerId}`, editedCustomer)
      .then(() => {
        axios
          .get(GetCustomers)
          .then((res) => setCustData(res.data))
          .catch((error) => console.error("Error fetching customers:", error));
      })
      .catch((error) => {
        console.error("Error updating customer:", error);
      });
  };

  return (
    <div>
      <div className="view_container">
        <div className="text-center colors">
          <h3>Customers List</h3>
          <p>Total Students:{cusData.length}</p>
        </div>

        <hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Customer Name</th>
              <th>Customer Address</th>
              <th>Customer Contact</th>
              <th>Customer GST</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((customer, index) => (
              <tr key={customer._id}>
                <td>{startIndex + index + 1}</td>
                <td>
                  {editingCustomerId === customer._id ? (
                    <input
                      type="text"
                      value={customer.CustomerName}
                      onChange={(e) =>
                        handleInputChange(e, customer._id, "CustomerName")
                      }
                      class="form-control border"
                    />
                  ) : (
                    <span>{customer.CustomerName}</span>
                  )}
                </td>
                <td>
                  {editingCustomerId === customer._id ? (
                    <input
                      type="text"
                      value={customer.CustomerAddress}
                      onChange={(e) =>
                        handleInputChange(e, customer._id, "CustomerAddress")
                      }
                      class="form-control border"
                    />
                  ) : (
                    <span>{customer.CustomerAddress}</span>
                  )}
                </td>
                <td>
                  {editingCustomerId === customer._id ? (
                    <input
                      type="text"
                      value={customer.CustomerContact}
                      onChange={(e) =>
                        handleInputChange(e, customer._id, "CustomerContact")
                      }
                      class="form-control border"
                    />
                  ) : (
                    <span>{customer.CustomerContact}</span>
                  )}
                </td>
                <td>
                  {editingCustomerId === customer._id ? (
                    <input
                      type="text"
                      value={customer.CustomerGST}
                      onChange={(e) =>
                        handleInputChange(e, customer._id, "CustomerGST")
                      }
                      class="form-control border"
                    />
                  ) : (
                    <span>{customer.CustomerGST}</span>
                  )}
                </td>
                <td className="action_btns">
                  {editingCustomerId === customer._id ? (
                    <button
                      className="mx-2 btn btn-success"
                      onClick={() => handleSave(customer._id)}
                    >
                      <i className="bi bi-check2-square"></i>
                    </button>
                  ) : (
                    <button
                      className="mx-2 btn btn-primary"
                      onClick={() => handleEdit(customer._id)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  )}
                  <div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(customer._id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination pagenation">
            <li className="page-item d-flex text-center">
              <button
                className="page-link"
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {Array.from({ length: lastPage }, (_, i) => (
                <button
                  className={`page-link ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePage(i + 1)}
                  key={i}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="page-link"
                onClick={handleNext}
                disabled={currentPage === lastPage}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ViewCustomer;
