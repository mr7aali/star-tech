import axios from "axios";



const HttpService =async () => {

    const baseURL = process.env.BASE_URL;
    console.log(baseURL);

    const inistance = axios.create({
        baseURL: "https://star-tech-back-end.vercel.app",
        timeout: 10000,
        headers: {
            "Content-Type": "Application/json"
        }
    });
    inistance.interceptors.request.use(
        (config) => {
            return config
        },
        (error) => {
            return error
        }
    )
    inistance.interceptors.response.use(
        (response) => {
            // console.log();
            return response?.data
        },
        (error) => {
            return Promise.reject(error)
        }
    );
    return inistance
}


export const AxiosService = await HttpService();