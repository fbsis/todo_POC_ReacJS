import Api from "Infra/Api";

export const login = async (email, password) =>{

    try {
        const response = await Api.post('/login', {email: email, password: password});

        return response.data;
    } catch (error) {
        return "Error";        
    }

}