import axios from "axios";

export const signup = async (formData) => {
    try {
        const {data} = await axios.post('/api/auth/signup', formData);
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}

export const signin = async (formData) => {
    try {
        const {data} = await axios.post('/api/auth/signin', formData);
        console.log(data)
        return data
    } catch (error) {
        return error
    }
}