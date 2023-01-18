import axios from "axios";
const url = "http://localhost:8080/springdb";

class Authentication {
    createProduct(product) {
        return axios.post(url+"/"+"create", product);
    }

    getUsersList(){
        return axios.get(url+"/"+"all");
    }
}
export default new Authentication()