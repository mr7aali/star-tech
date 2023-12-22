
import { ENM_localStorage, Storage } from "@/constant/localstorage";
import { AxiosService } from "@/shared/Axios";
import { jwtDecode } from "jwt-decode";


export const storeInfo = (accessToken) => {
    if (!accessToken || typeof window === "undefined") {
        return ""
    }
    localStorage.setItem(ENM_localStorage.accessToken, accessToken);
}

export const getUserInfo = () => {
    if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
        return "";
    }

    const token = localStorage.getItem(ENM_localStorage.accessToken);
    if (!token) {
        return "";
    }
    const userInfo = jwtDecode(token);
    if (!userInfo.id) {
        return {}
    }

    const userInfoFromLocalStore = localStorage.getItem(ENM_localStorage.userProfile);

    if (userInfoFromLocalStore && userInfoFromLocalStore !== 'undefined') {

        return JSON.parse(userInfoFromLocalStore)
    }
    AxiosService.get(`/api/v1/user/profile/${userInfo.id}`)
        .then(res => {
            localStorage.setItem(ENM_localStorage.userProfile, JSON.stringify(res.data));
            console.log(res.data);
            return res;
        });
    // const result = await AxiosService.get(`/api/v1/user/profile/${userInfo.id}`);
    // const userProfile = result?.data
    // localStorage.setItem(ENM_localStorage.userProfile, JSON.stringify(userProfile));
    // return result?.data

}
export const isLoggedIn = () => {
    if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
        return "";
    }
    const authToken = localStorage.getItem(ENM_localStorage.accessToken);
    return !!authToken;
}


export const removeUserInfo = () => {
    localStorage.removeItem(ENM_localStorage.accessToken);
    localStorage.removeItem(ENM_localStorage.userProfile)
}