
import { AxiosService } from "@/shared/Axios";
import { jwtDecode } from "jwt-decode";


export const storeInfo = (accessToken) => {
    if (!accessToken || typeof window === "undefined") {
        return ""
    }
    localStorage.setItem("accessToken", accessToken);
}

export const getUserInfo = () => {
    if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
        return "";
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
        return "";
    }
    const userInfo = jwtDecode(token);
    if (!userInfo.id) {
        return {}
    }

    const userInfoFromLocalStore = localStorage.getItem("userProfile");

    if (userInfoFromLocalStore && userInfoFromLocalStore !== 'undefined') {

        return JSON.parse(userInfoFromLocalStore)
    }
    AxiosService.get(`/api/v1/user/profile/${userInfo.id}`)
        .then(res => {
            localStorage.setItem("userProfile", JSON.stringify(res.data));
            return res;
        });

}
export const isLoggedIn = () => {
    if (typeof window === "undefined" || typeof window.localStorage === "undefined") {
        return "";
    }
    const authToken = localStorage.getItem("accessToken");
    return !!authToken;
}


export const removeUserInfo = () => {
    localStorage.removeItem("accessToken");
}