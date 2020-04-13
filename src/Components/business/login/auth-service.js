import axios from "../../../utils/axios";
//import axios from "axios";

export const validateUser = async (data) => {
    var userData = null;
    await axios.post('/validateuser', data)
        .then(res => {
            (res.data !== "") && (userData = res.data);
        }).catch(err => {
            console.log(err)
        });
    return userData;
};