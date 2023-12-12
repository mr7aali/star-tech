

export const setToLocalStorage = (key, Token) => {
  


}

export const getFromLocalStorage = (key) => {
    if (!key || typeof window === "undefined" || typeof window.localStorage === "undefined") {
        return "";
      }

 return  localStorage.getItem(key)
}