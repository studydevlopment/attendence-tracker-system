import axios from "axios";
const url = "http://localhost:8080/springdb";

class Authentication {
    createProduct(product) {
        return axios.post(url+"/"+"user"+"/"+"create", product);
    }

    createEmployee(Employees) {
        return axios.post(url+"/"+"employe"+"/"+"create", Employees);
    }

    getUsersList(){
        return axios.get(url+"/"+"user"+"/"+"all");
    }

    getEmployeList(){
        return axios.get(url+"/"+"employe"+"/"+"all");
    }

    Deletemp(employeeId){
        return axios.delete(url+"/"+"employe"+"/"+"delete"+"/"+employeeId);
    }

    SendEmail(email){
        return axios.post(url+"/"+"email"+"/"+"sendMail",email);
    }
}
export default new Authentication()