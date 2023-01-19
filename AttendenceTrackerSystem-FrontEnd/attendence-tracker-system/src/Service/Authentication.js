import axios from "axios";
const url = "http://localhost:8080/springdb";

class Authentication {
    createProduct(product) {
        return axios.post(url+"/"+"user"+"/"+"create", product);
    }

    getUsersList(){
        return axios.get(url+"/"+"user"+"/"+"all");
    }

    SendEmail(email){
        return axios.post(url+"/"+"email"+"/"+"sendMail",email);
    }
}
export default new Authentication()