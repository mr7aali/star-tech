
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

    return {
        id: userInfo.id,
        email: userInfo.email,
        role: userInfo.role
    }

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