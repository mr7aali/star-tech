import { getFromLocalStorage, setToLocalStorage } from "@/helpers/localStorage"
import { jwtDecode } from "jwt-decode";

export const storeInfo = (accessToken) => {
    setToLocalStorage("accessToken", accessToken);
}

export const getUserInfo = () => {
    const token = getFromLocalStorage("accessToken");

   const userInfo = jwtDecode(token);
    console.log(userInfo.id);
}