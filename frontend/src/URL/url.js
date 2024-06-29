const registerUser="http://localhost:3003/api/register"
const loginUser="http://localhost:3003/api/login"
//students
const AddStudent="http://localhost:3003/api/create_students"
const GetStudent="http://localhost:3003/api/getstudents_info"
const UpdateStudent="http://localhost:3003/api/updatestudent_info"
const DeleteStudent="http://localhost:3003/api/deletestudent_info"

const AddStudentImg="http://localhost:3003/api/imgupload"
const GetStudentImg="http://localhost:3003/api/getstudent_img"
const UpdateStudentImg="http://localhost:3003/api/update_img"
const DeleteStudentImg="http://localhost:3003/api/delete_img"


//customer
const AddCustomers="http://localhost:3003/api/create_customer"
const GetCustomers="http://localhost:3003/api/getcustomer_info"
const UpdateCustomers="http://localhost:3003/api/updatacustomer_info"
const DeleteCustomers="http://localhost:3003/api/deletecustomer_info"


//employees
const AddEmployees="http://localhost:3003/api/createemployee_info"
const UpdateEmployees="http://localhost:3003/api/updateemployee_info"
const DeleteEmployees="http://localhost:3003/api/deleteemployee_info"
const GetEmployees="http://localhost:3003/api/getemployee_info"

export{registerUser,loginUser,AddStudent,GetStudent,AddCustomers,GetCustomers,UpdateCustomers,DeleteCustomers,
UpdateStudent,DeleteStudent,AddStudentImg,GetStudentImg,UpdateStudentImg,DeleteStudentImg,AddEmployees,UpdateEmployees,
DeleteEmployees,GetEmployees}