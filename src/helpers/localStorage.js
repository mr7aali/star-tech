

export const setToLocalStorage = (key, Token) => {



}

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined" || typeof window.localStorage === "undefined") {
    return "";
  }

  return localStorage.getItem(key)
}
export const setCartDataToLocalStorage = (key, data) => {
  if (!key || typeof window === "undefined" || typeof window.localStorage === "undefined") {
    return "";
  }
  localStorage.setItem(key, JSON.stringify(data))
}


export const getCartDataToLocalStorage = (key) => {
  if (!key || typeof window === "undefined" || typeof window.localStorage === "undefined") {
    return "";
  }

  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }

  return {cart:[]}
}


