import { getFromLocalStorage, setToLocalStorage } from "@/helpers/localStorage"
import { jwtDecode } from "jwt-decode";

export const storeInfo = (accessToken) => {
    if (!accessToken || typeof window === "undefined") {
        return ""
    }
    localStorage.setItem(key, Token);
}

export const getUserInfo = () => {
    //     const token = getFromLocalStorage("accessToken");

    //    const userInfo = jwtDecode(token);
    //     console.log(userInfo.id);
    //     return userInfo
    if ( typeof window === "undefined" || typeof window.localStorage === "undefined") {
        return "";
      }

    const token = localStorage.getItem("accessToken");
    
    const userInfo = jwtDecode(token);
    console.log(userInfo);
    return userInfo
  
} 