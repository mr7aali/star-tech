const MinLengthCalculator = (name) => {
    let minLength = 2;
    if (name === "password") {
        minLength = 6
    }
   else if (name === "old_password") {
        minLength = 6
    }
   else if (name === "new_password") {
        minLength = 6
    }
   else if (name === "confirm_password") {
        minLength = 6
    }
    else if (name === "email") {
        minLength = 7
    }
    else if (name === "phone") {
        minLength = 8
    }
    else if (name === "firstName") {
        minLength = 2
    }
    else if (name === "lastName") {
        minLength = 3
    }
    return minLength;
}

export const FormHelper = {
    MinLengthCalculator
}