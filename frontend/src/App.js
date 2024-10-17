import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./auth/Login"
import Register from './auth/Register';
import AddStudents from "./pages/students/AddStudents"
import GstBilling from './pages/billing/GstBilling';
import SideBar from './sidebar/SideBar';
import Dashboard from './dashboard/Dashboard';
import AddCustomer from './pages/billing/AddCustomer'
import ViewStudents from './pages/students/ViewStudents';
import ViewCustomer from './pages/billing/ViewCustomer';
import ViewEmployees from './pages/employees/ViewEmployees';
import AddEmployeespage from './pages/employees/AddEmployees';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { GetCustomers, GetEmployees, GetStudent } from './URL/url';
import NonGstBilling from './pages/billing/NonGstBilling';

const PrivateRoute = ({ element, isAuthenticated, ...rest }) => {
  return isAuthenticated ? element : <Navigate to="/" />;
};

function App() {
 
  const [alldatas, setAlldatas] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [allstudatas, setAllstudatas] = useState([]);
  const [cusData, setCustData] = useState([]);

  const fetchEmployees = () => {
    axios.get(GetEmployees, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => setAlldatas(res.data))
      .catch((error) => console.error('Error fetching employees:', error));
  };

  const fetchStudents = () => {
    axios.get(GetStudent, {
      headers: { 
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => setAllstudatas(res.data))
      .catch((error) => console.error('Error fetching students:', error));
  };

  const fetchCustomers = () => {
    axios.get(GetCustomers, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => setCustData(res.data))
      .catch((error) => console.error('Error fetching customers:', error));
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmployees();
      fetchStudents();
      fetchCustomers();
    }
  }, [isAuthenticated]);
 

  return (
  
<>
      <ToastContainer position="top-center" />
      <Routes>
        <Route path='/' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/addstudents' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><AddStudents fetchStudents={fetchStudents} /></SideBar>} />} />
        <Route path='/viewstudents' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><ViewStudents allstudatas={allstudatas} fetchStudents={fetchStudents} setAllstudatas={setAllstudatas} /></SideBar>} />} />
        <Route path='/addemployeespage' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><AddEmployeespage fetchEmployees={fetchEmployees} /></SideBar>} />} />
        <Route path='/viewempolyees' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><ViewEmployees alldatas={alldatas} fetchEmployees={fetchEmployees} setAlldatas={setAlldatas}/></SideBar>} />} />
        <Route path='/gst_bill' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><GstBilling /></SideBar>} />} />
        <Route path='/non_gst' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><NonGstBilling /></SideBar>} />} />
        <Route path='/dashboard' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><Dashboard alldatas={alldatas} cusData={cusData} allstudatas={allstudatas} /></SideBar>} />} />
        <Route path='/addcustomer' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><AddCustomer fetchCustomers={fetchCustomers} /></SideBar>} />} />
        <Route path='/viewcustomers' element={<PrivateRoute isAuthenticated={isAuthenticated} element={<SideBar><ViewCustomer fetchCustomers={fetchCustomers} cusData={cusData} setCustData={setCustData} /></SideBar>} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>



  )
}
export default App