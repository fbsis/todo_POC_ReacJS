import Api from "Infra/Api";

export const register = async (email, password) =>{
    try {
        const response = await Api.post('/register', {email: email, password: password});
        return response.data;
    } catch (error) {
        return "Error";        
    }
}