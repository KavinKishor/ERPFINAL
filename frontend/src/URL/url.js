const registerUser = "http://localhost:3003/api/auth/register";
const loginUser = "http://localhost:3003/api/auth/login";
//students
const AddStudent = "http://localhost:3003/api/students/createstudentinfo";
const GetStudent = "http://localhost:3003/api/students/getstudentsinfo";
const UpdateStudent = "http://localhost:3003/api/students/updatestudentinfo";
const DeleteStudent = "http://localhost:3003/api/students/deletestudentinfo";


//customer
const AddCustomers = "http://localhost:3003/api/customers/createnewcustomer";
const GetCustomers = "http://localhost:3003/api/customers/";
const UpdateCustomers =
  "http://localhost:3003/api/customers/updatecustomerinfo";
const DeleteCustomers =
  "http://localhost:3003/api/customers/deletecustomerinfo";


//employees
const AddEmployees = "http://localhost:3003/api/employees/createnewemployeinfo";
const UpdateEmployees =
  "http://localhost:3003/api/employees/updateemployeeinfo";
const DeleteEmployees =
  "http://localhost:3003/api/employees/deleteemployeeinfo";
const GetEmployees = "http://localhost:3003/api/employees/";

export{registerUser,loginUser,AddStudent,GetStudent,AddCustomers,GetCustomers,UpdateCustomers,DeleteCustomers,
UpdateStudent,DeleteStudent,AddEmployees,UpdateEmployees,
DeleteEmployees,GetEmployees}