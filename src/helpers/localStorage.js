

export const setToLocalStorage = (key, Token) => {
    if (!key || typeof window === "undefined") {
        return ""
    }

    localStorage.setItem(key, Token)
}

export const getFromLocalStorage = (key) => {
    if (!key || typeof window === "undefined" || typeof window.localStorage === "undefined") {
        return "";
      }

 return  localStorage.getItem(key)
}