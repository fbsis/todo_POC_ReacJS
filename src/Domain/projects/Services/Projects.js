import Api from "Infra/Api";

export const getAll = async (email, password) => {
    try {
        const response = await Api.get('/project/');
    return response.data;
} catch (error) {
    return "Error";
}
}