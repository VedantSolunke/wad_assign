function validateForm() {
    var id = document.getElementById("ID").value;
    var name = document.getElementById("Name").value;
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var email = document.getElementById("Email").value;
    var pincode = document.getElementById("Pincode").value;

    if (
        id === "" ||
        name === "" ||
        username === "" ||
        password === "" ||
        email === "" ||
        pincode === ""
    ) {
        alert("Please fill in all required fields");
        return false;
    }

    if (!id || !/^[a-zA-Z0-9]+$/.test(id)) {
        alert("Please enter a valid ID with only letters and numbers");
        return false;
    }
    if (!name || !/^[a-zA-Z\s]+$/.test(name)) {
        alert("Please enter a valid name with only letters");
        return false;
    }
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!pincode || /\D/.test(pincode) || pincode.length !== 6) {
        alert("Please enter a valid 6-digit pincode");
        return false;
    }
    if (
        !password ||
        password.length < 8 ||
        !/\d/.test(password) ||
        !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
        alert(
            "Please enter a valid password with at least 8 characters, one digit, and one special character"
        );
        return false;
    }

    return true;
}
